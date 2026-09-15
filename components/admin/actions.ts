"use server";

import { db } from "@/db";
import { contact, prices } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function getPricesData() {
  try {
    const data = await db.select().from(prices).orderBy(desc(prices.price));
    return { data, error: null };
  } catch (error) {
    console.error("Failed to fetch prices:", error);
    return { data: null, error: "Failed to fetch prices" };
  }
}

export async function getMajidData() {
  try {
    const data = await db.select().from(contact);
    return { data, error: null };
  } catch (error) {
    console.error("Failed to fetch prices:", error);
    return { data: null, error: "Failed to fetch prices" };
  }
}

export async function createPriceAction(formData: FormData) {
  const name = formData.get('name') as string;
  const price = formData.get('price') as string;

  if (!name || !price) {
    return { error: 'Name and price are required' };
  }

  try {
    await db.insert(prices).values({
      name,
      price,
    });


    revalidatePath('/admin/prices');

    return { success: true, error: null };
  } catch (error) {
    console.error('Insert error:', error);
    return { success: false, error: 'Failed to create price package' };
  }
}

export async function deletePriceAction(id: number) {
  try {
    await db.delete(prices).where(eq(prices.id, id));
    revalidatePath('/admin/prices');
    return { success: true, error: null };
  } catch (error) {
    console.error('Delete price error:', error);
    return { success: false, error: 'Greška pri brisanju cijene.' };
  }
}