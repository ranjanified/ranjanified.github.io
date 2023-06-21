import { AppConfiguration } from "./app-model";

export const load_config = async (): Promise<AppConfiguration> => {
    const config: AppConfiguration = await (await fetch(import.meta.env.VITE_APP_CONFIG_ENDPOINT)).json();

    return config;
}