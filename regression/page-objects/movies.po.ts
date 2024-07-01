import { PagePO } from "./page.po";

export class MoviesPO extends PagePO {
    async openPage() {
        return super.openPage('/movies');
    }
}
