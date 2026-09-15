import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../db/schema';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing in .env.local');
}


const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql, { schema });

async function seedAdmin() {
  const adminName = 'Majid';
  const plainTextPassword = process.env.ADMIN_PASSWORD!;

  console.log('Seeding admin user...');

  try {
    const hashedPassword = await bcrypt.hash(plainTextPassword, 10);

    await db.insert(schema.users).values({
      name: adminName,
      password: hashedPassword,
      role: 'admin',
    });

    console.log(`✅ Admin user created successfully: ${adminName}`);
  } catch (error: unknown) {
    const err = error as { code?: string; message?: string };

    if (err.code === '23505') {
      console.log(`⚠️ User with name ${adminName} already exists.`);
    } else {
      console.error('❌ Error seeding database:', err.message || error);
    }
  } finally {
    process.exit(0);
  }
}

seedAdmin();