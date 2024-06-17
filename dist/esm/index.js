import { registerPlugin } from '@capacitor/core';
const BinaryNativeClient = registerPlugin('BinaryNativeClient', {
    web: () => import('./web').then(m => new m.BinaryNativeClientWeb()),
});
export * from './definitions';
export { BinaryNativeClient };
//# sourceMappingURL=index.js.map