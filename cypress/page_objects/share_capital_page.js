class ShareCapitalPage {
    get shareTypeDD() {
        return cy.contains('label', 'Share type').next('select')
    }

    get currencyDD() {
        return cy.contains('label', 'Currency').next('div input')
    }

    get totalShareCapitalInput() {
        return cy.get('[name="share_capital"]')
    }

    get totalNumberOfSharesInput() {
        return cy.get('[name="share_allotted"]')
    }

    get submitBtn() {
        return cy.contains('button', 'Submit')
    }

    enterShareCapitalInformation(shareType, currency, totalShareCapital, totalNumberOfShares) {
        if (shareType.length > 0) this.shareTypeDD.select(shareType)
        if (currency.length > 0) this.currencyDD.select(currency)
        if (totalShareCapital.length > 0) this.totalShareCapitalInput.type(totalShareCapital)
        if (totalNumberOfShares.length > 0) this.totalNumberOfSharesInput.type(totalNumberOfShares)
        this.submitBtn.click()
    }
}
module.exports = new ShareCapitalPage()