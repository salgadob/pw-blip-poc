import { Page } from "@playwright/test";

export class PagePO {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openPage(path?: string) {
        return this.page.goto(path || '/');
    }
}
