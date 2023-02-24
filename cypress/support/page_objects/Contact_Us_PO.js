import { Base_PO } from "./Base_PO";

export class ContactUs_PO extends Base_PO{

    elements = {
        comment_TextField: () => cy.get('[name="message"]'),
        submit_Button: () => cy.get('[value="SUBMIT"]'),
        submission_Header_Text: () => cy.xpath("//h1 | //body")
    }

    navigateTo_ContactUs_Page(){
        super.navigate('Contact-Us/contactus.html');
    }

    type_FirstName(firstName){
        cy.get('[name="first_name"]').clear().type(firstName);
    }

    type_LastName(lastName){
        cy.get('[name="last_name"]').clear().type(lastName);
    }

    type_EmailAddress(email){
        cy.get('[name="email"]').clear().type(email);
    }

    type_Comment(message){
        this.elements.comment_TextField().type(message);
    }

    clickOn_Submit_Button(){
        this.elements.submit_Button().click()
    }

    validate_Submission_Header(message){
        this.elements.submission_Header_Text().contains(message);
        //Does the same:
        this.elements.submission_Header_Text().invoke("text").should("include", message);
    }

}