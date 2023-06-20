export type AssetConfig = {
    readonly path_prefix?: string;
    readonly entries?: Array<AssetEntry>;
}

export type AssetType = 'js' | 'css' | 'svg' | 'img' | 'meta';
export type AssetInclusionTarget = 'head' | 'body';

export type AssetEntry = {
    readonly target?: AssetInclusionTarget;
    readonly type: AssetType;
    readonly name: string;
    readonly inline?: boolean;
    readonly inline_text?: string;
    readonly attrs?: Record<string, string>;
    readonly skip_manifest?: boolean; 
}