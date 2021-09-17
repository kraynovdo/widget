import loadPageConfig from '../loadPageConfig';
import DataLoader from '../DataLoader';

export interface IPopupCfg {
    pageId: string;
    templateOptions?: Record<string, any>;
}

function open({templateOptions = {}, pageId}: IPopupCfg, setPopupState: Function): void {
    const pageCfg = loadPageConfig(pageId);
    setPopupState({
        template: pageCfg.template,
        templateOptions,
        prefetchData: DataLoader.load(pageCfg, templateOptions),
        isOpened: true
    });
}

function close(cfg: IPopupCfg, setPopupState: Function): void {
    setPopupState({
        ...cfg,
        isOpened: false,
        prefetchData: null
    });
}

export {
    open,
    close
}
