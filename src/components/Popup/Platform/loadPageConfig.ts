import {pagex} from '../Custom/pagex';
import React from 'react';


export interface IPageX {
   [key: string]: IPageConfig;
}

const CONFIGS: Record<string, IPageConfig> = {
   ...pagex
};

interface ILoaderConfig {
   type: string;
   [key: string]: any;
}

interface IConfigLoaderResult {
   [key: string]: ILoaderConfig;
}

export interface IConfigLoader {
   getConfig: (cfg: Record<string, any>) => IConfigLoaderResult
}

interface IPageConfig {
   template: React.Component | Function | null,
   templateOptions: Record<string, any>,
   prefetchConfig: {
      configLoader: IConfigLoader
   }
}

const loadConfig = (key: string): IPageConfig => {
   return CONFIGS[key];
}

export default loadConfig;
