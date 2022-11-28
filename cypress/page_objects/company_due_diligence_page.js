class CompanyDueDiligencePage {
    get signupEmailInput() {
        return cy.get('[name="email"]')
    }

    get signUpEmailInputErr() {
        return cy.get('[name="email"]')
                .next('[class*="invalid-feedback"]')
                .children('div')
    }

    get signupFullNameInput() {
        return cy.get('[name="fullname"]');
    }

    get signUpFullNameInputErr() {
        return cy.get('[name="fullname"]')
                .next('[class*="invalid-feedback"]')
                .children('div')
    }

    get signupPhoneInput() {
        return cy.get('[name="phone"]');
    }

    get loginEmailInput() {
        return cy.get('[name="login_email"]')
    }

    get loginEmailInputErr() {
        return cy.get('[name="login_email"]')
                .next('[class*="invalid-feedback"]')
                .children('div')
    }

    get loginPasswordInput() {
        return cy.get('[name="login_password"]')
    }

    get loginPasswordInputErr() {
        return cy.get('[name="login_password"]')
                .next('[class*="invalid-feedback"]')
                .children('div')
    }

    get continueBtn() {
        return cy.get('button')
            .contains('Continue');
    }

    get loginBtn() {
        return cy.get('button')
            .contains('Login');
    }

    get successfullyRegisteredNotificationMsg() {
        return cy.get('div')
            .contains('Successfully registered')
    }

    get successfullyLoginNotificationMsg() {
        return cy.get('div')
            .contains('Successfully login')
    }

    get newIncorporationBtn() {
        return cy.get('button')
            .contains('New incorporation');
    }

    get transferInBtn() {
        return cy.get('button')
            .contains('Transfer-in');
    }

    get cardContainerErrMsg() {
        return cy.get('[role="alert"]')
                .children('ul')
                .children('li')
                .children('div')
    }

    selectService(service) {
        service === 'New incorporation' ? this.newIncorporationBtn.click()
                                                       : this.transferInBtn.click()         
    }

    signUpBusiness(email, fullName, contactNo) {
        email.length > 0 ? this.signupEmailInput.type(email) : this.signupEmailInput.type('{backspace}')
        fullName.length > 0 ? this.signupFullNameInput.type(fullName) : this.signupFullNameInput.type('{backspace}')
        this.signupPhoneInput.type(contactNo)
        this.continueBtn.click()
    }

    login(email, password) {
        email.length > 0 ? this.loginEmailInput.type(email) : this.loginEmailInput.type('{backspace}')
        password.length > 0 ? this.loginPasswordInput.type(password) : this.loginPasswordInput.type('{backspace}')
        this.loginBtn.click()
    }

    signUpEmailInputRequiredErrDisplayed() {
        this.signUpEmailInputErr.should('have.text', 'The email field is required')
    }

    signUpEmailInputInvalidErrDisplayed() {
        this.signUpEmailInputErr.should('have.text', 'The email must be a valid email address.')
    }

    signUpFullNameInputRequiredErrDisplayed() {
        this.signUpFullNameInputErr.should('have.text', 'Full name field is required')
    }

    signUpEmailRequiredErrDisplayed() {
        this.cardContainerErrMsg.contains('The email field is required').should('be.visible')
    }

    signUpEmailInvalidErrDisplayed() {
        this.cardContainerErrMsg.contains('The email must be a valid email address.').should('be.visible')
    }

    signUpFullNameRequiredErrDisplayed() {
        this.cardContainerErrMsg.contains('Full name field is required').should('be.visible')
    }

    signUpErrDisplayedOnCardContainer() {
        this.signupEmailInput.invoke('val').then((input1) => {
            console.log(input1)
            input1.length > 0 ? this.signUpEmailInvalidErrDisplayed() 
                            : this.signUpEmailRequiredErrDisplayed() 
        })

        this.signupFullNameInput.invoke('val').then((input2) => {
            input2.length > 0 ? console.log('Input available') : this.signUpFullNameInputRequiredErrDisplayed()
        })
    }

    loginEmailInputRequiredErrDisplayed() {
        this.loginEmailInputErr.should('have.text', 'The login email field is required')
    }

    loginEmailInputInvalidErrDisplayed() {
        this.loginEmailInputErr.should('have.text', 'The login email must be a valid email address.')
    }

    loginPasswordInputRequiredErrDisplayed() {
        this.loginPasswordInputErr.should('have.text', 'The login password field is required')
    }

    loginEmailRequiredErrDisplayed() {
        this.cardContainerErrMsg.contains('The login email field is required').should('be.visible')
    }

    loginEmailInvalidErrDisplayed() {
        this.cardContainerErrMsg.contains('The login email must be a valid email address.').should('be.visible')
    }

    loginPasswordRequiredErrDisplayed() {
        this.cardContainerErrMsg.contains('The login password field is required').should('be.visible')
    }

    loginErrDisplayedOnCardContainer() {
        this.loginEmailInput.invoke('val').then((input1) => {
            input1.length > 0 ? this.loginEmailInvalidErrDisplayed() 
                            : this.loginEmailRequiredErrDisplayed() 
        })

        this.loginPasswordInput.invoke('val').then((input2) => {
            input2.length > 0 ? console.log('Input available') : this.loginPasswordInputRequiredErrDisplayed()
        })
    }

    wrongCredentialsErrDisplayedOnCardContainer() {
        this.cardContainerErrMsg.contains('Wrong credentials').should('be.visible')
    }

    successfullyRegisteredNotiMsgDisplayed() {
        this.successfullyRegisteredNotificationMsg.should('be.visible')
    }

    successfullyLoginNotiMsgDisplayed() {
        this.successfullyLoginNotificationMsg.should('be.visible')
    }
}

module.exports = new CompanyDueDiligencePage();