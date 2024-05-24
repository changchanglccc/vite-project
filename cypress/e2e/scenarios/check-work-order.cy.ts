import {HomePage} from '../home.e2e';

describe('when check the work order in details', () => {
    const homePage: HomePage = new HomePage();

    beforeEach(() => {
        // since we already set the baseUrl in cypress.config.ts file
        cy.visit('/');
    });

    // randomly selected the 2nd order with Open Status
    describe('when select a work order with Open status', () => {
        describe('when select the 2nd work order from home page', () => {
            it('should exist and the status should be Open', () => {
                homePage.articleTableRows.eq(1).should('exist');
                homePage.articleTableRows.eq(1).find('td').eq(2).should('contain', 'Open');
            });

            describe('when click on the 2nd work order name', () => {
                beforeEach(() => {
                    homePage.articleTableRows.eq(1).find('td').eq(1).click();
                });

                it('should make a details section visible', () => {
                    homePage.workOrderDetailsSection.should('be.visible');
                });

                describe('in detail section', () => {
                    it('should contain a Retourner button', () => {
                        homePage.workOrderDetailsReturnButton.should('contain', '⬅️ Retourner');
                    });

                    it('should contain a detail id', () => {
                        homePage.workOrderDetailsDetailID.should('contain', 'Work Order #2');
                    });

                    it('should contain a detail name', () => {
                        homePage.workOrderDetailsDetailName.should('contain', 'Title: Clean Cat Morty\'s litterbox');
                    });

                    it('should contain a Status', () => {   // could be improved if the source code has id for example
                        cy.get('article section div').eq(0).should('contain', 'Status: Open');
                    });

                    it('should contain a Assignees', () => { // same here, could be improved
                        cy.get('article section div').eq(1).should('contain', 'Assignees');
                        cy.get('article section div.assignee-inner').should('contain', 'Cat Morty');
                        cy.get('article section div button').should('contain', '✗');
                    });

                    it('should contain a button with ”Close the work order"', () => {
                        homePage.workOrderDetailsStatusSwitchButton.should('contain', 'Close the work order');
                    });
                });
            });
        });
    });

    // Attention: Skipped the following part in this demo
    // randomly selected one order with DONE Status, then test same details but Reopen button
});
