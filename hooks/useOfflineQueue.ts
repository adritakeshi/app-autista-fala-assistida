'use client';

import { get, set } from 'idb-keyval';

const KEY = 'aac-offline-queue';

export async function enqueueOfflineAction(action: unknown) {
  const existing = (await get(KEY)) || [];
  await set(KEY, [...existing, action]);
}

export async function readOfflineQueue() {
  return ((await get(KEY)) || []) as unknown[];
}
