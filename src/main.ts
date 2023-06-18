import './styles/app.scss';
import App from './App.svelte';

const app_target = () => {
  const doc_search_params = new URLSearchParams(location.search);

  const target_selector = doc_search_params.get('app_target') || doc_search_params.get('integration_target') || doc_search_params.get("target_selector");

  if(target_selector?.trim()) {
    return document.body.querySelector(target_selector?.trim()) || document.body;
  }
  return  document.body;
}

const app = new App({
  target: app_target(),
})

export default app;
