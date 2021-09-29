export interface IViewControllerOptions {
    viewMode: string;
}

export default class ViewController {
    private _viewMode: string = 'list';

    constructor(options: IViewControllerOptions) {
        this._viewMode = options.viewMode;
    }

    setViewMode(value: string): void {
        this._viewMode =  value;
    }

    getViewMode(): string {
        return this._viewMode;
    }
}