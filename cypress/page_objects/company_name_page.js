class CompanyNamePage {
    get firstChoiceNameInput() {
        return cy.get('[name="company_name1"]')
    }

    get firstChoiceNameInputErr() {
        return cy.get('[name="company_name1"]')
                    .next('[class*="invalid-feedback"]')
    }

    get secondChoiceNameInput() {
        return cy.get('[name="company_name2"]');
    }

    get thirdChoiceNameInput() {
        return cy.get('[name="company_name3"]');
    }

    get continueBtn() {
        return cy.get('button')
            .contains('Continue');
    }

    get errCardContainer() {
        return cy.get('[class*="card"]')
                    .child('li')
                    .child('div')
    }

    enterCompanyName(firstChoice, secondChoice, thirdChoice) {
        firstChoice.length > 0 ? this.firstChoiceNameInput.type(firstChoice) : this.firstChoiceNameInput.type('{backspace}')
        secondChoice.length > 0 ? this.secondChoiceNameInput.type(secondChoice) : this.secondChoiceNameInput.type('{backspace}')
        thirdChoice.length > 0 ? this.thirdChoiceNameInput.type(thirdChoice) : this.thirdChoiceNameInput.type('{backspace}')
        this.continueBtn.click();
    }

    validationMsgDisplayed() {
        this.firstChoiceNameInputErr.invoke('val').then((input) => {
            if(input.length == 0) 
                this.firstChoiceNameInputErr
                    .contains('At least one company name is required').should("be.visible")
            
        });
    }
}

module.exports = new CompanyNamePage();