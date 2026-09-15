import { db } from "@/db";
import { prices } from "@/db/schema";
import { NextResponse } from "next/server"


export async function GET(req: Request) {
    try {
        const data = await db.select().from(prices)


        console.log(data)

        return NextResponse.json({ 
            message: 'Created successfully', 
            data: data
            }, { status: 201 });

    } catch (error) {
        
    }

}