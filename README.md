# AAC Pro

Projeto full stack em Next.js para comunicação alternativa e aumentativa.

## Stack
- Next.js 15
- TypeScript
- Prisma + SQLite
- Tailwind CSS
- PWA

## Como executar
```bash
cp .env.example .env
npm install
npx prisma generate
npx prisma db push
npm run seed
npm run dev
```

## Módulos
- Perfis
- Quadro AAC
- Níveis PECS
- Rotinas visuais
- Relatórios clínicos
- Uploads de imagens reais
- Base para offline/PWA

## Documentação
- `docs/DOCUMENTATION.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
