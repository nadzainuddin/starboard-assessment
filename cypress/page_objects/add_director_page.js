const { secretaryEmailAddressErrMsg } = require("./company_details_page")
const { thirdChoiceNameInput } = require("./company_name_page")

class AddDirectorPage {
    get directorIsStakeholderYesOpt() {
        return cy.get('#NotNew')
    }

    get directorIsStakeholderNoOpt() {
        return cy.get('#isNew')
    }

    get requestDirectorToCompleteFormYesOpt() {
        return cy.get('#emailDirector')
    }

    get requestDirectorToCompleteFormNoOpt() {
        return cy.get('#fillInDirector')
    }

    get titleDD() {
        return cy.contains('label', 'title').next('select')
    }

    get fullNameInput() {
        return cy.get('[name="fullname"]')
    }

    get aliasInput() {
        return cy.get('[name="alias"]')
    }

    get preferredNameInput() {
        return cy.get('[name="display_name"]')
    }

    get firstNameInput() {
        return cy.get('[name="firstname"]')
    }

    get lastNameInput() {
        return cy.get('[name="lastname"]')
    }

    get nationalityInput() {
        return cy.get('div[name="nationality"] input')
    }

    get dateOfBirthInput() {
        return cy.contains('label', 'Date of birth').next('div input')
    }

    get emailInput() {
        return cy.get('[name="email"]')
    }

    get contactInput() {
        return cy.get('[name="mobile"]')
    }

    get countryOfTaxResidenceDD() {
        return cy.get('[name="tax_country"] input')
    }

    get occupationInput() {
        return cy.get('[name="primary_occupation"]')
    }

    get addressLine1Input() {
        return cy.get('[name="registered_address_01"]')
    }

    get addressLine2Input() {
        return cy.get('[name="registered_address_02"]')
    }

    get cityInput() {
        return cy.get('[name="registered_city"]')
    }

    get postalCodeInput() {
        return cy.get('[name="registered_postal"]')
    }

    get stateInput() {
        return cy.get('[name="registered_state"]')
    }

    get countryDD() {
        return cy.get('div[name="registered_country"]  input')
    }

    selectDirectorIsStakeholder(option) {
        option === 'Yes' ? this.directorIsStakeholderYesOpt.click() 
                            : this.directorIsStakeholderNoOpt.click()
    }

    selectRequestDirectorToCompleteForm(option) {
        option === 'Yes' ? this.requestDirectorToCompleteFormYesOpt.click()
                            : this.requestDirectorToCompleteFormYesOpt.click()
    }

    enterDirectorPersonalDetails(fullName, alias, preferredName, firstName, lastName, dateOfBirth) {
        if (fullName.length > 0) this.fullNameInput.type(fullName)
        if (alias.length > 0) this.aliasInput.type(alias)
        if (preferredName.length > 0) this.preferredNameInput.type(preferredName)
        if (firstName.length > 0) this.firstNameInput.type(firstName)
        if (lastName.length > 0) this.lastNameInput.type(lastName)
        if (dateOfBirth.length > 0) this.dateOfBirthInput.type(dateOfBirth)
    }

    enterDirectorGeneralDetails(title, nationality, email,contact, countryOfTaxResidence, occupation) {
        if (title.length > 0) this.titleDD.select(title)
        if (nationality.length > 0) this.nationalityInput.click().type(nationality+'{enter}')
        if (email.length > 0) this.emailInput.type(email)
        if (contact.length > 0) this.contactInput.type(contact)
        if (countryOfTaxResidence.length > 0) this.countryOfTaxResidenceDD.click().type(countryOfTaxResidence+'{enter}')
        if (occupation.length > 0) this.occupationInput.type(occupation)
    }

    enterResidenceAddressDetails1(addressLine1, addressLine2) {
        if (addressLine1.length > 0) this.addressLine1Input.type(addressLine1)
        if (addressLine2.length > 0) this.addressLine2Input.type(addressLine2)
    }

    enterResidenceAddressDetails2(city, postalCode, state, country) {
        if (city.length > 0) this.cityInput.type(city)
        if (postalCode.length > 0) this.postalCodeInput.type(postalCode)
        if (state.length > 0) this.stateInput.type(state)
        if (country.length > 0) this.countryDD.click().type(country+'{enter}')
    }
}
module.exports = new AddDirectorPage()