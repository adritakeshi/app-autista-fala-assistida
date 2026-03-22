import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { reportSchema } from '@/lib/schemas';

export async function GET() {
  const reports = await prisma.report.findMany({ include: { profile: true }, orderBy: { sessionDate: 'desc' } });
  return NextResponse.json(reports);
}

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = reportSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const report = await prisma.report.create({
    data: { ...parsed.data, sessionDate: new Date(parsed.data.sessionDate) },
  });
  return NextResponse.json(report, { status: 201 });
}
