import { fetchReports } from '@/lib/data';

export default async function ReportsPage() {
  const reports = await fetchReports();

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="section-title">Relatórios</h1>
        <p className="mt-2 text-slate-600">Leitura simples do progresso por sessão, com foco em meta, ajuda necessária e autorregulação.</p>
      </div>
      <div className="grid gap-4">
        {reports.map((report) => (
          <div key={report.id} className="card p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xl font-bold text-slate-900">{report.profile.name}</div>
                <div className="text-sm text-slate-500">Sessão em {new Date(report.sessionDate).toLocaleDateString('pt-BR')}</div>
              </div>
              <div className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-900">
                Pedidos bem-sucedidos: {report.successfulRequests}
              </div>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-[18px] bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-500">Meta da sessão</div>
                <div className="mt-1 text-slate-900">{report.goal}</div>
              </div>
              <div className="rounded-[18px] bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-500">Ajuda necessária</div>
                <div className="mt-1 text-slate-900">{report.promptLevel}</div>
              </div>
              <div className="rounded-[18px] bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-500">Notas</div>
                <div className="mt-1 text-slate-900">{report.notes}</div>
              </div>
              <div className="rounded-[18px] bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-500">Autorregulação</div>
                <div className="mt-1 text-slate-900">{report.regulationNotes || '—'}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
