import { test, expect } from '@playwright/test';

import { test as testPage } from '../fixtures/page.fixture';
import { test as testMockPage } from '../fixtures/mock.fixture';

// not using fixures, page objects duplicated, route to api duplicated
// 3 scenarios - e2e, mock no results, mock 2 results

testPage.describe('E2E - Journey', async () => {
  testPage.describe('When I open the library\'s page', async () => {
    testPage('Then I should see Blip\'s Library main page', async ({ HomePage, page }) => {
      test.step('Then I should see a page with Blip\'s Library title', async () => {
        await expect(page).toHaveTitle("Blip's Library");
      });

      test.step('And I should the page header with expected title', async () => {
        await expect(HomePage.headerTitle).toContainText("Blip's Library");
      });

      test.step('And I should see the welcome message', async () => {
        await expect(HomePage.mainContainer).toContainText("Welcome to Blip's library!");
      });
    });
  });
});

testMockPage.describe('Mocking - Journey', async () => {
  testMockPage.describe('scenario: no books available', async () => {
    testMockPage.describe('When I open the library\'s books page', async () => {
      testMockPage('Then I should see no Books Message', async ({ WhenIHaveNoBooks, BooksPage }) => {
        await expect(BooksPage.noBooksMessage).toHaveText('No books available!')
      });
    });    
  });

  testMockPage.describe('scenario: 2 books available', async () => {
    testMockPage.describe('When I open the library\'s books page', async () => {
      testMockPage('Then I should see 2 book results', async ({ WhenIHaveTwoBooks, BooksPage }) => {
          await expect(BooksPage.booksList).toBeVisible();
          await BooksPage.booksList.screenshot({ path: 'booklist-2results.png' });
        });
    });
  });

  testMockPage.describe('scenario: error page', async () => {
    testMockPage.describe('When I open the library\'s books page', async () => {  
      testMockPage('Then I should see error page', async ({ WhenThereIsAnError, BooksPage }) => {
          await expect(BooksPage.errorContainer).toBeVisible();
          await BooksPage.errorContainer.screenshot({ path: 'error-message.png' });
        });
    });
  });

  testMockPage.describe('scenario: delayed response page', async () => {
    testMockPage.describe('When I open the library\'s books page', async () => {
      testMockPage('Then I should see loading page', async ({ WhenIHaveADelayedResponse, BooksPage }) => {
          await expect(BooksPage.loading).toBeVisible();
          await BooksPage.loading.screenshot({ path: 'loading-message.png' });
      });
    });
  });

});
