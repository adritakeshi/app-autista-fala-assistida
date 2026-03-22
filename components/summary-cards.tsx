import type { DashboardSummary } from '@/types';

export function SummaryCards({ summary }: { summary: DashboardSummary }) {
  const items = [
    ['Perfis', summary.profiles, 'metric-card-sky'],
    ['Pranchas', summary.boards, 'metric-card-emerald'],
    ['Cartões', summary.cards, 'metric-card-amber'],
    ['Relatórios', summary.reports, 'metric-card-violet'],
    ['Reforços hoje', summary.rewardsToday, 'metric-card-sky'],
  ] as const;

  return (
    <section className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
      {items.map(([label, value, style]) => (
        <div key={String(label)} className={style}>
          <div className="text-sm text-slate-500">{label}</div>
          <div className="mt-2 text-3xl font-bold text-slate-900">{value}</div>
        </div>
      ))}
    </section>
  );
}
