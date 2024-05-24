describe('MaintainX QA-Take-Home Project home page', () => {
    it('should be visitable', () => {
        // since we already set the baseUrl in cypress.config.ts file
        cy.visit('/');
    });
});
