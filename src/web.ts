import { WebPlugin } from '@capacitor/core';

import type { BinaryNativeClientPlugin } from './definitions';

export class BinaryNativeClientWeb
  extends WebPlugin
  implements BinaryNativeClientPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
