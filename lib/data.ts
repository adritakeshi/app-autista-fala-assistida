import { prisma } from '@/lib/prisma';
import type { DashboardSummary } from '@/types';

export async function fetchDashboardSummary(): Promise<DashboardSummary> {
  const [profiles, boards, cards, reports] = await Promise.all([
    prisma.profile.count(),
    prisma.board.count(),
    prisma.card.count(),
    prisma.report.count(),
  ]);

  return {
    profiles,
    boards,
    cards,
    reports,
    rewardsToday: 4,
  };
}

export async function fetchBoardWithRelations() {
  return prisma.board.findFirst({
    include: {
      categories: {
        include: {
          cards: true,
        },
        orderBy: { order: 'asc' },
      },
    },
  });
}

export async function fetchProfiles() {
  return prisma.profile.findMany({ orderBy: { createdAt: 'asc' } });
}

export async function fetchReports() {
  return prisma.report.findMany({
    include: { profile: true },
    orderBy: { sessionDate: 'desc' },
  });
}

export async function fetchRoutines() {
  return prisma.routine.findMany({ orderBy: [{ dayOfWeek: 'asc' }, { time: 'asc' }] });
}
