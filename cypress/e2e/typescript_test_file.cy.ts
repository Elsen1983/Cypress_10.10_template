/// <reference types="cypress"
const testRequire = require('../fixtures/example.json')
import LoginPage from '../pages/login/loginPage.js'

describe('Typescript Test', () => {
    it('Test 1', () => {
        
        let lengthOftestRequire = Object.keys(testRequire).length
        
        console.log(lengthOftestRequire)

        cy.log(`${lengthOftestRequire}`)

        console.log(Cypress.env('username'))
        console.log(Cypress.env('password'))

        cy.clearCookies()
		cy.clearLocalStorage()
		cy.visit('/login')
		// cy.loginTests('#username', '#password', '.btn', "kieran1982", "12345678")
		LoginPage.logIn(
			"[data-cy='input-login-username']",
			"[data-cy='input-login-password']",
			"[data-cy='button-login']",
			Cypress.env('username'),
			Cypress.env('password')
		)

        
    });
});