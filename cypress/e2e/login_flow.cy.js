const CompanyNamePage = require('../page_objects/company_name_page')
const CompanyDueDiligencePage = require('../page_objects/company_due_diligence_page')
const CompanyDetailsPage = require('../page_objects/company_details_page')

describe('Verify company registration via login flow', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
    });

    it('Able to register new incorporation', () => {
        CompanyDueDiligencePage.login("nadterbang@gmail.com", "VlvVHhaMN0")
        CompanyDueDiligencePage.successfullyLoginNotiMsgDisplayed()
        CompanyDueDiligencePage.selectService("New incorporation")

        CompanyNamePage.enterCompanyName("", "Name02", "Name03")
        CompanyNamePage.validationMsgDisplayed()
    });

    it('Able to register new incorporation', () => {
        CompanyDueDiligencePage.login("nadterbang@gmail.com", "VlvVHhaMN0")
        CompanyDueDiligencePage.successfullyLoginNotiMsgDisplayed()
        CompanyDueDiligencePage.selectService("New incorporation")

        CompanyNamePage.enterCompanyName("Name01", "Name02", "Name03")

        CompanyDetailsPage.enterBusinessDetails("Nature of business", "Business Activity 1", "Business Activity 2")
        CompanyDetailsPage.enterFundingDetails("Equity/Shareholder/Investors")
        CompanyDetailsPage.enterTransactionsDetails("56000", "May", "Singapore")
        CompanyDetailsPage.selectRequireRegisteredAddressOption("Yes")
        CompanyDetailsPage.enterRegisteredAddressDetails("Address Line 1", "Address line 2", "City", "45000", "Singapore")
        CompanyDetailsPage.selectRequireCompanySecretaryOption("Yes")
        CompanyDetailsPage.selectRequireResidentDirectorOption("Yes")
        CompanyDetailsPage.clickContinueBtn()
    }); 

    it('Unable to proceed transfer-in with invalid UEN number', () => {

    }); 

    it('Unable to proceed transfer-in with non-existing UEN number', () => {

    }); 

    it('', () => {

    }); 

    it('', () => {

    }); 


});