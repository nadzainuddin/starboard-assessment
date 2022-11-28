class ServiceRequiredPage {
    get registeredAddressCbox() {
        return cy.get('#service_92')
    }

    get companySecretaryCbox() {
        return cy.get('#service_93')
    }

    get residentDirectorCbox() {
        return cy.get('#service_94')
    }

    get continueBtn() {
        return cy.contains('button', 'Continue')
    }

    clickRegisteredAddressCbox() {
        this.registeredAddressCbox.click()
    }

    clickCompanySecretaryCbox() {
        this.companySecretaryCbox.click()
    }

    clickResidentDirectorCbox() {
        this.residentDirectorCbox.click()
    }

    clickContinueBtn() {
        this.continueBtn.click()
    }
}

module.exports = new ServiceRequiredPage()