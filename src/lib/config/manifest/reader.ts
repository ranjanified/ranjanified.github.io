import { Manifest } from "./manifest-model";

export const read_manifest_entry = (asset_name: string, manifest: Manifest) => {
    if(manifest && asset_name?.trim()) {
        if(manifest[asset_name?.trim()]) {
            return manifest[asset_name?.trim()];
        }

        return Object.values(manifest).find(manifest_entry => {
            manifest_entry.src === asset_name?.trim();
        })
    }
    return undefined;
}