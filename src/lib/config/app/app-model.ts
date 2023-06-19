import { AssetConfig } from "$lib/config/assets/asset-model";
import { Manifest } from "$lib/config/manifest/manifest-model";

export type AppConfiguration = {
    readonly manifest: Manifest;
    readonly assets: AssetConfig;
}