import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { profileSchema } from '@/lib/schemas';

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const profile = await prisma.profile.findUnique({ where: { id } });
  return profile ? NextResponse.json(profile) : NextResponse.json({ error: 'Not found' }, { status: 404 });
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const parsed = profileSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const profile = await prisma.profile.update({ where: { id }, data: parsed.data });
  return NextResponse.json(profile);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await prisma.profile.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
