class ApplicationSummaryPage {

    get expandCompanyNameIcon() {
        return cy.contains('h3', 'Company name').next('i')
    }

    get firstChoiceCompanyNameLbl() {
        return cy.contains('small', 'FIRST CHOICE').next('div')
    }

    get secondChoiceCompanyNameLbl() {
        return cy.contains('small', 'SECOND CHOICE').next('div')
    }

    get thirdChoiceCompanyNameLbl() {
        return cy.contains('small', 'THIRD CHOICE').next('div')
    }

    get editCompanyNameBtn() {
        return cy.contains('a', 'Edit company name')
    }

    get expandCompanyDetailsIcon() {
        return cy.contains('h3', 'Company details').next('div > i')
    }

    get natureOfBusinessLbl() {
        return cy.contains('small', 'NATURE OF BUSINESS').next('div')
    }

    get businessActivity1Lbl() {
        return cy.contains('small', 'BUSINESS ACTIVITY 1').next('div')
    }

    get businessActivity2Lbl() {
        return cy.contains('small', 'BUSINESS ACTIVITY 2').next('div')
    }

    get sourceOfFundingLbl() {
        return cy.contains('small', 'SOURCE OF FUNDING').next('div')
    }

    get monthlyEstimatedAvgTransactionLbl() {
        return cy.contains('small', 'ESTIMATED AVERAGE TRANSACTIONS PER MONTH').next('div')
    }

    get proposedFYEMonthLbl() {
        return cy.contains('small', 'PROPOSED FINANCIAL YEAR END (FYE) MONTH').next('div')
    }

    get countryWithMostTransactionLbl() {
        return cy.contains('small', 'COUNTRY THAT THE ENTITY TRANSACTS MOST WITH').next('div')
    }

    get registeredAddressLbl() {
        return cy.contains('small', 'REGISTERED ADDRESS').next('div')
    }

    get requireCompSecretaryServicesLbl() {
        return cy.contains('small', 'REQUIRE COMPANY SECRETARY SERVICES?').next('div')
    }

    get requireResidentDirectorServicesLbl() {
        return cy.contains('small', 'REQUIRE RESIDENT DIRECTOR SERVICES?').next('div')
    }

    get editCompanyDetailsBtn() {
        return cy.contains('a', 'Edit company details')
    }

    get shareCapitalAddBtn() {

    }

    get expandShareCapitalIcon() {
        return cy.contains('h3', 'Share capital').next('i')
    }

    get editCapitalInformationBtn() {
        return cy.contains('a', 'Edit capital information')
    }

    get shareTypeLbl() {
        return cy.contains('small', 'SHARE TYPE').next('div')
    }

    get currencyLbl() {
        return cy.contains('small', 'CURRENCY').next('div')
    }

    get totalShareCapitalLbl() {
        return cy.contains('small', 'TOTAL SHARE CAPITAL').next('div')
    }

    get totalNoOfSharesLbl() {
        return cy.contains('small', 'TOTAL NUMBER OF SHARES').next('div')
    }

    get expandDirectorsIcon() {
        return cy.contains('h3', 'Directors').parent('div').next('div > i')
    }

    get addADirectorBtn() {
        return cy.contains('a', 'Add a director')
    }

    get directorFullNameLbl() {
        // '//h3[contains(text(),'Directors')]/../../following-sibling::div//tbody/tr/td[1]'
        return cy.contains('h3', 'Directors').parent('div div').next('div tbody > tr > td:nth-child(1)')
    }

    get directorEmailLbl() {
        // '//h3[contains(text(),'Directors')]/../../following-sibling::div//tbody/tr/td[2]'
        return cy.contains('h3', 'Directors').parent('div div').next('div tbody > tr > td:nth-child(2)')
    }

    get directorStatusLbl() {
        // '//h3[contains(text(),'Directors')]/../../following-sibling::div//tbody/tr/td[3]'
        return cy.contains('h3', 'Directors').parent('div div').next('div tbody > tr > td:nth-child(3)')
    }

    get shareholdersAddBtn() {

    }

    get expandShareholdersIcon() {
        return cy.contains('h3', 'Shareholders').parent('div').next('div > i')
    }

    get addAShareholderBtn() {
        return cy.get('a', 'Add a shareholder')
    }

    get shareholderNameLbl() {
        // '//h3[contains(text(),'Shareholders')]/../../following-sibling::div//tbody/tr/td[1]/span'
        return cy.contains('h3', 'Shareholders').parent('div div').next('div tbody > tr > td:nth-child(1)/span')
    }

    get shareholderEmailLbl() {
        // '//h3[contains(text(),'Shareholders')]/../../following-sibling::div//tbody/tr/td[1]/small'
        return cy.contains('h3', 'Shareholders').parent('div div').next('div tbody > tr > td:nth-child(1)/small')
    }

    get shareholderTypeLbl() {
        // '//h3[contains(text(),'Shareholders')]/../../following-sibling::div//tbody/tr/td[2]'
        return cy.contains('h3', 'Shareholders').parent('div div').next('div tbody > tr > td:nth-child(2)')
    }

    get shareholderShareAlottedLbl() {
        // '//h3[contains(text(),'Shareholders')]/../../following-sibling::div//tbody/tr/td[3]'
        return cy.contains('h3', 'Shareholders').parent('div div').next('div tbody > tr > td:nth-child(3)')
    }

    get shareholderStatusLbl() {
        // '//h3[contains(text(),'Shareholders')]/../../following-sibling::div//tbody/tr/td[4]/span[contains(@class,'status')]'
        return cy.contains('h3', 'Shareholders').parent('div div').next('div tbody > tr > td:nth-child(4)').children('class', 'status')
    }

    get expandUBOIcon() {
        return cy.contains('h3', 'Ultimate Beneficiary Owner (UBO)').parent('div').next('div > i')
    }

    get addAUBOBtn() {
        return cy.contains('a', 'Add a ultimate beneficiary owner')
    }

    get UBOFullNameLbl() {
        //h3[contains(text(),'Ultimate Beneficiary Owner (UBO)')]/../../following-sibling::div//tbody/tr/td[1]
        return cy.contains('h3', 'Ultimate Beneficiary Owner (UBO)').parent('div div').next('div tbody > tr > td:nth-child(1)')
    }

    get UBOEmailLbl() {
        //h3[contains(text(),'Ultimate Beneficiary Owner (UBO)')]/../../following-sibling::div//tbody/tr/td[2]
        return cy.contains('h3', 'Ultimate Beneficiary Owner (UBO)').parent('div div').next('div tbody > tr > td:nth-child(2)')
    }

    get UBOStatusLbl() {
        //h3[contains(text(),'Ultimate Beneficiary Owner (UBO)')]/../../following-sibling::div//tbody/tr/td[3]
        return cy.contains('h3', 'Ultimate Beneficiary Owner (UBO)').parent('div div').next('div tbody > tr > td:nth-child(3)')
    }

    get expandServicesIcon() {
        return cy.contains('h3', 'Services').next('div > i')
    }

    get editServicesBtn() {
        return cy.contains('a', 'Edit services')
    }

    get selectedServicesLbl() {
        return cy.contains('small', 'SELECTED SERVICES').next('div')
    }

    get submitAllDetailsBtn() {
       return cy.contains('button', 'Submit all details') 
    }
}
module.exports = new ApplicationSummaryPage()