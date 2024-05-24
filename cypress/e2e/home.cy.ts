describe('MaintainX QA-Take-Home Project home page', () => {
    beforeEach(() => {
        // since we already set the baseUrl in cypress.config.ts file
        cy.visit('/');
    });

    describe('left navigator section', () => {
        it('should be visible', () => {
            cy.get('nav').should('be.visible');
        });

        it('should include two list items', () => {
            cy.get('nav ul li').should('have.length', 2);
        });

        it('should have the first anchor element named "Create Work Order“', () => {
            cy.get('nav ul li a').eq(0).should('contain', 'Create Work Order');
        });

        it('should have the second anchor element named "View Work-Orders“', () => {
            cy.get('nav ul li a').eq(1).should('contain', 'View Work-Orders');
        });
    });

    describe('right articles section', () => {
        it('should be visible', () => {
            cy.get('article').should('be.visible');
        });

        it('should include 6 table rows', () => {
            cy.get('article tbody tr').should('have.length', 6);
        });

        it('should have the 1st order named "Unfreeze Frozen Morty“ with open Status', () => {
            cy.get('article tbody tr').eq(0).find('td').eq(0).should('contain', 1);
            cy.get('article tbody tr').eq(0).find('td').eq(1).should('contain', 'Unfreeze Frozen Morty');
            cy.get('article tbody tr').eq(0).find('td').eq(2).should('contain', 'Open');
        });

        it('should have the 2nd order named "Clean Cat Morty\'s litterbox“ with open Status', () => {
            cy.get('article tbody tr').eq(1).find('td').eq(0).should('contain', 2);
            cy.get('article tbody tr').eq(1).find('td').eq(1).should('contain', 'Clean Cat Morty\'s litterbox');
            cy.get('article tbody tr').eq(1).find('td').eq(2).should('contain', 'Open');
        });

        it('should have the 3rd order named "Walk Dog Morty around the block“ with open Status', () => {
            cy.get('article tbody tr').eq(2).find('td').eq(0).should('contain', 3);
            cy.get('article tbody tr').eq(2).find('td').eq(1).should('contain', 'Walk Dog Morty around the block');
            cy.get('article tbody tr').eq(2).find('td').eq(2).should('contain', 'Open');
        });

        it('should have the 4th order named "Hammer nails“ with open Status', () => {
            cy.get('article tbody tr').eq(3).find('td').eq(0).should('contain', 4);
            cy.get('article tbody tr').eq(3).find('td').eq(1).should('contain', 'Hammer nails');
            cy.get('article tbody tr').eq(3).find('td').eq(2).should('contain', 'Open');
        });

        it('should have the 5th order named "Land on Earth“ with DONE Status', () => {
            cy.get('article tbody tr').eq(4).find('td').eq(0).should('contain', 5);
            cy.get('article tbody tr').eq(4).find('td').eq(1).should('contain', 'Land on Earth');
            cy.get('article tbody tr').eq(4).find('td').eq(2).should('contain', 'DONE');
        });

        it('should have the 6th order named "Freeze Morty“ with DONE Status', () => {
            cy.get('article tbody tr').eq(5).find('td').eq(0).should('contain', 6);
            cy.get('article tbody tr').eq(5).find('td').eq(1).should('contain', 'Freeze Morty');
            cy.get('article tbody tr').eq(5).find('td').eq(2).should('contain', 'DONE');
        });
    });

    // or do a visual verification
    describe('home page screenshot', () => {});
});
