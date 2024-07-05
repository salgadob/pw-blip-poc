import { Page } from '@playwright/test';
import { test as base } from '../fixtures/page.fixture';

export type BooksMockFixtures = {
    WhenIHaveTwoBooks: any;
    WhenIHaveNoBooks: any;
    WhenIHaveADelayedResponse: any;
    WhenThereIsAnError: any;
};

type PageProps = {
    page: Page;
};

const test = base.extend<BooksMockFixtures>({
    WhenIHaveTwoBooks: async ({ page }: PageProps, use) => {
        await page.route('**/api/books', (route) => {
            route.fulfill({
              body: JSON.stringify(
                {
                  "books": [
                    {
                      "isbn": "123",
                      "title": "About Bananas",
                      "subTitle": "the yellow fruit",
                      "author": "Barbara Salgado",
                      "publish_date": "2020-06-04T08:48:39.000Z",
                      "publisher": "Blip QAs Editions",
                      "pages": 22,
                      "description": "a book about bananas",
                      "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
                    },
                    {
                      "isbn": "124",
                      "title": "Peeling cucumbers",
                      "subTitle": "sometimes you have to do it",
                      "author": "Anabela Carvalho",
                      "publish_date": "2020-06-04T08:48:39.000Z",
                      "publisher": "Blip QAs Editions",
                      "pages": 22,
                      "description": "a book about handling situations",
                      "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
                    }
                  ]
                }
              ),
            });
        });
        await use(page);
    },
    WhenIHaveNoBooks: async ({ page }: PageProps, use) => {
        await page.route('**/api/books', (route) => {
            route.fulfill({
              body: JSON.stringify({ "books": [] }),
            });
        });
        await use(page);
    },
    WhenIHaveADelayedResponse: async ({ page }: PageProps, use) => {
        await page.route('**/api/books', async (route) => {
            async function sleep(timeMs: number) {
              return new Promise((resolve) => {
                  setTimeout(resolve, timeMs);
              });
            }
            await sleep(5000);
            return route.fulfill({
              body: JSON.stringify({ "books": [] }),
            });
        });
        await use(page);
    },
    WhenThereIsAnError: async ({ page }: PageProps, use) => {
        await page.route('**/api/books', (route) => {
            route.fulfill({
              status: 500,
            });
        });
        await use(page);
    },
});

export { test };
