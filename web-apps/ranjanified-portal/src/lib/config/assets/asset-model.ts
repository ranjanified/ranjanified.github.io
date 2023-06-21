export type AssetConfig = {
    readonly path_prefix?: string;
    readonly head?: Array<AssetEntry>;
    readonly body?: Array<AssetEntry>;
}

export type AssetLinkHost = 'head' | 'body';
export type AssetType = 'js' | 'css' | 'svg' | 'img' | 'meta';

export type AssetEntry = {
    // readonly target?: AssetLinkHost;
    readonly type: AssetType;
    readonly name: string;
    readonly inline?: boolean;
    readonly inline_text?: string;
    readonly attrs?: Record<string, string>;
    readonly skip_manifest?: boolean; 
}