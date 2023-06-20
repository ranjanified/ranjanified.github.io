import { Manifest } from "./manifest-model";

export const load_manifest = async (): Promise<Manifest> => {
    const manifest = await (await fetch(`${document.baseURI}/manifest.json`)).json();
    // console.log("Downloaded manifest", manifest);
    return manifest;
}