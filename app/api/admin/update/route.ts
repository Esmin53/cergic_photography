import { db } from "@/db";
import { landingImages } from "@/db/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
          const body: {
            category: string
            slot: number
            fileUrl: string
            textColor: string
            title: string
          } = await request.json();
    
          const {category, slot, fileUrl, textColor, title} = body

        const slotId = `${category}-slot-${slot}`;

        await db
            .insert(landingImages)
            .values({
                id: slotId,
                category,
                slotNumber: slot,
                imageUrl: fileUrl,
                title,
                color: textColor,
                updatedAt: new Date(),
            })
            .onConflictDoUpdate({
                target: [landingImages.category, landingImages.slotNumber],
                set: {
                imageUrl: fileUrl,
                title,
                color: textColor,
                updatedAt: new Date(),
                },
            });

        return NextResponse.json({ 
            message: 'Created successfully', 
            data: body 
            }, { status: 201 });
    } catch (error) {
        console.log(error)
          return NextResponse.json({ 
        message: 'Upload failed', 
        data: error
        }, { status: 500 });
    }

}