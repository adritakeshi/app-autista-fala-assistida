import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cardSchema } from '@/lib/schemas';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const parsed = cardSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const card = await prisma.card.update({ where: { id }, data: parsed.data });
  return NextResponse.json(card);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await prisma.card.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
