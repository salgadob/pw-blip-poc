import { Page, test as base } from '@playwright/test';

export type BooksMockFixtures = {
    WhenIHaveTwoOrMoreBooks: any;
    WhenIHaveNoBooks: any;
    WhenIHaveADelayedResponse: any;
    WhenThereIsAnError: any;
};

type PageProps = {
    page: Page;
};

const test = base.extend<BooksMockFixtures>({
    WhenIHaveTwoOrMoreBooks: async ({ page }: PageProps, use) => {
        // await page.route(path, async (route) => {    });
        await use(page);
    },
    WhenIHaveNoBooks: async ({ page }: PageProps, use) => {
        await use(page);
    },
    WhenIHaveADelayedResponse: async ({ page }: PageProps, use) => {
        await use(page);
    },
    WhenThereIsAnError: async ({ page }: PageProps, use) => {
        await use(page);
    },
});

export { test };
