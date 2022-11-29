require("cypress-plugin-tab");

class CompanyDetailsPage {
    get natureOfBusinessTxtArea() {
        return cy.contains('label', 'Nature of business')
            .next('textarea')
    }

    get natureOfBusinessTxtAreaErrMsg() {
        return cy.contains('label', 'Nature of business')
        .next('[class*="invalid-feedback"]')
    }

    get businessActivity1DD() {
        return cy.contains('label', 'Business activity 1')
            .next('div').find('input')
    }

    get businessActivity1ErrMsg() {
        return cy.contains('label', 'Business activity 1')
        .next('[class*="invalid-feedback"]')
    }

    get businessActivity2DD() {
        return cy.contains('label', 'Business activity 2')
            .next('div').find('input')
    }

    get sourceOfFundingDD() {
        return cy.contains('label', 'Source of funding')
            .next('select');
    }

    get sourceOfFundingDDErrMsg() {
        return cy.contains('label', 'Source of funding')
            .next('[class*="invalid-feedback"]')
    }

    get estimatedAvgTransactPerMthInput() {
        return cy.get('[name="monthly_transaction"]')
    }

    get estimatedAvgTransactPerMthErrMsg() {
        return cy.get('[name="monthly_transaction"]')
            .next('[class*="invalid-feedback"]')
    }

    get proposedFYEMonthDD() {
        return cy.contains('label', 'Proposed Financial Year End (FYE) month')
        .next('select')
    }

    get proposedFYEMonthErrMsg() {
        return cy.contains('label', 'Proposed Financial Year End (FYE) month')
        .next('[class*="invalid-feedback"]')
    }

    get countryWithMostTransactionDD() {
        return cy.get('div[name="transaction_country"]  input')
    }

    get countryWithMostTransactionDDOpt() {
        return cy.get('[name="address.registered_country"] ul')
    }

    get countryWithMostTransactionErrMsg() {
        return cy.contains('label', 'Country that the entity transacts most with')
        .next('[class*="invalid-feedback"]')
    }

    get requireRegisteredAddressServicesYesOpt() {
        return cy.get('[for="isRegisteredAddress"]')
    }

    get requireRegisteredAddressServicesNoOpt() {
        return cy.get('[for="isNotRegisteredAddress"]')
    }

    get registeredAddressLine1Input() {
        return cy.get('[name="address.registered_address_01"]')
    }

    get registeredAddressLine1ErrMsg() {
        return cy.get('[name="address.registered_address_01"]')
        .next('[class*="invalid-feedback"]')
    }

    get registeredAddressLine2Input() {
        return cy.get('[name="address.registered_address_02"]')
    }

    get registeredAddressCityInput() {
        return cy.get('[name="address.registered_city"]')
    }

    get registeredAddressCityErrMsg() {
        return cy.get('[name="address.registered_city"]')
        .next('[class*="invalid-feedback"]')
    }

    get registeredAddressPostalCodeInput() {
        return cy.get('[name="address.registered_postal"]')
    } 

    get registeredAddressPostalCodeErrMsg() {
        return cy.get('[name="address.registered_postal"]')
        .next('[class*="invalid-feedback"]')
    }

    get registeredAddressStateInput() {
        return cy.get('[name="address.registered_state"]')
    }

    get registeredAddressCountryDD() {
        return cy.get('[name="address.registered_country"] input')
    }

    get registeredAddressCountryErrMsg() {
        return cy.contains('label', 'Country')
        .next('[class*="invalid-feedback"]')
    }

    get requireCompanySecretaryYesOpt() {
        return cy.get('#isSecretarialService')
    }

    get requireCompanySecretaryNoOpt() {
        return cy.get('[for="isNotSecretarialService"]')
    }

    get secretaryFullNameInput() {
        return cy.get('[name="secretary.fullname"]')
    }

    get secretaryFullNameErrMsg() {
        return cy.get('[name="secretary.fullname"]')
        .next('[class*="invalid-feedback"]')
    }

    get secretaryEmailAddressInput() {
        return cy.get('[name="secretary.email"]')
    }

    get secretaryEmailAddressErrMsg() {
        return cy.get('[name="secretary.email"]')
        .next('[class*="invalid-feedback"]')
    }

    get secretaryContactInput() {
        return cy.get('[name="secretary.mobile"]')
    }

    get secretaryResidencyStatusSingaporeOpt() {
        return cy.get('[for="SGSecretarial"]')
    }

    get secretaryResidencyStatusPROpt() {
        return cy.get('[for="PRSecretarial"]')
    }

    get requireResidencyDirectorYesOpt() {
        return cy.get('[for="isDirectorService"]')
    }

    get requireResidecyDirectorNoOpt() {
        return cy.get('[for="isNotDirectorService"]')
    }

    get errCardContainer() {
        return cy.get('[class="card"]')
            .children('li')
            .children('div')
    }

    get continueBtn() {
        return cy.contains('button', 'Continue')
    }

    natureOfBusinessIsRequiredErrDisplayed() {
        this.natureOfBusinessTxtArea.invoke('val').then((input) => {
            if (input.length < 1) 
                this.errCardContainer.contains('Nature of business field is required').should("be.visible")
                this.natureOfBusinessTxtAreaErrMsg.should('have.text', 'Nature of business field is required')
        })
    }

    businessActivity1IsRequiredErrDisplayed() {
        this.businessActivity1DD.invoke('val').then((input) => {
            if (input.length < 1) 
                this.errCardContainer.contains('At least one business activity field is required').should("be.visible")
                this.businessActivity1ErrMsg.should('have.text', 'At least one business activity field is required')
        })
    }

    sourceOfFundingIsRequiredErrDisplayed() {
        this.sourceOfFundingDD.invoke('prop', 'value').then((val) => {
            if (val.length < 1) 
                this.errCardContainer.contains('The source of fund field is required').should("be.visible")
                this.sourceOfFundingDDErrMsg.should('have.text', 'The source of fund field is required')
        })
    }

    monthlyTransactionIsRequiredErrDisplayed() {
        //this.estimatedAvgTransactPerMthErrMsg.should('have.text', 'The source of fund field is required')
        this.estimatedAvgTransactPerMthInput.invoke('val').then((input) => {
            if (input.length < 1) this.errCardContainer
            .contains('Estimated average transactions per month field is required').should("be.visible")
        })
    }

    proposedFYEMonthIsRequiredErrDisplayed() {
        this.proposedFYEMonthInput.invoke('prop', 'value').then((val) => {
            if(val.length < 1) this.errCardContainer
                .contains('The fye month field is required').should("be.visible")
        })
    }

    countryWithMostTransactionIsRequiredErrDisplayed() {
        this.countryWithMostTransactionDD.invoke('prop', 'value').then((val) => {
            if(val.length < 1) this.errCardContainer
                .contains('The fye month field is required').should("be.visible")
        })
    }

    registeredAddressLine1IsRequiredErrDisplayed() {
        this.registeredAddressLine1Input.invoke('val').then((input) => {
            if (input.length < 1) this.errCardContainer
                .contains('Registered address line 1 field is required').should("be.visible")
        })
    }

    registeredAddressCityIsRequiredErrDisplayed() {
        this.registeredAddressCityInput.invoke('val').then((input) => {
            if (input.length < 1) this.errCardContainer
                .contains('City field is required').should("be.visible")
        })
    }

    rgisteredAddressPostalCodeIsRequiredErrDisplayed() {
        this.registeredAddressPostalCodeInput.invoke('val').then((input) => {
            if (input.length < 1) this.errCardContainer
                .contains('Postal code field is required').should("be.visible")
        })
    }

    registeredAddressCountryIsRequiredErrDisplayed() {
        this.registeredAddressCountryDD.invoke('prop', 'value').then((val) => {
            if (val.length < 1) this.errCardContainer
                .contains('Country field is required').should("be.visible")
        })
    }

    secretaryFullNameIsRequiredErrDisplayed() {
        this.secretaryFullNameInput.invoke('val').then((input) => {
            if (input.length < 1) this.errCardContainer
                .contains('Company secretary’s full name field is required').should("be.visible")
        })
    }

    secretaryEmailAddressIsRequiredErrDisplayed() {
        this.secretaryEmailAddressInput.invoke('val').then((input) => {
            if (input.length < 1) this.errCardContainer
                .contains('Company secretary\'s email address field is required').should("be.visible")
        })
    }

    enterBusinessDetails(natureOfBusiness, businessActivity1, businessActivity2) {
        if (natureOfBusiness.length > 0) this.natureOfBusinessTxtArea.type(natureOfBusiness)
        if (businessActivity1.length > 0) 
            this.businessActivity1DD.click().type(businessActivity1)
            this.businessActivity1DD.parent('div').next('div').contains('span', businessActivity1).click()
        if (businessActivity2.length > 0) this.businessActivity2DD.click().type(businessActivity2+'{tab}'+'{enter}')
    }

    enterFundingDetails(sourceOfFund) {
        if (sourceOfFund.length > 0) 
            this.sourceOfFundingDD.select(sourceOfFund)
    }

    enterTransactionsDetails(monthlyTransaction, FYE, countryWithMostTransaction) {
        if (monthlyTransaction.length > 0) this.estimatedAvgTransactPerMthInput.type(monthlyTransaction)
        if (FYE.length > 0) this.proposedFYEMonthDD.select(FYE)
        if (countryWithMostTransaction.length > 0) 
            this.countryWithMostTransactionDD.click().type(countryWithMostTransaction+'{enter}')
    }

    selectRequireRegisteredAddressOption(option) {
        option === 'Yes' ? this.requireRegisteredAddressServicesYesOpt.click()
                            : this.requireRegisteredAddressServicesNoOpt.click()
    }

    enterRegisteredAddressDetails(addressLine1, addressLine2, city, postalCode, state, country) {
        if (addressLine1.length > 0) this.registeredAddressLine1Input.type(addressLine1)
        if (addressLine2.length > 0) this.registeredAddressLine2Input.type(addressLine2)
        if (city.length > 0) this.registeredAddressCityInput.type(city)
        if (postalCode.length > 0) this.registeredAddressPostalCodeInput.type(postalCode)
        if (state.length > 0) this.registeredAddressStateInput.type(state)
        if (country.length > 0) this.registeredAddressCountryDD.type(country)
    }

    selectRequireCompanySecretaryOption(option) {
        option === 'Yes' ? this.requireCompanySecretaryYesOpt.click() 
                            : this.requireCompanySecretaryNoOpt.click()
    }

    enterCompanySecretaryInformation(fullName, emailAdress, contact, residencyStatus) {
        if (fullName.length > 0) this.secretaryFullNameInput.type(fullName)
        if (emailAdress.length > 0) this.secretaryEmailAddressInput.type(emailAdress)
        if (contact.length > 0) this.secretaryContactInput.type(contact)
        residencyStatus === 'Singapore' ? this.secretaryResidencyStatusSingaporeOpt.click()
                                        : this.secretaryResidencyStatusPROpt.click()
    }

    selectRequireResidentDirectorOption(option) {
        option === 'Yes' ? this.requireResidencyDirectorYesOpt.click()
                            : this.requireResidecyDirectorNoOpt.click()
    }

    isRequiredValidationMsgDisplayed() {
        this.natureOfBusinessIsRequiredErrDisplayed()
        this.businessActivity1IsRequiredErrDisplayed()
        this.sourceOfFundingIsRequiredErrDisplayed()
        this.monthlyTransactionIsRequiredErrDisplayed()
    }

    clickContinueBtn() {
        this.continueBtn.click()
    }
}

module.exports = new CompanyDetailsPage();