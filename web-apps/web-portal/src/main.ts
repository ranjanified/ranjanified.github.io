import "./styles/app.scss";
import App from "./App.svelte";

const doc_search_params = new URLSearchParams(location.search);

const app_target = (in_target_selector: string = "") => {
  const target_selector =
    doc_search_params.get("app_target") ||
    doc_search_params.get("integration_target") ||
    doc_search_params.get("target_selector") ||
    in_target_selector;

  if (target_selector?.trim()) {
    return (
      document.body.querySelector(target_selector?.trim()) || document.body
    );
  }
  return document.body;
};

const instantiate =
  doc_search_params.get("_instantiate")?.toLowerCase() === "true";

if (instantiate) {
  new App({
    target: app_target(),
  });
}

const create_app = (target_selector: string = "") => {
  new App({
    target: app_target(target_selector),
  });
};

export { create_app };
