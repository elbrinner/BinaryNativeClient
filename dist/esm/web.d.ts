import { WebPlugin } from '@capacitor/core';
import type { BinaryNativeClientPlugin } from './definitions';
export declare class BinaryNativeClientWeb extends WebPlugin implements BinaryNativeClientPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
