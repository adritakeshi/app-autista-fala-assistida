export type DashboardSummary = {
  profiles: number;
  boards: number;
  cards: number;
  reports: number;
  rewardsToday: number;
};

export type CardItem = {
  id: string;
  label: string;
  phrase: string;
  emoji?: string | null;
  imageUrl?: string | null;
  favorite: boolean;
  level: number;
};
