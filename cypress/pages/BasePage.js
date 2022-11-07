export default class BasePage {
	// ----- BASIC COMMANDS -----
	/** Pause the test for {parameter:number} milliseconds
	 *
	 *  @param {*} ms - takes the amount of time in milliseconds
	 */
	static pause(ms) {
		cy.wait(ms)
	}

	/** Printing out the {parameter:string} by cy.log()
	 *
	 *  @param {*} message - takes a string
	 */
	static logMessage(message) {
		cy.log(message)
	}

	static checkTitle(title) {
		cy.title().should('include', title)
	}
	static checkDocTypeAndCharset() {
		cy.document().its('contentType').should('eq', 'text/html')
		cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
	}
	// ----- VIEWPORT -----
	/** Changing the viewport to mobile (iphone-X) size
	 */
	static viewportMobile() {
		cy.setResolution('iphone-x')
	}

	/** Changing the viewport to tablet (ipad-2) size
	 */
	static viewportTablet() {
		cy.setResolution('ipad-2')
	}

	/** Changing the viewport to desktop (macbook-13) size
	 */
	static viewportDesktop() {
		cy.setResolution('macbook-13')
	}

	/** Changing the viewport to extra-large desktop (1920, 1080) size
	 */
	static viewportDesktopXL() {
		cy.setResolution([1920, 1080])
	}
	/** Changing the viewport to 2K (2560, 1440) size
	 */
	static viewport2K() {
		cy.setResolution([2560, 1440])
	}

	/** VISIBILITY TESTS */
	static visibleTests(data) {
		var counter = 1
		//	multiple elements visibility check by a json file data trough single element visibility check command
		data.forEach((element) => {
			context(`Visibility Test - ${counter}`, () => {
				it(`Check ${element} is visible `, () => {
					cy.isVisible(element)
				})
				counter++
			})
		})
	}
	static nonVisibleTests(data) {
		var counter = 1
		data.forEach((element) => {
			context(`Non-Visibility Test - ${counter}`, () => {
				it(`Check ${element} is hidden `, () => {
					cy.isHidden(element)
				})
				counter++
			})
		})
	}


	/** USER-CHECK REQUESTS */
	static userExistsCheckGET(url,name,email,id){
		
		cy.request('GET',`${url}+${name}/${email}/${id}`).then((resp) => {
			// if we got what we wanted
	  
			if (resp.status === 200 && resp.body.ok === true){
				
				return "exists"
			}else{
				return "notFound"
			}
		})
	}

	static userExistsCheckPOST(){
		cy.request({
			method: 'POST',
			url: '/login_with_form', // baseUrl is prepend to URL
			form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
			body: {
			  username: 'jane.lane',
			  password: 'password123',
			},
		  })
	}
}
