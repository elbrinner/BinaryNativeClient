export interface BinaryNativeClientPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
