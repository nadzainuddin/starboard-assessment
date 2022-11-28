class UltimateBeneficiaryOwnerPage {



    
    
    //
    get UBOIsPEPYesOpt() {

    }

    get UBOIsPEPNoOpt() {

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

    // START - Upload supporting docs
    get documentTypeDD() {

    }

    get documentNoInput() {

    }

    get expiryDateInput() {

    }

    get dropFileSection() {

    }

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