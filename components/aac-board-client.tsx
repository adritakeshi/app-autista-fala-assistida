'use client';

import { useMemo, useState } from 'react';
import { speakText } from '@/lib/speech';

type BoardProps = {
  categories: Array<{
    id: string;
    name: string;
    level: number;
    cards: Array<{
      id: string;
      label: string;
      phrase: string;
      emoji: string | null;
      imageUrl: string | null;
      favorite: boolean;
      level: number;
    }>;
  }>;
};

export function AACBoardClient({ categories }: BoardProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id ?? '');
  const [search, setSearch] = useState('');
  const [sentence, setSentence] = useState<string[]>([]);
  const [levelFilter, setLevelFilter] = useState<number>(1);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const allCards = categories.flatMap((category) => category.cards.map((card) => ({ ...card, categoryName: category.name, categoryId: category.id })));
  const favoriteCards = allCards.filter((card) => card.favorite);

  const visibleCards = useMemo(() => {
    const base = search
      ? allCards.filter((card) => `${card.label} ${card.phrase} ${card.categoryName}`.toLowerCase().includes(search.toLowerCase()))
      : showFavoritesOnly
        ? favoriteCards
        : (categories.find((category) => category.id === selectedCategory)?.cards ?? []);

    return base.filter((card) => card.level <= levelFilter);
  }, [search, allCards, favoriteCards, categories, selectedCategory, levelFilter, showFavoritesOnly]);

  const currentCategory = categories.find((category) => category.id === selectedCategory);

  function addCardToSentence(label: string) {
    setSentence((prev) => [...prev, label.toLowerCase()]);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <aside className="card p-5">
        <h2 className="text-xl font-bold">Escolher cartões</h2>
        <p className="mt-2 text-sm text-slate-600">Filtre por nível, favorito ou pesquisa. Depois toque no cartão desejado.</p>

        <div className="mt-5 rounded-[22px] bg-slate-50 p-4">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-medium text-slate-700">Nível PECS</span>
            <span className="rounded-full bg-white px-3 py-1 text-slate-600 shadow-sm">Até {levelFilter}</span>
          </div>
          <input type="range" min="1" max="6" value={levelFilter} onChange={(e) => setLevelFilter(Number(e.target.value))} className="mt-4 w-full" />
        </div>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar palavra ou frase"
          className="mt-4 w-full rounded-[20px] border border-white/80 bg-white/90 px-4 py-3 shadow-sm"
        />

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => {
              setShowFavoritesOnly(false);
              setSearch('');
            }}
            className={`rounded-full px-4 py-2 text-sm shadow-sm ${!showFavoritesOnly ? 'bg-slate-900 text-white' : 'bg-white'}`}
          >
            Todas
          </button>
          <button
            onClick={() => {
              setShowFavoritesOnly(true);
              setSearch('');
            }}
            className={`rounded-full px-4 py-2 text-sm shadow-sm ${showFavoritesOnly ? 'bg-slate-900 text-white' : 'bg-white'}`}
          >
            Favoritos
          </button>
        </div>

        <div className="mt-4 grid gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setSearch('');
                setShowFavoritesOnly(false);
              }}
              className={`rounded-[20px] px-4 py-3 text-left shadow-sm ${selectedCategory === category.id && !showFavoritesOnly ? 'bg-slate-900 text-white' : 'bg-white/90'}`}
            >
              <div className="font-medium">{category.name}</div>
              <div className={`text-xs ${selectedCategory === category.id && !showFavoritesOnly ? 'text-slate-200' : 'text-slate-500'}`}>
                {category.cards.length} cartões
              </div>
            </button>
          ))}
        </div>
      </aside>

      <section className="space-y-6">
        <div className="card p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-sm text-slate-500">Frase atual</div>
              <div className="mt-2 min-h-16 rounded-[22px] bg-gradient-to-br from-white to-sky-50 p-4 text-2xl font-bold shadow-inner">
                {sentence.join(' ') || 'Toque nos cartões para montar uma frase'}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => speakText(sentence.join(' '))} className="rounded-[20px] bg-slate-900 px-4 py-3 text-white shadow-sm">
                Falar frase
              </button>
              <button onClick={() => setSentence([])} className="rounded-[20px] border border-white/80 bg-white/90 px-4 py-3 shadow-sm">
                Limpar
              </button>
              <button
                onClick={() => {
                  setSearch('');
                  setShowFavoritesOnly(false);
                }}
                className="rounded-[20px] border border-white/80 bg-white/90 px-4 py-3 shadow-sm"
              >
                Resetar filtros
              </button>
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-500">
            {search
              ? `Mostrando resultados para “${search}”.`
              : showFavoritesOnly
                ? `Mostrando favoritos.`
                : `Categoria atual: ${currentCategory?.name || '—'}.`}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {visibleCards.map((card) => (
            <button
              key={card.id}
              onClick={() => {
                speakText(card.phrase);
                addCardToSentence(card.label);
              }}
              className="tile min-h-[190px] text-left"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-5xl">{card.emoji || '🖼️'}</div>
                {card.favorite && <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">Favorito</div>}
              </div>
              <div className="mt-4 text-2xl font-bold">{card.label}</div>
              <div className="mt-2 text-sm text-slate-600">{card.phrase}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <div className="inline-flex rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-3 py-1 text-xs font-medium text-white">Nível {card.level}</div>
                <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">Tocar para falar</div>
              </div>
            </button>
          ))}
        </div>

        {!visibleCards.length && (
          <div className="card p-6 text-sm text-slate-600">
            Nenhum cartão encontrado com esse filtro. Tente limpar a busca, mudar de categoria ou aumentar o nível PECS.
          </div>
        )}
      </section>
    </div>
  );
}
