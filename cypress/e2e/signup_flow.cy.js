const CompanyDueDiligencePage = require('../page_objects/company_due_diligence_page')
const CompanyNamePage = require('../page_objects/company_name_page')
const CompanyDetailsPage = require('../page_objects/company_details_page')

describe('Verify company registration via sign up flow', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
    });

    it('Able to register new incorporation - Scenario 01', () => {
        // CompanyDueDiligencePage.signUpBusiness("test39@mail.com", "Lisa Mawar", "12344222")
        // CompanyDueDiligencePage.successfullyRegisteredNotiMsgDisplayed()
        // CompanyDueDiligencePage.selectService("New incorporation")

        // CompanyNamePage.enterCompanyName("Name01", "Name02", "Name03")
        
        // CompanyDetailsPage.enterBusinessDetails("Nature of business", "Business Activity 1", "Business Activity 2")
        // CompanyDetailsPage.enterFundingDetails("Equity/Shareholder/Investors")
        // CompanyDetailsPage.enterTransactionsDetails("56000", "May", "Singapore")
        // CompanyDetailsPage.selectRequireRegisteredAddressOption("Yes")
        // CompanyDetailsPage.selectRequireCompanySecretaryOption("Yes")
        // CompanyDetailsPage.selectRequireResidentDirectorOption("Yes")
        // CompanyDetailsPage.clickContinueBtn()
    });

    it('Able to register new incorporation - Scenario 02', () => {
        CompanyDueDiligencePage.signUpBusiness("test41@mail.com", "Lisa Mawar", "12344222")
        CompanyDueDiligencePage.successfullyRegisteredNotiMsgDisplayed()
        CompanyDueDiligencePage.selectService("New incorporation")

        CompanyNamePage.enterCompanyName("Name01", "Name02", "Name03")
        
        CompanyDetailsPage.enterBusinessDetails("Nature of business", "Business Activity 1", "Business Activity 2")
        CompanyDetailsPage.enterFundingDetails("Equity/Shareholder/Investors")
        CompanyDetailsPage.enterTransactionsDetails("56000", "May", "Singapore")
        CompanyDetailsPage.selectRequireRegisteredAddressOption("No")
        CompanyDetailsPage.enterRegisteredAddressDetails("Address Line 1", "Address line 2", "City", "45000", "State", "Singapore")
        CompanyDetailsPage.selectRequireCompanySecretaryOption("No")
        CompanyDetailsPage.enterCompanySecretaryInformation("Ray", "ray@mail.co", "1234423", 'PR')
        CompanyDetailsPage.selectRequireResidentDirectorOption("No")
        CompanyDetailsPage.clickContinueBtn()
    }); 

    it('Display error upon leaving company\'s first choice name field empty', () => {

    }); 

    it('Display errors upon submitting empty Company Details form', () => {

    }); 

    it('Should not able to proceed upon entering invalid avg transactions per month', () => {

    }); 

    it('Success in submitting details with existing registered address and company secretary', () => {

    }); 

    it('Success in submitting details with new registered address and company secretary', () => {

    }); 

    it('Success on updating company name, company details and share capitals', () => {

    }); 

    it('Able to update shareholder', () => {

    }); 

    it('', () => {

    }); 


});