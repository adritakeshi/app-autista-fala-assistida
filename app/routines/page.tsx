import { fetchRoutines } from '@/lib/data';

const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

export default async function RoutinesPage() {
  const routines = await fetchRoutines();
  const pending = routines.filter((routine) => !routine.isDone).length;
  const completed = routines.length - pending;

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="section-title">Rotina visual</h1>
            <p className="mt-2 text-slate-600">Veja rapidamente o que já foi feito e o que ainda falta no dia.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <div className="rounded-[20px] bg-emerald-50 px-4 py-3 text-emerald-900">Concluídas: {completed}</div>
            <div className="rounded-[20px] bg-amber-50 px-4 py-3 text-amber-900">Pendentes: {pending}</div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {routines.map((routine) => (
          <div key={routine.id} className="card p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-bold text-slate-900">{routine.title}</div>
                <div className="mt-2 text-sm text-slate-600">{weekDays[routine.dayOfWeek]} às {routine.time}</div>
              </div>
              <div className={`rounded-full px-4 py-2 text-sm ${routine.isDone ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'}`}>
                {routine.isDone ? 'Feita' : 'Pendente'}
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-500">Use esta tela para acompanhar o dia de forma previsível e visual.</div>
          </div>
        ))}
      </div>
    </div>
  );
}
