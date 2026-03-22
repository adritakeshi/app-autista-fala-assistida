# Arquitetura

## Stack
- Next.js 15 com App Router
- TypeScript
- Prisma ORM
- SQLite para ambiente local e piloto
- Tailwind CSS
- next-pwa para cache offline

## Camadas
- `app/`: rotas, telas e API endpoints
- `components/`: blocos de UI reutilizáveis
- `lib/`: acesso a dados, schemas, voz e Prisma
- `prisma/`: schema e seed
- `docs/`: documentação funcional e técnica
- `public/uploads`: imagens reais enviadas pelo cuidador

## Fluxos principais
1. Cuidador cria perfil e personaliza reforçadores.
2. Equipe organiza prancha por categorias e nível PECS.
3. Usuário seleciona cartões e o sistema fala a frase.
4. Rotinas visuais apoiam previsibilidade e transição.
5. Clínico registra sessão e acompanha evolução funcional.
6. Ações críticas podem ser colocadas em fila offline.

## Evolução para produção
- trocar SQLite por PostgreSQL
- autenticação com NextAuth ou Auth.js
- storage S3 para imagens
- auditoria clínica por organização
- LGPD, consentimento e trilha de acesso
