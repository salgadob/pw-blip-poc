import { PagePO } from "./page.po";

export class BooksPO extends PagePO {
    async openPage() {
        return super.openPage('/books');
    }
}
