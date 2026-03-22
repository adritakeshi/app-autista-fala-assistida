import { fetchBoardWithRelations } from '@/lib/data';
import { AACBoardClient } from '@/components/aac-board-client';

export default async function BoardPage() {
  const board = await fetchBoardWithRelations();

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="section-title">Comunicar</h1>
            <p className="mt-2 text-slate-600">Escolha uma categoria, toque no cartão e use a voz. A frase atual aparece no topo.</p>
          </div>
          <div className="rounded-[22px] bg-sky-50 px-4 py-3 text-sm text-sky-800">
            Passos rápidos: 1. escolher categoria 2. tocar no cartão 3. falar a frase
          </div>
        </div>
      </div>
      {board ? <AACBoardClient categories={board.categories} /> : <div className="card p-6">Nenhuma prancha cadastrada.</div>}
    </div>
  );
}
