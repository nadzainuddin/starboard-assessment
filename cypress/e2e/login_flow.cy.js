const CompanyDueDiligencePage = require('../page_objects/company_due_diligence_page')
const CompanyNamePage = require('../page_objects/company_name_page')
const CompanyDetailsPage = require('../page_objects/company_details_page')
const ServiceRequiredPage = require('../page_objects/service_required_page')
const ApplicationSummaryPage = require('../page_objects/application_summary_page')
const ShareCapitalPage = require('../page_objects/share_capital_page')
const AddDirectorPage = require('../page_objects/add_director_page')
const AddShareholdersPage = require('../page_objects/add_shareholders_page')
const UltimateBeneficiaryOwnerPage = require('../page_objects/ultimate_beneficiary_owner_page')
const SubmissionStatusPage = require('../page_objects/submission_status_page')

describe('Verify company registration via login flow', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
    });

    it('Able to register new incorporation - Scenario 01', () => {
        CompanyDueDiligencePage.login("nadterbang@gmail.com", "VlvVHhaMN0")
        CompanyDueDiligencePage.successfullyLoginNotiMsgDisplayed()
        CompanyDueDiligencePage.selectService("New incorporation")

        CompanyNamePage.enterCompanyName("Name01", "", "")
        
        CompanyDetailsPage.enterBusinessDetails("Nature of business", "FITNESS CENTRES AND GYMNASIUMS", "GROWING OF FOOD CROPS (NON-HYDROPONICS) N.E.C.")
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
    });

    it('Able to register new incorporation - Scenario 02', () => {
        CompanyDueDiligencePage.login("nadterbang@gmail.com", "VlvVHhaMN0")
        CompanyDueDiligencePage.successfullyLoginNotiMsgDisplayed()
        CompanyDueDiligencePage.selectService("New incorporation")

        CompanyNamePage.enterCompanyName("INDUSTRIAL ENT", "INDUSTRIAL SDN BHD", "MEGA JAYA BERHAD")
        
        CompanyDetailsPage.enterBusinessDetails("Nature of business", "FITNESS CENTRES AND GYMNASIUMS", "GROWING OF FOOD CROPS (NON-HYDROPONICS) N.E.C.")
        CompanyDetailsPage.enterFundingDetails("Revenue/Sales")
        CompanyDetailsPage.enterTransactionsDetails("80000", "November", "Singapore")
        CompanyDetailsPage.selectRequireRegisteredAddressOption("Yes")
        CompanyDetailsPage.selectRequireCompanySecretaryOption("No")
        CompanyDetailsPage.enterCompanySecretaryInformation("Juwita Lan", "juwilan@mail.co", "1233322", "PR")
        CompanyDetailsPage.selectRequireResidentDirectorOption("Yes")
        CompanyDetailsPage.clickContinueBtn()

        ServiceRequiredPage.clickContinueBtn()

        ApplicationSummaryPage.clickShareCapitalAddBtn()
        ShareCapitalPage.enterShareCapitalInformation("", "CAD", "6000000", "10060000")

        ApplicationSummaryPage.clickDirectorsAddBtn()
        AddDirectorPage.selectDirectorIsStakeholder("No")
        AddDirectorPage.selectRequestDirectorToCompleteForm("Yes")
        AddDirectorPage.enterDirectorContactDetails("Robert Dylan", "robertdyl@mail.co")

        ApplicationSummaryPage.clickShareholdersAddBtn()
        AddShareholdersPage.addIndividualShareholder("100000000", "10000000000")
        AddShareholdersPage.selectShareholderIsAddedStakeholder("Yes")
        AddShareholdersPage.selectAddAsShareholderValue(1)
        AddShareholdersPage.clickCompleteAddingShareholderBtn()
        ApplicationSummaryPage.clickToAddAdditionalShareholder()
        AddShareholdersPage.addCorporateShareholder("100000000", "10000000000")
        AddShareholdersPage.requestShareholderFillTheForm("Alan Robinson", "arob.mail.cp", "5555555", "RENOVA CO", "Australia", "LL3141341H", "")
        AddShareholdersPage.clickCompleteAddingShareholderBtn()

        ApplicationSummaryPage.clickUBOAddBtn()
        UltimateBeneficiaryOwnerPage.selectUBOIsAddedStakeholder("No")
        UltimateBeneficiaryOwnerPage.requestUBOToFillTheForm("UBO01", "uob01@mail.co")

        ApplicationSummaryPage.clickSubmitAllDetailsBtn()
        SubmissionStatusPage.detailsSubmissionSuccess()
    }); 
});