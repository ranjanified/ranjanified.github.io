import { AssetEntry, AssetLinkHost } from "./asset-model";

export const load_css_asset = (asset_entry: AssetEntry, asset_url: string, link_host: AssetLinkHost) => {
  if (asset_entry.inline) {
    load_css_asset_inline(asset_entry, link_host);
  } else {
    load_css_asset_remote(asset_url, link_host);
  }
};

export const load_css_asset_remote = (
  // asset_entry: AssetEntry,
  asset_url: string,
  link_host: AssetLinkHost
) => {
  if (asset_url?.trim()) {
    const cssEle = document.createElement("link") as HTMLLinkElement;
    cssEle.rel = "stylesheet";
    cssEle.href = asset_url.trim();
    if (link_host === "head") {
      document.head.appendChild(cssEle);
    } else {
      document.body.appendChild(cssEle);
    }
  }
};

export const load_css_asset_inline = (asset_entry: AssetEntry, link_host: AssetLinkHost) => {
  if (asset_entry.inline_text?.trim()) {
    const cssEle = document.createElement("style") as HTMLStyleElement;
    cssEle.appendChild(document.createTextNode(asset_entry.inline_text.trim()));

    if (link_host === "head") {
      document.head.appendChild(cssEle);
    } else {
      document.body.appendChild(cssEle);
    }
  }
};
