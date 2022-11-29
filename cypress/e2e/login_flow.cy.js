const CompanyNamePage = require('../page_objects/company_name_page')
const CompanyDueDiligencePage = require('../page_objects/company_due_diligence_page')
const CompanyDetailsPage = require('../page_objects/company_details_page')

describe('Verify company registration via login flow', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
    });

    it('Able to register new incorporation - Scenario 01', () => {
        CompanyDueDiligencePage.login("nadterbang@gmail.com", "VlvVHhaMN0")
        CompanyDueDiligencePage.successfullyLoginNotiMsgDisplayed()
        CompanyDueDiligencePage.selectService("New incorporation")

        CompanyNamePage.enterCompanyName("", "Name02", "Name03")
        CompanyNamePage.validationMsgDisplayed()
    });

    it('Able to register new incorporation - Scenario 02', () => {
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

    it('Able to register new incorporation - Scenario 03', () => {
        CompanyDueDiligencePage.login("nadterbang@gmail.com", "VlvVHhaMN0")
        CompanyDueDiligencePage.successfullyLoginNotiMsgDisplayed()
        CompanyDueDiligencePage.selectService("New incorporation")

        CompanyNamePage.enterCompanyName("Company01", "Company02", "Company03")
        
        CompanyDetailsPage.enterBusinessDetails("Nature of business", "FITNESS CENTRES AND GYMNASIUMS", "")
        CompanyDetailsPage.enterFundingDetails("Equity/Shareholder/Investors")
        CompanyDetailsPage.enterTransactionsDetails("56000", "May", "Singapore")
        CompanyDetailsPage.selectRequireRegisteredAddressOption("Yes")
        CompanyDetailsPage.selectRequireCompanySecretaryOption("Yes")
        CompanyDetailsPage.selectRequireResidentDirectorOption("Yes")
        CompanyDetailsPage.clickContinueBtn()

        ServiceRequiredPage.clickCompanySecretaryCbox()
        ServiceRequiredPage.clickContinueBtn()

        ApplicationSummaryPage.clickShareCapitalAddBtn()
        ShareCapitalPage.enterShareCapitalInformation("", "AUD", "560000", "10")

        ApplicationSummaryPage.clickShareholdersAddBtn()
        AddShareholdersPage.addIndividualShareholder("100000000", "10000000000")
        AddShareholdersPage.selectShareholderIsAddedStakeholder("Yes")
        AddShareholdersPage.selectAddAsShareholderValue(1)
        AddShareholdersPage.clickOverviewBtn()

        ApplicationSummaryPage.clickUBOAddBtn()
        UltimateBeneficiaryOwnerPage.selectUBOIsAddedStakeholder("No")
        UltimateBeneficiaryOwnerPage.requestUBOToFillTheForm("UBO01", "uob01@mail.co")

        ApplicationSummaryPage.clickSubmitAllDetailsBtn()
        SubmissionStatusPage.detailsSubmissionSuccess()
        cy.updateUserCreds()
    }); 

    it('Able to register new incorporation - Scenario 04', () => {
        CompanyDueDiligencePage.login("nadterbang@gmail.com", "VlvVHhaMN0")
        CompanyDueDiligencePage.successfullyLoginNotiMsgDisplayed()
        CompanyDueDiligencePage.selectService("New incorporation")

        CompanyNamePage.enterCompanyName("Company01", "Company02", "Company03")
        
        CompanyDetailsPage.enterBusinessDetails("Nature of business", "FITNESS CENTRES AND GYMNASIUMS", "")
        CompanyDetailsPage.enterFundingDetails("Equity/Shareholder/Investors")
        CompanyDetailsPage.enterTransactionsDetails("56000", "May", "Singapore")
        CompanyDetailsPage.selectRequireRegisteredAddressOption("Yes")
        CompanyDetailsPage.selectRequireCompanySecretaryOption("Yes")
        CompanyDetailsPage.selectRequireResidentDirectorOption("Yes")
        CompanyDetailsPage.clickContinueBtn()

        ServiceRequiredPage.clickCompanySecretaryCbox()
        ServiceRequiredPage.clickContinueBtn()

        ApplicationSummaryPage.clickShareCapitalAddBtn()
        ShareCapitalPage.enterShareCapitalInformation("", "AUD", "560000", "10")

        ApplicationSummaryPage.clickShareholdersAddBtn()
        AddShareholdersPage.addIndividualShareholder("100000000", "10000000000")
        AddShareholdersPage.selectShareholderIsAddedStakeholder("Yes")
        AddShareholdersPage.selectAddAsShareholderValue(1)
        AddShareholdersPage.clickOverviewBtn()

        ApplicationSummaryPage.clickUBOAddBtn()
        UltimateBeneficiaryOwnerPage.selectUBOIsAddedStakeholder("No")
        UltimateBeneficiaryOwnerPage.requestUBOToFillTheForm("UBO01", "uob01@mail.co")

        ApplicationSummaryPage.clickSubmitAllDetailsBtn()
        SubmissionStatusPage.detailsSubmissionSuccess()
        cy.updateUserCreds()
    }); 
});