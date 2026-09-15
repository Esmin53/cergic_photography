'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'super-secret-key-change-this-in-env'
);

export async function loginAction(formData: FormData) {
  const name = formData.get('name') as string;
  const password = formData.get('password') as string;

  if (!name || !password) {
    return { error: 'name and password are required' };
  }

  const [user] = await db.select().from(users).where(eq(users.name, name));

  if (!user) {
    return { error: 'Invalid name or password' };
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return { error: 'Invalid name or password' };
  }

  const token = await new SignJWT({ userId: user.id, role: user.role })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(JWT_SECRET);

  const cookieStore = await cookies();
  cookieStore.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 72, 
  });

  redirect('/admin');
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_token');
  redirect('/login');
}