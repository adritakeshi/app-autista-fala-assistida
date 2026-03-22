import Link from 'next/link';

const primaryLinks = [
  ['/', 'Início'],
  ['/board', 'Comunicar'],
  ['/routines', 'Rotina'],
  ['/caregiver', 'Cuidador'],
];

const secondaryLinks = [
  ['/profiles', 'Perfis'],
  ['/reports', 'Relatórios'],
  ['/settings', 'Configurações'],
  ['/docs', 'Docs'],
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <div className="container-shell py-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="bg-gradient-to-r from-sky-700 via-blue-600 to-violet-600 bg-clip-text text-xl font-bold text-transparent">
              AAC Pro
            </Link>
            <div className="hidden rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 md:inline-flex">
              Mais simples para família e cuidador
            </div>
          </div>

          <nav className="flex flex-wrap gap-2 text-sm">
            {primaryLinks.map(([href, label]) => (
              <Link key={href} href={href} className="pill-nav pill-nav-primary">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <nav className="mt-3 flex flex-wrap gap-2 text-sm">
          {secondaryLinks.map(([href, label]) => (
            <Link key={href} href={href} className="pill-nav pill-nav-secondary">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
