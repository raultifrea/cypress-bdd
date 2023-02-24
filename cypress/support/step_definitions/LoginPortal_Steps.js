import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Login_PO } from "../page_objects/Login_PO";

const loginPage = new Login_PO();
let stub;

When('I enter the username {}',(username)=>{
    loginPage.type_Username(username)
});

When('I enter the password {}',(password)=>{
    loginPage.type_Password(password);
});

When('I click the login button', ()=>{
    stub = cy.stub();
    cy.on('window:alert', stub);
    loginPage.clickOn_Login_button();
});

Then('I should be presented with an alert which contains text {string}', (alertText)=>{
    expect(stub).to.have.been.calledWith(alertText);
});

When('I navigate to the webdriveruniversity login page', ()=>{
    loginPage.navigateTo_Login_Page()
});