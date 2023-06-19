import { Manifest } from "./manifest-model";

export const merge_manifest = (manifest1: Manifest, manifest2: Manifest) => {
    return {...manifest1, ...manifest2 };
}