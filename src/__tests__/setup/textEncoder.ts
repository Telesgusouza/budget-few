// src/__tests__/setup/textEncoder.ts
import { TextEncoder } from 'util';

// Adiciona o TextEncoder ao objeto global
declare global {
  const TextEncoder: typeof import('util').TextEncoder;
}

global.TextEncoder = TextEncoder;