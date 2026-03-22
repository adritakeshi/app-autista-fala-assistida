import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { routineSchema } from '@/lib/schemas';

export async function GET() {
  const routines = await prisma.routine.findMany({ orderBy: [{ dayOfWeek: 'asc' }, { time: 'asc' }] });
  return NextResponse.json(routines);
}

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = routineSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const routine = await prisma.routine.create({ data: parsed.data });
  return NextResponse.json(routine, { status: 201 });
}
