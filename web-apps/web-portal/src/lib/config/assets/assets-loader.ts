import { Manifest } from "../manifest/manifest-model";
import { AssetEntry, AssetLinkHost } from "./asset-model";
import { read_manifest_entry } from "$lib/config/manifest/reader";
import {
  load_css_asset,
  load_css_asset_inline,
  load_css_asset_remote,
} from "./css-loader";

export const load_assets = (
  entries: Array<AssetEntry>,
  manifest: Manifest,
  path_prefix: string,
  link_host: AssetLinkHost
) => {
  if (entries) {
    entries
      ?.filter((a) => a.name?.trim())
      .forEach((asset_entry) => {
        if (asset_entry.skip_manifest) {
          if (asset_entry.inline) {
            load_inline_asset(asset_entry, link_host);
          } else {
            load_remote_asset(asset_entry, link_host);
          }
        } else {
          const manifested = read_manifest_entry(asset_entry.name, manifest);
          if (manifested && manifested.file?.trim()) {
            const asset_url = `/${path_prefix?.trim() ?? ""}/${
              manifested.file?.trim() ?? ""
            }`;
            load_manifested_asset(asset_entry, asset_url, link_host);
          }
        }
      });
  }
};

function load_inline_asset(asset_entry: AssetEntry, link_host: AssetLinkHost) {
  switch (asset_entry.type) {
    case "css":
      load_css_asset_inline(asset_entry, link_host);
      break;
    case "js":
      break;
    case "img":
      break;
    case "svg":
      break;
    case "meta":
      break;
    default:
      break;
  }
}

function load_remote_asset(asset_entry: AssetEntry, link_host: AssetLinkHost) {
  switch (asset_entry.type) {
    case "css":
      load_css_asset_remote(asset_entry.attrs?.href ?? "", link_host);
      break;
    case "js":
      break;
    case "img":
      break;
    case "svg":
      break;
    case "meta":
      break;
    default:
      break;
  }
}

function load_manifested_asset(asset_entry: AssetEntry, asset_url: string, link_host: AssetLinkHost) {
  console.log("[Manifested Asset]", asset_url);
  switch (asset_entry.type) {
    case "css":
      load_css_asset(asset_entry, asset_url, link_host);
      break;
    case "js":
      break;
    case "img":
      break;
    case "svg":
      break;
    case "meta":
      break;
    default:
      break;
  }
}
