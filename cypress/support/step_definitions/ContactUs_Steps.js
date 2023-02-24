import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ContactUs_PO } from "../page_objects/Contact_Us_PO";

const contactUsPage = new ContactUs_PO();

When('I type a first name', ()=>{
    contactUsPage.type_FirstName("Joe");
});

When('I type a last name', ()=>{
    contactUsPage.type_LastName("Blogs");
});

When('I enter an email address', ()=>{
    contactUsPage.type_EmailAddress('joe_blogs123@mail.com');
});

When('I type a comment', ()=>{
    contactUsPage.type_Comment('This is my application to contact you');
});

When('I click on the submit button', ()=>{
    contactUsPage.clickOn_Submit_Button();
});

Then('I should be presented with a successful contact us submission message',()=>{
    contactUsPage.validate_Submission_Header('Thank You for your Message!');
});

Then('I should be presented with a unsuccessful contact us submission message',()=>{
    contactUsPage.validate_Submission_Header('Error: Invalid email address');
});

When('I type a specific first name {string}', (firstName)=>{
    contactUsPage.type_FirstName(firstName);
});

When('I type a specific last name {string}', (lastName)=>{
    contactUsPage.type_LastName(lastName);
});

When('I type a specific email address {string}', (email)=>{
    contactUsPage.type_EmailAddress(email);
});

When('I type a specific word {string} and number {int} within the comment input field',(word, number)=>{
    contactUsPage.type_Comment(word+" "+number);
});

When('I type a first name {word} and a last name {string}',(firstName, lastName)=>{
    contactUsPage.type_FirstName(firstName);
    contactUsPage.type_LastName(lastName);
});

When('I type a {string} and a comment {string}',(emailAddress, comment)=>{
    contactUsPage.type_EmailAddress(emailAddress);
    contactUsPage.type_Comment(comment);
});

Then('I should be presented with header text {string}', (message)=>{
    contactUsPage.validate_Submission_Header(message)
});