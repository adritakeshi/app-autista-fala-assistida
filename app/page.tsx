import Link from 'next/link';
import { fetchDashboardSummary } from '@/lib/data';
import { DashboardHero } from '@/components/dashboard-hero';
import { SummaryCards } from '@/components/summary-cards';
import { QuickLinks } from '@/components/quick-links';

const startCards = [
  {
    title: 'Quero comunicar agora',
    description: 'Vai direto para o quadro AAC com cartões, frase atual e voz.',
    href: '/board',
  },
  {
    title: 'Quero organizar a rotina',
    description: 'Abre a rotina visual do dia com status fácil de entender.',
    href: '/routines',
  },
  {
    title: 'Quero ajustar o conteúdo',
    description: 'Entra no modo cuidador para editar cartões, fotos e perfis.',
    href: '/caregiver',
  },
];

export default async function HomePage() {
  const summary = await fetchDashboardSummary();

  return (
    <div className="space-y-6">
      <DashboardHero />
      <section className="grid gap-4 lg:grid-cols-3">
        {startCards.map((item) => (
          <Link key={item.href} href={item.href} className="card p-6 transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(59,130,246,0.16)]">
            <div className="text-lg font-bold text-slate-900">{item.title}</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">{item.description}</div>
            <div className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">Abrir</div>
          </Link>
        ))}
      </section>
      <SummaryCards summary={summary} />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card p-6">
          <h2 className="section-title">O que fica mais fácil neste app</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              'Abrir o quadro de comunicação sem precisar procurar função',
              'Usar poucos passos para falar, limpar e trocar categoria',
              'Acompanhar rotina e progresso com leitura rápida',
              'Editar cartões e fotos em uma área separada para cuidador',
              'Registrar relatórios e revisar sessões com menos esforço',
              'Usar no tablet ou celular com suporte offline',
            ].map((item) => (
              <div key={item} className="rounded-[22px] bg-gradient-to-br from-white to-sky-50 p-4 text-slate-700 shadow-inner">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <h2 className="section-title">Atalhos principais</h2>
          <QuickLinks />
          <div className="mt-6 rounded-[22px] bg-gradient-to-br from-blue-50 to-indigo-100 p-4 text-sm text-slate-700">
            Dica: para uso diário, comece sempre por <strong>Comunicar</strong>. Para ajustes, use <strong>Cuidador</strong>.
          </div>
          <Link href="/docs" className="mt-4 inline-flex rounded-[20px] bg-slate-900 px-5 py-3 text-white shadow-sm">
            Ler documentação
          </Link>
        </div>
      </div>
    </div>
  );
}
