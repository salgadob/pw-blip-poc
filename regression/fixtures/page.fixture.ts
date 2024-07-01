import { Page, test as base } from '@playwright/test';

import { PagePO } from '../page-objects/page.po';
import { BooksPO } from '../page-objects/books.po';
import { MoviesPO } from '../page-objects/movies.po';

export type PageFixtures = {
    WhenIOpenBooksPage: PagePO;
    WhenIOpenMoviesPage: PagePO;
    WhenIOpenBlipLibrary: PagePO;
};

type PageProps = {
    page: Page;
};

const test = base.extend<PageFixtures >({
    WhenIOpenBooksPage: async ({ page }: PageProps, use) => {
        const booksPagePO = new BooksPO(page); 
        await booksPagePO.openPage();
        await use(booksPagePO);
    },
    WhenIOpenMoviesPage: async ({ page }: PageProps, use) => {
        const moviesPagePO = new MoviesPO(page); 
        await moviesPagePO.openPage();
        await use(moviesPagePO);
    },
    WhenIOpenBlipLibrary: async ({ page }: PageProps, use) => {
        const homePagePO = new PagePO(page); 
        await homePagePO.openPage();
        await use(homePagePO);
    },
});

export { test };
