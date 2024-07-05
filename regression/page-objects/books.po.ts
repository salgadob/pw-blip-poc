import { Locator, Page } from "playwright/test";
import { PagePO } from "./page.po";

export class BooksPO extends PagePO {
    private readonly _booksContainer: Locator;
    private readonly _noBooksMessage: Locator;
    private readonly _booksList: Locator;
    private readonly _errorContainer: Locator;
    private readonly _loading: Locator;

    async openPage() {
        return super.openPage('/books');
    }

    constructor(page: Page) {
        super(page);
        this._booksContainer = page.getByTestId('bookListContainer');
        this._noBooksMessage = page.locator('.no-books');
        this._booksList = page.getByTestId('bookListContainer');
        this._errorContainer = page.locator('.error-container');
        this._loading = page.locator('.loading-spinner');
    }   

    get booksContainer() {
        return this._booksContainer;
    }

    get noBooksMessage() {
        return this._noBooksMessage;
    }

    get booksList() {
        return this._booksList;
    }

    get errorContainer() {
        return this._errorContainer;
    } 

    get loading() {
        return this._loading;
    }   
}
