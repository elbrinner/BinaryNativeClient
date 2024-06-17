import { registerPlugin } from '@capacitor/core';

import type { BinaryNativeClientPlugin } from './definitions';

const BinaryNativeClient = registerPlugin<BinaryNativeClientPlugin>(
  'BinaryNativeClient',
  {
    web: () => import('./web').then(m => new m.BinaryNativeClientWeb()),
  },
);

export * from './definitions';
export { BinaryNativeClient };
