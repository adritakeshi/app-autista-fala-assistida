import { fetchBoardWithRelations, fetchProfiles } from '@/lib/data';

export default async function CaregiverPage() {
  const [board, profiles] = await Promise.all([fetchBoardWithRelations(), fetchProfiles()]);

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="section-title">Cuidador</h1>
            <p className="mt-2 text-slate-600">Área para atualizar vocabulário, revisar perfis e subir fotos reais sem mexer no quadro principal.</p>
          </div>
          <div className="rounded-[22px] bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Fluxo sugerido: 1. revisar perfil 2. ajustar cartões 3. enviar novas imagens
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-bold">Perfis ativos</h2>
            <div className="mt-4 grid gap-3">
              {profiles.map((profile) => (
                <div key={profile.id} className="rounded-[22px] bg-slate-50 p-4">
                  <div className="font-semibold text-slate-900">{profile.name}</div>
                  <div className="mt-1 text-sm text-slate-500">Nível de suporte: {profile.supportLevel}</div>
                  <div className="mt-1 text-sm text-slate-500">Reforçador preferido: {profile.favoriteReward || '—'}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-bold">Upload de foto real</h2>
            <p className="mt-2 text-sm text-slate-600">Use fotos do cotidiano para deixar o reconhecimento mais fácil.</p>
            <form action="/api/uploads" method="post" encType="multipart/form-data" className="mt-4 rounded-[22px] border border-dashed border-slate-300 bg-slate-50 p-4">
              <label className="block text-sm font-semibold">Selecionar imagem</label>
              <input type="file" name="file" accept="image/*" className="mt-3 block w-full text-sm" />
              <button className="mt-4 rounded-[20px] bg-slate-900 px-4 py-3 text-white">Enviar imagem</button>
            </form>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold">Conteúdo da prancha</h2>
          <p className="mt-2 text-sm text-slate-600">Veja as categorias e cartões cadastrados para saber o que já está disponível.</p>
          <div className="mt-4 space-y-4">
            {board?.categories.map((category) => (
              <div key={category.id} className="rounded-[22px] border border-slate-200 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-slate-900">{category.name}</div>
                    <div className="text-sm text-slate-500">{category.cards.length} cartões</div>
                  </div>
                  <div className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">Nível PECS {category.level}</div>
                </div>
                <div className="mt-3 grid gap-2 md:grid-cols-2">
                  {category.cards.map((card) => (
                    <div key={card.id} className="rounded-[18px] bg-slate-50 p-3 text-sm">
                      <div className="font-semibold text-slate-900">{card.label}</div>
                      <div className="text-slate-500">{card.phrase}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
