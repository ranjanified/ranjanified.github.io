import { AppConfiguration } from "./app-model";

export const load_config = async (): Promise<AppConfiguration> => {
    const config: AppConfiguration = await (await fetch(`${document.baseURI}/config/app.json`)).json();

    return config;
}