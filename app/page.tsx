import Link from "next/link";
import type { Route } from "next";

const startCards: {
  title: string;
  description: string;
  href: Route;
  cta: string;
}[] = [
  {
    title: "Comunicar",
    description: "Abrir o quadro AAC com favoritos e categorias.",
    href: "/board",
    cta: "Abrir quadro",
  },
  {
    title: "Rotina",
    description: "Ver e marcar a rotina visual do dia.",
    href: "/routines",
    cta: "Ver rotina",
  },
  {
    title: "Cuidador",
    description: "Editar cartões, categorias e metas.",
    href: "/caregiver",
    cta: "Abrir área do cuidador",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">AAC Pro</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Comunicação alternativa em português com foco em rotina, baixo estímulo e uso com cuidador.
        </p>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        {startCards.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-lg font-bold text-slate-900">{item.title}</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">{item.description}</div>
            <div className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
              {item.cta}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
