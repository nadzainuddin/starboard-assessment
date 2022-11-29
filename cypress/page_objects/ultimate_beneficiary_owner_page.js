class UltimateBeneficiaryOwnerPage {

    // page 1
    get isAddedStakeholderYesOpt() {

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

    }

    get yesSendRequestViaEmailOpt() {

    }

    get UBOFullNameInput() {

    }

    get UBOEmailInput() {

    }
    //

    //
    get iWillFillThisFormOpt() {

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

    clickContinueBtn() {
        this.continueBtn.click()
    }

}

module.exports = new UltimateBeneficiaryOwnerPage()