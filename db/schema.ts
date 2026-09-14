import { pgTable, text, integer, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';

export const landingImages = pgTable(
  'landing_images',
  {
    id: text('id').primaryKey(),
    category: text('category').notNull(),
    title: text('title'),
    color: text('color').default('#e2e8f0'), 
    slotNumber: integer('slot_number').notNull(),
    imageUrl: text('image_url').notNull(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()), 
  },
  (table) => [
    uniqueIndex('category_slot_idx').on(table.category, table.slotNumber),
  ]
);