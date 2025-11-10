

// app/api/bookes/route.ts

import books from "@/app/api/db";
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json(books)
}

export async function POST(request: NextRequest) {
    const newBook = await request.json();
    books.push(newBook);

    return NextResponse.json(books)
}