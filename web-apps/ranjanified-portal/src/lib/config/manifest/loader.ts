import { Manifest } from "./manifest-model";

export const load_manifest = async (): Promise<Manifest> => {
  if (import.meta.env.VITE_MANIFEST_ENDPOINT) {
    const manifest = await (
    //   await fetch(`${document.baseURI}/manifest.json`)
    await fetch(import.meta.env.VITE_MANIFEST_ENDPOINT)
    ).json();
    return manifest;
  } else {
    return {};
  }
};
