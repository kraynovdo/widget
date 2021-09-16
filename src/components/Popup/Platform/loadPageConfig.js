import {pagex} from '../Custom/pagex';
const CONFIGS = {
   ...pagex
};

const loadConfig = (key) => {
   return CONFIGS[key];
}

export default loadConfig;