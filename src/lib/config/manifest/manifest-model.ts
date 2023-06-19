export type Manifest = Record<string, ManifestEntry>;

export type ManifestEntry = {
    readonly isEntry?: boolean;
    readonly src: string;
    readonly file: string;
    readonly css?: Array<string>;
}