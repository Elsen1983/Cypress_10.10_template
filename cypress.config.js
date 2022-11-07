const { defineConfig } = require('cypress')

module.exports = defineConfig({
	// reporter: 'cypress-mochawesome-reporter',
	component: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
			if (config.isTextTerminal) {
				console.log('cypress run!')
			}
			require('cypress-mochawesome-reporter/plugin')(on)
		},
	},

	e2e: {
		env:{
			username: 'neil123',
			password: '12345678'
		},
		baseUrl: 'http://127.0.0.1:8000',
		reporter: 'cypress-mochawesome-reporter',
		experimentalSessionAndOrigin: true,
		chromeWebSecurity: false,
		specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx,feature}',
		watchForFileChanges: false,
		viewportWidth: 1920,
		viewportHeight: 1080,
		waitForAnimations: true,
		animationDistanceThreshold: 20,
		defaultCommandTimeout: 5000,
		execTimeout: 60000,
		pageTimeout: 60000,
		requestTimeout: 15000,
		responseTimeout: 15000,
		video: true,
		screenshotOnRunFailure: true,
		failOnStatusCode: false,

		setupNodeEvents(on, config) {
			// implement node event listeners here
			if (config.isTextTerminal) {
				console.log('cypress run!')
			}

			require('cypress-mochawesome-reporter/plugin')(on)
		},
	},
})
