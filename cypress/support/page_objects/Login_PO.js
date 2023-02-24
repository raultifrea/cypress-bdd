import { Base_PO } from "./Base_PO";

export class Login_PO extends Base_PO{

    navigateTo_Login_Page(){
        super.navigate('Login-Portal/index.html');
    }

    type_Username(username){
        cy.get('#text').clear().type(username);
    }

    type_Password(password){
        cy.get('#password').clear().type(password);
    }

    clickOn_Login_button(){
        cy.get('#login-button').click();
    }

}