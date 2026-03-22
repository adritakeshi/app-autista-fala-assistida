import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(2),
  age: z.number().int().min(1).max(120).optional(),
  supportLevel: z.string().min(1),
  favoriteReward: z.string().optional().default(''),
});

export const categorySchema = z.object({
  boardId: z.string(),
  name: z.string().min(2),
  level: z.number().int().min(1).max(6).default(1),
  order: z.number().int().default(0),
});

export const cardSchema = z.object({
  categoryId: z.string(),
  label: z.string().min(1),
  phrase: z.string().min(1),
  emoji: z.string().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  favorite: z.boolean().default(false),
  level: z.number().int().min(1).max(6).default(1),
  order: z.number().int().default(0),
});

export const routineSchema = z.object({
  title: z.string().min(1),
  time: z.string().min(1),
  dayOfWeek: z.number().int().min(0).max(6),
  isDone: z.boolean().default(false),
});

export const reportSchema = z.object({
  profileId: z.string(),
  sessionDate: z.string(),
  goal: z.string().min(1),
  notes: z.string().min(1),
  promptLevel: z.string().min(1),
  successfulRequests: z.number().int().min(0),
  regulationNotes: z.string().optional().default(''),
});
