import { test, expect } from '@playwright/test';

// not using fixures, page objects duplicated, route to api duplicated
// 3 scenarios - e2e, mock no results, mock 2 results

test('end 2 end journey', async ({ page }) => {
  await page.goto('http://localhost:3000/books');

  const showBooksButton = page.getByTestId('showBooksButton');
  const bookList = page.getByTestId('bookListContainer');
  const books = page.getByTestId('books');

  await expect(page).toHaveTitle("Blip's Library");

  await expect(bookList).toBeVisible();

});

test('scenario: no books available', async ({ page }) => {
  // before navigating to website, we're going to mock our API with an empty books array
  await page.route('http://localhost:3001/api/books', (route) => {
    route.fulfill({
        body: JSON.stringify({ "books": [] }),
    });
  });

  // now we can navigate to website
  await page.goto('http://localhost:3000/books');

  // creating some constants to interact with elements
  const showBooksButton = page.getByTestId('showBooksButton');
  const bookList = page.getByTestId('bookListContainer');
  const books = page.getByTestId('books');
  const noBooksMessage = page.locator('.no-books')

  // assert on page title
  await expect(page).toHaveTitle("Blip's Library");

  // assert on no books available message
  await expect(noBooksMessage).toHaveText('No books available!')

});

test('scenario: 2 results', async ({ page }) => {
  // before navigating to website, we're going to mock our API with a response returning two books
  await page.route('http://localhost:3001/api/books', (route) => {
    route.fulfill({
        body: JSON.stringify({ "books": [{
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
    }] }),
    });
  });

  // now we can navigate to the books page
  await page.goto('http://localhost:3000/books');

  // creating some constants to interact with browser elements
  const showBooksButton = page.getByTestId('showBooksButton');
  const bookList = page.getByTestId('bookListContainer');
  const books = page.getByTestId('books');

  // assert on page title
  await expect(page).toHaveTitle("Blip's Library");

  // assert on books content 
  await expect(bookList).toBeVisible();

  // todo: assert on books
  // todo take screenshot

});



