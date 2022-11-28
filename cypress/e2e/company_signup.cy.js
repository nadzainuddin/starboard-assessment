const CompanyDueDiligencePage =  require('../page_objects/company_due_diligence_page')
const CompanyNamePage = require('../page_objects/company_name_page')

describe('Verify Company Sign Up flow', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
    });

    it('Company able to sign up', () => {
        CompanyDueDiligencePage.signUpBusiness("business04_test@mail.com", "business02", "1111111", "new");
        CompanyNamePage.enterCompanyName("business01", "business02", "business03");
    }); 
});