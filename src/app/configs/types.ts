export interface TinymceAIParams {
  jwtServerURL: string;
  apiKey: string;
};
export type Config = {
  name: string;
  toolbar?: string;
  config: any;
};
export type PluginConfig = Config | ((params: Params) => Config);
export interface Options {
  excludePlugins?: string[];
  overrideConfig?: {};
}
export interface Params extends TinymceAIParams {}