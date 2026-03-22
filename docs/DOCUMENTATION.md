# AAC Pro — documentação funcional e técnica

## 1. Objetivo
AAC Pro é uma plataforma de comunicação alternativa e aumentativa para pessoas autistas com maior necessidade de suporte. O produto foi desenhado para uso conjunto com família, cuidadores, escola e equipe clínica.

## 2. Entregas desta versão
1. Projeto em Next.js com múltiplos arquivos e estrutura profissional.
2. Upload de fotos reais para cartões personalizados.
3. Suporte a quadros por nível PECS.
4. Área clínica com relatórios por sessão.
5. PWA com base para uso offline em tablet e celular.

## 3. Perfis de uso
- Pessoa usuária do AAC
- Cuidador ou familiar
- Fonoaudiólogo
- Terapeuta ocupacional
- Professor ou mediador escolar

## 4. Módulos
### 4.1 Quadro AAC
- categorias editáveis
- cartões com emoji, imagem, frase e favorito
- síntese de voz em pt-BR
- montagem de frase por toques
- filtro por níveis PECS

### 4.2 Cuidador
- revisão do vocabulário disponível
- upload de imagens reais
- visão consolidada por perfil

### 4.3 Rotina visual
- agenda simples por dia e horário
- apoio para previsibilidade e transições

### 4.4 Relatórios clínicos
- meta da sessão
- anotações
- nível de ajuda/prompt
- número de pedidos bem-sucedidos
- observações de autorregulação

### 4.5 Offline / PWA
- manifesto instalado
- base para cache de páginas
- fila local para ações pendentes

## 5. Estrutura do projeto
- `app/`: rotas e APIs
- `components/`: componentes de UI
- `lib/`: dados, schemas, voz
- `prisma/`: banco e seed
- `docs/`: documentação
- `public/uploads/`: imagens reais

## 6. Como rodar localmente
1. Copie `.env.example` para `.env`
2. Execute `npm install`
3. Execute `npx prisma generate`
4. Execute `npx prisma db push`
5. Execute `npm run seed`
6. Execute `npm run dev`

## 7. Banco de dados
Entidades:
- Profile
- Board
- Category
- Card
- Routine
- Report

## 8. Diretrizes clínicas e de UX
- poucas opções por vez
- alto contraste e botões grandes
- linguagem concreta
- reforço imediato para comunicação funcional
- uso combinado com objetos reais do cotidiano
- personalização guiada por equipe clínica

## 9. Limites desta entrega
- sem autenticação
- sem multi-organização
- sem storage em nuvem
- sem trilha formal de auditoria
- sem relatórios analíticos avançados

## 10. Próximos passos de produção
- PostgreSQL + migrações versionadas
- Auth.js com papéis de acesso
- armazenamento S3
- dashboard analítico por período
- consentimento e LGPD
- testes automatizados e CI/CD
