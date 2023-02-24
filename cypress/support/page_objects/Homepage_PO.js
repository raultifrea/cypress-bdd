import { Base_PO } from "./Base_PO";

export class Homepage_PO extends Base_PO{

    navigateToHomepage(){
        super.navigate("");
    }

    clickOn_ContactUs_Button() {
        cy.clickAndOpenLink_InSameTab('#contact-us');
    }

    clickOn_Login_Button() {
        cy.clickAndOpenLink_InSameTab('#login-portal');
    }

}