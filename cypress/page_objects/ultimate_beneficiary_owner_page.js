class UltimateBeneficiaryOwnerPage {

    // page 1
    get isAddedStakeholderYesOpt() {
        return cy.get('#NotNew')
    }

    get UBOStakeholderDD() {

    }

    get ultimateBeneficialOwnershipInput() {

    }

    get estimatedNetWealthInput() {

    }

    get sourceOfWealthDD() {

    }

    get sourceOfFundsDD() {

    }
    //

    //
    get isAddedStakeholderNoOpt() {
        return cy.get('#isNew')
    }

    get yesSendRequestViaEmailOpt() {
        return cy.get('#emailUbo')
    }

    get UBOFullNameInput() {
        return cy.get('[name="ubo_name"]')
    }

    get UBOEmailInput() {
        return cy.get('[name="ubo_email"]')
    }
    //

    //
    get iWillFillThisFormOpt() {
        return cy.get('#fillInDirector')
    }

    get titleDD() {

    }

    get fullNameInput() {

    }

    get aliasInput() {

    }

    get preferredNameInput() {

    }

    get firstNameInput() {

    }

    get lastNameInput() {

    }

    get nationalityDD() {

    }

    get dateOfBirthInput() {

    }

    get emailInput() {

    }

    get contactInput() {

    }

    get countryOfTaxResidenceDD() {

    }

    get occupationInput() {

    }

    // get ultimateBeneficialOwnershipInput() {

    // }

    // get estimatedNetWealthInput() {

    // }

    // get sourceOfWealthDD() {

    // }

    // get sourceOfFundsDD() {

    // }

    get residenceAddressLine1Input() {

    }

    get residenceAddressLine2Input() {

    }

    get residenceAddressCityInput() {

    }

    get residenceAddressPostalCodeInput() {

    }

    get residenceAddressStateInput() {

    }

    get residenceAddressCountryDD() {

    }

    get continueBtn() {

    } 

    //
    get UBOIsPEPYesOpt() {

    }

    // START : Form if UBO is PEP
    get natureOfProminentPublicFunctionInput() {
        return cy.get
    }

    get publicFunctionNameInput() {

    }

    get periodOfServiceInput() {

    }

    get countryDD() {

    }

    get sourceOfWealthDD() {

    }

    get sourceOfFundDD() {

    }
    // END

    //
    get UBOIsPEPNoOpt() {

    }
    //

    // START - Upload supporting docs
    get documentTypeDD() {

    }

    get documentNoInput() {

    }

    get expiryDateInput() {

    }

    get dropFileBtn() {

    }
    //

    get completeAddingUltimateBeneficiaryOwnerBtn() {
        return cy.contains('button', 'Complete adding Ultimate Beneficiary Owner')
    }
    // END

    get continueBtn() {
        return cy.contains('button', 'Continue')
    }

    get backBtn() {

    }

    selectUBOIsPEP(option) {
        option === 'Yes' ? this.UBOIsPEPYesOpt.click() 
                            : this.UBOIsPEPNoOpt.click()
    }

    enterUBOPEPInformation(natureOfPublicFunc, publicFunc, periodOfService, country) {

    }

    selectUBOWealthAndFundsSource(wealth, funds) {

    }

    selectUBOIsAddedStakeholder(option) {
        option === 'Yes' ? this.isAddedStakeholderYesOpt.click()
                            : this.isAddedStakeholderNoOpt.click()
    }

    requestUBOToFillTheForm(fullName, email) {
        this.yesSendRequestViaEmailOpt.click()
        this.UBOFullNameInput.type(fullName)
        this.UBOEmailInput.type(email)
        this.completeAddingUltimateBeneficiaryOwnerBtn.click()
    }

    clickContinueBtn() {
        this.continueBtn.click()
    }

}

module.exports = new UltimateBeneficiaryOwnerPage()