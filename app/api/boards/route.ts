import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const boards = await prisma.board.findMany({ include: { categories: true } });
  return NextResponse.json(boards);
}

export async function POST(req: Request) {
  const body = await req.json();
  const board = await prisma.board.create({ data: { name: body.name, description: body.description } });
  return NextResponse.json(board, { status: 201 });
}
