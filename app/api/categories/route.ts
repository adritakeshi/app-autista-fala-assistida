import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { categorySchema } from '@/lib/schemas';

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = categorySchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const category = await prisma.category.create({ data: parsed.data });
  return NextResponse.json(category, { status: 201 });
}
