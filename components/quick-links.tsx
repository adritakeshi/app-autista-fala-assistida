import Link from 'next/link';

const links = [
  ['/board', 'Começar comunicação', 'Abrir os cartões e falar na hora.'],
  ['/routines', 'Ver rotina de hoje', 'Checar o que vem agora e marcar etapas.'],
  ['/caregiver', 'Editar cartões', 'Trocar fotos, frases e categorias.'],
  ['/reports', 'Ler relatórios', 'Ver progresso e registros de sessão.'],
];

export function QuickLinks() {
  return (
    <div className="mt-4 grid gap-3">
      {links.map(([href, label, description]) => (
        <Link key={href} href={href} className="rounded-[22px] border border-white/80 bg-gradient-to-br from-white to-sky-50/80 px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="font-semibold text-slate-900">{label}</div>
          <div className="mt-1 text-sm text-slate-600">{description}</div>
        </Link>
      ))}
    </div>
  );
}
