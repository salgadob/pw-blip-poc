import { test, expect } from '@playwright/test';
import { PagePO } from '../page-objects/page.po';
import { BooksPO } from '../page-objects/books.po';

// not using fixures, page objects duplicated, route to api duplicated
// 3 scenarios - e2e, mock no results, mock 2 results
test.describe('E2E - Journey', async () => {
  let pagePO;

  test.beforeEach(async ({ page }) => {
    pagePO = new PagePO(page);
  });

  test.describe('When I open the library\'s page', async () => {
    test.beforeEach(async () => {
      await pagePO.openPage();
    });

    test('Then I should see Blip\'s Library main page', async ({ page }) => {
      test.step('Then I should see a page with Blip\'s Library title', async () => {
        await expect(page).toHaveTitle("Blip's Library");
      });

      test.step('And I should the page header with expected title', async () => {
        await expect(pagePO.headerTitle).toContainText("Blip's Library");
      });

      test.step('And I should see the welcome message', async () => {
        await expect(pagePO.mainContainer).toContainText("Welcome to Blip's library!");
      });
    });
  });
});


test.describe('Mocking - Journey', async () => {
  let pagePO; 

  test.beforeEach(async ({ page }) => {
    pagePO = new BooksPO(page);
  });

  test.describe('scenario: no books available', async () => {
    test.beforeEach(async ({ page }) => {
      await page.route('**/api/books', (route) => {
        route.fulfill({
          body: JSON.stringify({ "books": [] }),
        });
      });

      test.describe('When I open the library\'s books page', async () => {
        test.beforeEach(async () => {
          await pagePO.openPage();
        });
    
        test('Then I should see no Books Message', async ({ page }) => {
          await expect(pagePO.noBooksMessage).toHaveText('No books available!')
        });
      });
    });    
  });

  test.describe('scenario: 2 books available', async () => {
    test.beforeEach(async ({ page }) => {
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
    });

    test.describe('When I open the library\'s books page', async () => {
      test.beforeEach(async () => {
        await pagePO.openPage();
      });
  
      test('Then I should see 2 book results', async ({ page }) => {
          await expect(pagePO.booksList).toBeVisible();
          await pagePO.booksList.screenshot({ path: 'booklist-2results.png' });
        });
    });
  });

  test.describe('scenario: error page', async () => {
    test.beforeEach(async ({ page }) => {
      await page.route('**/api/books', (route) => {
        route.fulfill({
          status: 500,
        });
      });
    });

    test.describe('When I open the library\'s books page', async () => {
      test.beforeEach(async () => {
        await pagePO.openPage();
      });
  
      test('Then I should see error page', async ({ page }) => {
          await expect(pagePO.errorContainer).toBeVisible();
          await pagePO.errorContainer.screenshot({ path: 'error-message.png' });
        });
    });
  });

  test.describe('scenario: delayed response page', async () => {
    test.beforeEach(async ({ page }) => {
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
    });

    test.describe('When I open the library\'s books page', async () => {
      test.beforeEach(async () => {
        await pagePO.openPage();
      });
  
      test('Then I should see loading page', async ({ page }) => {
          await expect(pagePO.loading).toBeVisible();
          await pagePO.loading.screenshot({ path: 'loading-message.png' });
        });
    });
  });
});
