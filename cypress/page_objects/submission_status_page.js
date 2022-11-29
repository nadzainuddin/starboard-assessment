class SubmissionStatusPage {

    get submissionStatusLbl() {
        return cy.contains('h3', 'Your details have been submitted')
    }

    detailsSubmissionSuccess() {
        this.submissionStatusLbl.should('be.visible')
    }
}

module.exports = new SubmissionStatusPage()