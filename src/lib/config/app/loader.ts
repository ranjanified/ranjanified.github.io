import { AppConfiguration } from "./app-model";

export const load_config = async (): Promise<AppConfiguration> => {
    const config: AppConfiguration = await (await fetch("/dist/config/app.json")).json();

    return config;
}