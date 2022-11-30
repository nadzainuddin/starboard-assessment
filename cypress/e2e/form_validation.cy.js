const CompanyDueDiligencePage = require('../page_objects/company_due_diligence_page')
const CompanyNamePage = require('../page_objects/company_name_page')
const CompanyDetailsPage = require('../page_objects/company_details_page')

describe('Verify form validation error', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
    });

    // Company Due Diligence : 
    it('Display error upon submitting incomplete sign up form', () => {
        CompanyDueDiligencePage.signUpBusiness("", "", "1111111")
        CompanyDueDiligencePage.signUpEmailInputRequiredErrDisplayed()
        CompanyDueDiligencePage.signUpFullNameInputRequiredErrDisplayed()
        CompanyDueDiligencePage.signUpErrDisplayedOnCardContainer()
    }); 

    it('Display error upon submitting invalid sign up email', () => {
        CompanyDueDiligencePage.signUpBusiness("lisa.m", "Lisa Malhotra", "1111111")
        CompanyDueDiligencePage.signUpEmailInputInvalidErrDisplayed()
        CompanyDueDiligencePage.signUpErrDisplayedOnCardContainer()
    }); 


    it('Display error upon submitting incomplete login form', () => {
        CompanyDueDiligencePage.login("", "")
        CompanyDueDiligencePage.loginEmailInputRequiredErrDisplayed()
        CompanyDueDiligencePage.loginPasswordInputRequiredErrDisplayed()
        CompanyDueDiligencePage.loginErrDisplayedOnCardContainer()
    }); 

    it('Display error upon submitting incorrect login email and password', () => {
        CompanyDueDiligencePage.login("lisa@mail.co", "xxx")
        CompanyDueDiligencePage.wrongCredentialsErrDisplayedOnCardContainer()
    }); 

    // Company Name
    it('Display error on submitting form without company\'s first choice name', () => {
        CompanyDueDiligencePage.login("nadterbang@gmail.com", "VlvVHhaMN0")
        CompanyDueDiligencePage.successfullyLoginNotiMsgDisplayed()
        CompanyDueDiligencePage.selectService("New incorporation")

        CompanyNamePage.enterCompanyName("", "Name02", "Name03")
        CompanyNamePage.validationMsgDisplayed()
    });

    // Company Details
    it('Display error upon submitting empty Company Details form', () => {
        CompanyDueDiligencePage.login("nadterbang@gmail.com", "VlvVHhaMN0")
        CompanyDueDiligencePage.successfullyLoginNotiMsgDisplayed()
        CompanyDueDiligencePage.selectService("New incorporation")

        CompanyNamePage.enterCompanyName("Name01", "Name02", "Name03")

        CompanyDetailsPage.clickContinueBtn()
        CompanyDetailsPage.isRequiredValidationMsgDisplayed()
    })
});
