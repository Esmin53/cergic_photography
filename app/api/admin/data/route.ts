import { db } from "@/db";
import { landingImages } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server"


export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)

        const category = searchParams.get("category") as string

        const data = await db.select().from(landingImages).where(eq(landingImages.category, category)).orderBy(landingImages.slotNumber)


        console.log(data)

        return NextResponse.json({ 
            message: 'Created successfully', 
            data: data
            }, { status: 201 });

    } catch (error) {
        
    }
    

}