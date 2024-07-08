import { Locator, Page } from "@playwright/test";

export class PagePO {
    private readonly page: Page;
    private readonly _headerTitle: Locator;
    private readonly _mainContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this._headerTitle = page.locator('header h1');
        this._mainContainer = page.locator('main');
    }

    async openPage(path?: string) {
        return this.page.goto(path || '/');
    }

    get headerTitle() {
        return this._headerTitle;
    }   

    get mainContainer() {
        return this._mainContainer;
    }   
}
