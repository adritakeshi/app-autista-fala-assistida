import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { profileSchema } from '@/lib/schemas';

export async function GET() {
  const profiles = await prisma.profile.findMany({ orderBy: { createdAt: 'asc' } });
  return NextResponse.json(profiles);
}

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = profileSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const profile = await prisma.profile.create({ data: parsed.data });
  return NextResponse.json(profile, { status: 201 });
}
