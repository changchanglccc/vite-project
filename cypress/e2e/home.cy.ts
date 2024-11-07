import {HomePage} from './home.e2e';
import * as allure from "allure-cypress";

describe('MaintainX QA-Take-Home Project home page', () => {
    const homePage: HomePage = new HomePage();

    beforeEach(() => {
        // since we already set the baseUrl in cypress.config.ts file
        cy.visit('/');
    });

    it('should have a grid', () => {
        //make it fail on purpose
        allure.step('step 1', () => {
            homePage.grid.should('contain.text', 'should fail!');
        });

        allure.step('step 2', () => {
            homePage.grid.should('exist');
        });
    });

    describe('left navigator section', () => {
        it('should be visible', () => {
            homePage.navigator.should('be.visible');
        });

        it('should include two list items', () => {
            homePage.navigatorList.should('have.length', 5);
            // homePage.navigatorList.should('have.length', 2);
        });

        it('should have the first anchor element named "Create Work Order“', () => {
            cy.dataTest('create-work-order').should('contain', 'Create Work Order');
            // homePage.navigatorListItems.eq(0).should('contain', 'Create Work Order');
        });

        it('should have the second anchor element named "View Work-Orders“', () => {
            cy.dataTest('view-work-orders').should('contain', 'View Work-Orders');
            // homePage.navigatorListItems.eq(1).should('contain', 'View Work-Orders');
        });
    });

    describe('right articles section', () => {
        it('should be visible', () => {
            homePage.article.should('be.visible');
        });

        it('should include 6 table rows', () => {
            homePage.articleTableRows.should('have.length', 6);
        });

        it('should have the 1st order named "Unfreeze Frozen Morty“ with open Status', () => {
            homePage.articleTableRows.eq(0).find('td').eq(0).should('contain', 1);
            homePage.articleTableRows.eq(0).find('td').eq(1).should('contain', 'Unfreeze Frozen Morty');
            homePage.articleTableRows.eq(0).find('td').eq(2).should('contain', 'Open');
        });

        it('should have the 2nd order named "Clean Cat Morty\'s litterbox“ with open Status', () => {
            homePage.articleTableRows.eq(1).find('td').eq(0).should('contain', 2);
            homePage.articleTableRows.eq(1).find('td').eq(1).should('contain', 'Clean Cat Morty\'s litterbox');
            homePage.articleTableRows.eq(1).find('td').eq(2).should('contain', 'Open');
        });

        it('should have the 3rd order named "Walk Dog Morty around the block“ with open Status', () => {
            homePage.articleTableRows.eq(2).find('td').eq(0).should('contain', 3);
            homePage.articleTableRows.eq(2).find('td').eq(1).should('contain', 'Walk Dog Morty around the block');
            homePage.articleTableRows.eq(2).find('td').eq(2).should('contain', 'Open');
        });

        it('should have the 4th order named "Hammer nails“ with open Status', () => {
            homePage.articleTableRows.eq(3).find('td').eq(0).should('contain', 4);
            homePage.articleTableRows.eq(3).find('td').eq(1).should('contain', 'Hammer nails');
            homePage.articleTableRows.eq(3).find('td').eq(2).should('contain', 'Open');
        });

        it('should have the 5th order named "Land on Earth“ with DONE Status', () => {
            homePage.articleTableRows.eq(4).find('td').eq(0).should('contain', 5);
            homePage.articleTableRows.eq(4).find('td').eq(1).should('contain', 'Land on Earth');
            homePage.articleTableRows.eq(4).find('td').eq(2).should('contain', 'DONE');
        });

        it('should have the 6th order named "Freeze Morty“ with DONE Status', () => {
            homePage.articleTableRows.eq(5).find('td').eq(0).should('contain', 6);
            homePage.articleTableRows.eq(5).find('td').eq(1).should('contain', 'Freeze Morty');
            homePage.articleTableRows.eq(5).find('td').eq(2).should('contain', 'DONE');
        });
    });

    // or do a visual verification
    describe('home page screenshot', () => {});
});
