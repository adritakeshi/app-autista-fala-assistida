import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.report.deleteMany();
  await prisma.card.deleteMany();
  await prisma.category.deleteMany();
  await prisma.board.deleteMany();
  await prisma.routine.deleteMany();
  await prisma.profile.deleteMany();

  const profile = await prisma.profile.create({
    data: {
      name: 'Perfil Principal',
      age: 8,
      supportLevel: 'Suporte alto',
      favoriteReward: 'Bolinha sensorial',
    },
  });

  const board = await prisma.board.create({
    data: {
      name: 'Prancha principal',
      description: 'Comunicação funcional diária',
      categories: {
        create: [
          {
            name: 'Necessidades',
            level: 1,
            order: 1,
            cards: {
              create: [
                { label: 'Água', phrase: 'Eu quero água', emoji: '💧', favorite: true, level: 1, order: 1 },
                { label: 'Comida', phrase: 'Eu quero comida', emoji: '🍽️', favorite: true, level: 1, order: 2 },
                { label: 'Banheiro', phrase: 'Quero ir ao banheiro', emoji: '🚽', favorite: true, level: 1, order: 3 },
              ],
            },
          },
          {
            name: 'Pessoas',
            level: 2,
            order: 2,
            cards: {
              create: [
                { label: 'Mamãe', phrase: 'Quero mamãe', emoji: '👩', favorite: true, level: 2, order: 1 },
                { label: 'Papai', phrase: 'Quero papai', emoji: '👨', favorite: false, level: 2, order: 2 },
                { label: 'Ajuda', phrase: 'Eu preciso de ajuda', emoji: '🆘', favorite: true, level: 2, order: 3 },
              ],
            },
          },
          {
            name: 'Sentimentos',
            level: 3,
            order: 3,
            cards: {
              create: [
                { label: 'Feliz', phrase: 'Estou feliz', emoji: '😊', favorite: false, level: 3, order: 1 },
                { label: 'Dor', phrase: 'Estou com dor', emoji: '😖', favorite: true, level: 3, order: 2 },
              ],
            },
          },
        ],
      },
    },
    include: { categories: true },
  });

  await prisma.routine.createMany({
    data: [
      { title: 'Bom dia', time: '08:00', dayOfWeek: 1 },
      { title: 'Comunicação', time: '09:00', dayOfWeek: 1 },
      { title: 'Lanche', time: '10:00', dayOfWeek: 1 },
      { title: 'Sono', time: '19:00', dayOfWeek: 1 },
    ],
  });

  await prisma.report.create({
    data: {
      profileId: profile.id,
      sessionDate: new Date(),
      goal: 'Pedir água com apoio visual',
      notes: 'Selecionou o cartão correto em 4 de 5 tentativas.',
      promptLevel: 'Ajuda gestual',
      successfulRequests: 4,
      regulationNotes: 'Melhor resposta após pausa sensorial curta.',
    },
  });

  console.log('Seed concluído', board.id);
}

main().finally(() => prisma.$disconnect());
