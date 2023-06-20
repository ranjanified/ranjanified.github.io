import { create_app } from "../../main";
import { load_config } from "$lib/config/app/loader";
import { load_assets } from "$lib/config/assets/assets-loader";
import { load_manifest } from "$lib/config/manifest/loader";
import { BootstrappingOptions } from "$lib/bootstrapping/model";

const bootstrap = async (options: BootstrappingOptions) => {
  console.log("Bootstrapping Application");
  dispatchEvent(new CustomEvent("ranjanified:app:bootstrapping"));

  const [generated_manifest, app_config] = await Promise.all([
    load_manifest(),
    load_config(),
  ]);
  const merged_manifest = { ...generated_manifest, ...app_config.manifest };

  dispatchEvent(
    new CustomEvent("ranjanified:app:manifest", {
      detail: {
        generated: generated_manifest,
        configured: app_config.manifest,
        merged: merged_manifest,
      },
    })
  );
  dispatchEvent(
    new CustomEvent("ranjanified:app:config", { detail: app_config })
  );

  load_assets({ ...app_config, manifest: merged_manifest });

  create_app(options?.target_selector ?? "");
};

export { bootstrap };
