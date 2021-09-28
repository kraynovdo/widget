import RecordProvider from './data/RecordProvider';
import {IConfigLoader} from '../Platform/loadPageConfig';

export const PAGE_CONFIG_LOADER: IConfigLoader = {
    getConfig() {
        return {
            recordsList: {
                type: 'list',
                source: RecordProvider,
                filter: {}
            }
        };
    }
}
