'use client';

import { useState } from 'react';
import { readOfflineQueue } from '@/hooks/useOfflineQueue';

export default function SettingsPage() {
  const [queueCount, setQueueCount] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="section-title">Configurações</h1>
        <p className="mt-2 text-slate-600">Ajustes simples para uso no tablet, celular e ambiente sem internet.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-bold">Offline e instalação</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Instale no tablet ou celular pelo navegador.</li>
            <li>Abra as páginas principais mesmo sem internet.</li>
            <li>Guarde ações na fila local até sincronizar depois.</li>
          </ul>
          <button onClick={async () => setQueueCount((await readOfflineQueue()).length)} className="mt-4 rounded-[20px] bg-slate-900 px-4 py-3 text-white">
            Ver fila offline
          </button>
          {queueCount !== null && <div className="mt-3 rounded-[18px] bg-slate-50 p-3 text-sm text-slate-600">Itens na fila: {queueCount}</div>}
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-bold">Boas práticas</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p>Mostre poucas opções visuais por vez.</p>
            <p>Associe o cartão ao objeto real e à ação do momento.</p>
            <p>Modele a fala sem transformar todo uso em teste.</p>
            <p>Revise relatórios e rotina semanalmente com a equipe.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
