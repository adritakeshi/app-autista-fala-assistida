import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const board = await prisma.board.findUnique({ where: { id }, include: { categories: { include: { cards: true } } } });
  return board ? NextResponse.json(board) : NextResponse.json({ error: 'Not found' }, { status: 404 });
}
