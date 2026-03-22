import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cardSchema } from '@/lib/schemas';

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = cardSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const card = await prisma.card.create({ data: parsed.data });
  return NextResponse.json(card, { status: 201 });
}
