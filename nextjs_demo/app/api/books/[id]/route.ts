

// app/api/books/[id]/route.ts

import books from "@/app/api/db"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params
    const updatedBook = await request.json()

    const index = books.findIndex((book) => book.id === +id) // + to convert to number
    books[index] = updatedBook

    return NextResponse.json(books)
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params
    const index = books.findIndex((book) => book.id === + id) // + to convert to number
    books.splice(index, 1)

    return NextResponse.json(books)
}