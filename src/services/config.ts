import { ApiConfig } from "src/types";

let config: { api: ApiConfig } | null = null;

export const getConfig = () => {
  if (!config) {
    config = {...(window as any).__CONFIG__};
    delete (window as any).__CONFIG__;
  }

  return config;
}