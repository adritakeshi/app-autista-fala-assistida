import { fetchProfiles } from '@/lib/data';

export default async function ProfilesPage() {
  const profiles = await fetchProfiles();

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="section-title">Perfis</h1>
        <p className="mt-2 text-slate-600">Gestão de perfis para família, escola e clínica.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {profiles.map((profile) => (
          <div key={profile.id} className="card p-5">
            <div className="text-xl font-bold">{profile.name}</div>
            <div className="mt-2 text-sm text-slate-600">Nível de suporte: {profile.supportLevel}</div>
            <div className="mt-1 text-sm text-slate-600">Reforçador: {profile.favoriteReward || '—'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
