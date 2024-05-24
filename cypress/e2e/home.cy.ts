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

    describe('right articles section', () => {});

    describe('home page screenshot', () => {});
});
