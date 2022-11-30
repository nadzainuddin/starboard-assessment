class AddShareholdersPage {
    get shareholderTypeIndividualOpt() {
        return cy.get('#isPep')
    }

    get shareholderTypeCorporateOpt() {
        return cy.get('#isNotPep')
    }

    get sharesAlottedInput() {
        return cy.get('[name="share_allotted"]')
    }

    get amountToBePaidInput() {
        return cy.get('[name="paid_up_share_capital"]')
    }

    get continueBtn() {
        return cy.contains('button', 'Continue')
    }

    // START : Individual Shareholder page
    get isAddedStakeholderYesOpt() {
        return cy.get('#NotNew')
    }

    get isAddedStakeholderNoOpt() {
        return cy.get('#isNew')
    }

    get addAsShareholderDD() {
        return cy.contains('label', 'Add as shareholder').next('select')
    }

    get addAsShareholderErrMsg() {
        return cy.contains('label', 'Add as shareholder').next('[class*="invalid-feedback"]')
    }
    // END : Individual Shareholder page

    // START : Corporate Shareholder page
    get requestShareholderFillTheFormYesOpt() {
        return cy.get('#emailShareholder')
    }

    get requestShareholderFillTheFormNoOpt() {
        return cy.get('#fillInShareholder')
    }

    get corporateRepsFullNameInput() {
        return cy.get('[name="fullname"]')
    }

    get corporateRepsFullNameErrMsg() {
        return cy.get('[name="fullname"]').next('[class*="invalid-feedback"] div')
    }

    get corporateRepsEmailInput() {
        return cy.get('[name="email"]')
    }

    get corporateRepsEmailErrMsg() {
        return cy.get('[name="email"]').next('[class*="invalid-feedback"] div')
    }

    get corporateRepsContactInput() {
        return cy.get('[name="contact"]')
    }

    get corporateCompanyNameInput() {
        return cy.get('[name="company_name"]')
    }

    get corporateCompanyNameErrMsg() {
        return cy.get('[name="company_name"]').next('[class*="invalid-feedback"] div')
    }

    get countryOfIncorporationDD() {
        return cy.get('[name="country"] input')
    }

    get localRegNumberInput() {
        return cy.get('[name="local_registration"]')
    }

    get localRegNumberErrMsg() {
        return cy.get('[name="local_registration"]').next('[class*="invalid-feedback"] div')
    }

    get foreignRegNumberInput() {
        return cy.get('[name="foreign_registration"]')
    }

    get cardContainerErrMsg() {
        return cy.get('[role="alert"] ul > li > div')
    }
    // END : Corporate Shareholder page

    get completeAddingShareholderBtn() {
        return cy.contains('button', 'Complete adding Shareholder')
    }

    get backBtn() {
        return cy.contains('button', 'Back')
    }

    get overviewBtn() {
        return cy.contains('div', 'Overview')
    }

    selectShareholderType(option) {
        option === 'Individual' ? this.shareholderTypeIndividualOpt.click()
                            : this.shareholderTypeCorporateOpt.click()
    }

    selectShareholderIsAddedStakeholder(option) {
        option === 'Yes' ? this.isAddedStakeholderYesOpt.click()
                            : this.isAddedStakeholderNoOpt.click()
    }

    // Individual shareholder fx
    enterIndividualShareholderInfo(option, stakeholder) {
        this.selectShareholderIsAddedStakeholder(option)
        this.addAsShareholderDD.select(stakeholder)
        this.completeAddingShareholderBtn.click()
    }

    // Corporate shareholder fx
    requestShareholderToFillForm(option) {
        option === 'Yes' ? this.requestShareholderFillTheFormYesOpt.click()
                            : this.requestShareholderFillTheFormNoOpt.click()
    }

    enterCorporateShareholderInfo(fullName, email, contactNo) {
        if (fullName.length > 0) this.corporateRepsFullNameInput.type(fullName)
        if (email.length > 0) this.corporateRepsEmailInput.type(email)
        if (contactNo.length > 0) this.corporateRepsContactInput.type(contactNo)
    }

    enterCorporateCompanyInfo(companyName, countryOfIncorporation, localRegNo, foreignRegNo) {
        if (companyName.length > 0) this.corporateCompanyNameInput.type(companyName)
        if (countryOfIncorporation.length > 0) this.countryOfIncorporationDD.click().type(countryOfIncorporation+'{enter}')
        if (localRegNo.length > 0) this.localRegNumberInput.type(localRegNo)
        if (foreignRegNo.length > 0) this.foreignRegNumberInput.type(foreignRegNo)
    }

    corpRepsFullNameIsRequiredErrDisplayed() {
        this.corporateRepsFullNameInput.invoke('val').then((input) => {
            if (input.length < 1) 
                this.cardContainerErrMsg.contains('Full name field is required').should("be.visible")
                this.corporateRepsFullNameErrMsg.should('have.text', 'Full name field is required')
        })
    }

    corpRepsEmailIsRequiredErrDisplayed() {
        this.corporateRepsEmailInput.invoke('val').then((input) => {
            if (input.length < 1) 
                this.cardContainerErrMsg.contains('The email field is required').should("be.visible")
                this.corporateRepsEmailErrMsg.should('have.text', 'The email field is required')
        })
    }

    companyNameIsRequiredErrDisplayed() {
        this.corporateCompanyNameInput.invoke('val').then((input) => {
            if (input.length < 1) 
                this.cardContainerErrMsg.contains('The company name field is required').should("be.visible")
                this.corporateCompanyNameErrMsg.should('have.text', 'The company name field is required')
        })
    }

    localRegIsRequiredErrDisplayed() {
        this.localRegNumberInput.invoke('val').then((input) => {
            if (input.length < 1) 
                this.cardContainerErrMsg.contains('The local registration field is required when foreign registration is not present.').should("be.visible")
                this.localRegNumberErrMsg.should('have.text', 'The local registration field is required when foreign registration is not present.')
        })
    }

    addIndividualShareholder(sharesAllotted, amtToBePaid) {
        this.shareholderTypeIndividualOpt.click()
        this.sharesAlottedInput.type(sharesAllotted)
        this.amountToBePaidInput.type(amtToBePaid)
        this.continueBtn.click()
    }

    addCorporateShareholder(sharesAllotted, amtToBePaid) {
        this.shareholderTypeCorporateOpt.click()
        this.sharesAlottedInput.type(sharesAllotted)
        this.amountToBePaidInput.type(amtToBePaid)
        this.continueBtn.click()
    }

    requestShareholderFillTheForm(corpRepFullName, corpRepEmail, corpRepContact, compName, countryOfIncorp, localRegNo, foreignRegNo) {
        if (corpRepFullName.length > 0)  this.corporateRepsFullNameInput.type(corpRepFullName)
        if (corpRepEmail.length > 0)  this.corporateRepsEmailInput.type(corpRepEmail)
        if (corpRepContact.length > 0)  this.corporateRepsContactInput.type(corpRepContact)
        if (compName.length > 0)  this.corporateCompanyNameInput.type(compName)
        if (countryOfIncorp.length > 0)  this.countryOfIncorporationDD.click().type(countryOfIncorp+'{enter}')
        if (localRegNo.length > 0)  this.localRegNumberInput.type(localRegNo)
        if (foreignRegNo.length > 0)  this.foreignRegNumberInput.type(foreignRegNo)
    }

    selectAddAsShareholderValue(index) {
        this.addAsShareholderDD.select(index)
        this.completeAddingShareholderBtn.click()
    }

    clickOverviewBtn() {
        this.overviewBtn.click()
    }

    validationMsgDisplayed() { 
        this.corpRepsFullNameIsRequiredErrDisplayed()
        this.corpRepsEmailIsRequiredErrDisplayed()
        this.companyNameIsRequiredErrDisplayed()
        this.localRegIsRequiredErrDisplayed()
    }

    clickCompleteAddingShareholderBtn() {
        this.completeAddingShareholderBtn.click()
    }

    clickBackBtn() {
        this.backBtn.click()
    }
}

module.exports = new AddShareholdersPage()