import {HomePage} from '../home.e2e';

describe('when create a new work order', () => {
    const homePage: HomePage = new HomePage();

    beforeEach(() => {
        cy.visit('/');
    });

    describe('when click "Create Work Order"', () => {
        beforeEach(() => {
            homePage.navigatorListItems.eq(0).click();
        })
        it('should display a title and a form', () => {
            homePage.newWorkOrderTitle.should('exist');
            homePage.newWorkOrderForm.should('exist');
        });

        describe('the title', () => {
            it('should be "New Work Orders"', () => {
                homePage.newWorkOrderTitle.should('contain', 'New Work Orders');
            });
        });

        describe('the form', () => {
            it('should include form rows Name and Assignees and a create button', () => {
                homePage.newWorkOrderFormLabels.eq(0).should('contain', 'Name');
                homePage.newWorkOrderFormLabels.eq(1).should('contain', 'Assignees');
                homePage.newWorkOrderFormButton.should('contain', 'Create');
            });
        });

        describe('when fill the form', () => {
            describe('when enter a name and select two various assignees and click Create button', () => {
                it('should make work orders table visible and the length of it should be 7', () => {
                    homePage.newWorkOrderFormInput.type('This is a fake name');
                    homePage.newWorkOrderFormDropdown.select(2);
                    homePage.newWorkOrderFormDropdown.select(3);

                    homePage.newWorkOrderFormButton.click();

                    homePage.articleTableRows.should('exist');
                    homePage.articleTableRows.should('have.length', 7);
                });
            });
        });

    });
});

/**
 * Attention:
 *
 * although the content of new page included in workflow, we also can design to split the current file to two files：
 * 1. have a test file for "New Work Order" page(mainly show page content)
 * 2. the scenario test file only focus on workflow
 *
 * It depends on team strategy, i kept them together in demo
 *
*/
