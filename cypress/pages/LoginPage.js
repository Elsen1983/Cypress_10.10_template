import BasePage from "../BasePage";
export default class LoginPage extends BasePage {

    /** VISIBILITY TESTS */
    
    /** FUNCTIONALITY TESTS */
    static logIn(userField, passwordField, loginButton, userData, passwordData) {
        // targeting elements and alias them as a variables for later use
        cy.get(userField).as("username");
        cy.get(passwordField).as("password");
        cy.get(loginButton).as("submit");

        //  clearing out the input fields and type the username and password
        cy.get("@username").clear().type(userData, { delay: 0 });
        cy.get("@password").clear().type(passwordData, { delay: 0 });
        cy.get("@submit").click();
    }
    static clickForgotPassword() {
        cy.contains("Forgot your password ?").click();
    }
    static displaySingleErrorMessage(errorMessage) {
        cy.isVisible(".error-message-display");
        cy.get(".error-message-display")
            .find("ul li:first")
            .contains(errorMessage)
            .should("be.visible");
    }
}
