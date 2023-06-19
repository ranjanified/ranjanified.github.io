import { AssetEntry } from "./asset-model";
import { AppConfiguration } from "$lib/config/app/app-model";
import { read_manifest_entry } from "$lib/config/manifest/reader";
import { load_css_asset, load_css_asset_inline, load_css_asset_remote } from "./css-loader";

export const load_assets = (app_config: AppConfiguration) => {
  if (app_config) {
    app_config.assets.entries
      ?.filter((a) => a.name?.trim())
      .forEach((asset_entry) => {
        if (asset_entry.skip_manifest) {
          if (asset_entry.inline) {
            load_inline_asset(asset_entry);
          } else {
            load_remote_asset(asset_entry);
          }
        } else {
          const manifested = read_manifest_entry(
            asset_entry.name,
            app_config.manifest
          );
          if (manifested && manifested.file?.trim()) {
            const asset_url = `/${
              app_config.assets?.path_prefix?.trim() ?? ""
            }/${manifested.file?.trim() ?? ""}`;
            load_manifested_asset(asset_entry, asset_url);
          }
        }
      });
  }
};
function load_inline_asset(asset_entry: AssetEntry) {
  switch (asset_entry.type) {
    case "css":
      load_css_asset_inline(asset_entry);
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

function load_remote_asset(asset_entry: AssetEntry) {
  switch (asset_entry.type) {
    case "css":
      load_css_asset_remote(asset_entry, asset_entry.attrs?.href ?? "");
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

function load_manifested_asset(asset_entry: AssetEntry, asset_url: string) {
  console.log("[Manifested Asset]", asset_url);
  switch (asset_entry.type) {
    case "css":
      load_css_asset(asset_entry, asset_url);
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
