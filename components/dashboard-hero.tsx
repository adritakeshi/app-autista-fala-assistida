export function DashboardHero() {
  return (
    <section className="card overflow-hidden p-6 md:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <div className="inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm">
            Comunicação alternativa acolhedora e profissional
          </div>
          <h1 className="mt-4 bg-gradient-to-r from-sky-700 via-blue-600 to-violet-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Comunicação Alternativa profissional
          </h1>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
            Plataforma full stack para AAC com quadro de comunicação, PECS por níveis, relatórios clínicos, upload de imagens reais e funcionamento offline.
          </p>
        </div>
        <div className="rounded-[26px] bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 p-5 text-slate-700 shadow-inner">
          <p className="font-semibold">Foco do produto</p>
          <p className="mt-2 text-sm leading-6">
            Ajudar pessoas autistas com suporte elevado a comunicar necessidades, sentimentos, escolhas, autorregulação e rotinas com apoio visual e voz sintetizada.
          </p>
        </div>
      </div>
    </section>
  );
}
