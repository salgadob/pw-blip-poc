import { Page, test as base } from '@playwright/test';

import { PagePO } from '../page-objects/page.po';

export type PageFixtures = {
    WhenIOpenALibraryPage: PagePO;
};

type PageProps = {
    page: Page;
};

const test = base.extend<PageFixtures>({
    WhenIOpenALibraryPage: async ({ page }: PageProps, use) => {
        const libraryPagePO = new PagePO(page); 
        await libraryPagePO.openPage();
        await use(libraryPagePO);
    },
});

export { test };
