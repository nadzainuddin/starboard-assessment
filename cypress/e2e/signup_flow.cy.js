const CompanyDueDiligencePage = require('../page_objects/company_due_diligence_page')
const CompanyNamePage = require('../page_objects/company_name_page')
const CompanyDetailsPage = require('../page_objects/company_details_page')
const ServiceRequiredPage = require('../page_objects/service_required_page')
const ApplicationSummaryPage = require('../page_objects/application_summary_page')
const ShareCapitalPage = require('../page_objects/share_capital_page')
const AddShareholdersPage = require('../page_objects/add_shareholders_page')
const UltimateBeneficiaryOwnerPage = require('../page_objects/ultimate_beneficiary_owner_page')
const SubmissionStatusPage = require('../page_objects/submission_status_page')

describe('Verify company registration via sign up flow', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
    });

    it('Able to register new incorporation - Scenario 01', () => {
        cy.signUpWithEmail()
        CompanyDueDiligencePage.successfullyRegisteredNotiMsgDisplayed()
        CompanyDueDiligencePage.selectService("New incorporation")

        CompanyNamePage.enterCompanyName("Name01", "", "")
        
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

    it('Able to register new incorporation - Scenario 02', () => {
        cy.signUpWithEmail()
        CompanyDueDiligencePage.successfullyRegisteredNotiMsgDisplayed()
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

    it('Able to register new incorporation - Scenario 03', () => {
        cy.signUpWithEmail()
        CompanyDueDiligencePage.successfullyRegisteredNotiMsgDisplayed()
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
        cy.signUpWithEmail()
        CompanyDueDiligencePage.successfullyRegisteredNotiMsgDisplayed()
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