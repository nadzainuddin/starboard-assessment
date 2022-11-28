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

    get isAddedStakeholderYesOpt() {
        return cy.get('#NotNew')
    }

    get isAddedStakeholderNoOpt() {
        return cy.get('#isNew')
    }

    get addAsShareholderInput() {
        return cy.contains('label', 'Add as shareholder').next('select')
    }

    get addAsShareholderErrMsg() {
        return cy.contains('label', 'Add as shareholder').next('[class*="invalid-feedback"]')
    }

    get completeAddingShareholder() {
        return cy.contains('button', 'Complete adding Shareholder')
    }

    selectShareholderType(option) {
        option === 'Individual' ? this.shareholderTypeIndividualOpt.click()
                            : this.shareholderTypeCorporateOpt.click()
    }

    enterGeneralShareholderInformation(type, sharesAlotted, amountToBePaid) {
        this.selectShareholderType(type)
        this.sharesAlottedInput.type(sharesAlotted)
        this.amountToBePaidInput.type(amountToBePaid)
        this.continueBtn.click()
    }
}

module.exports = new AddShareholdersPage()