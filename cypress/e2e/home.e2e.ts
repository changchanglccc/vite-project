export class HomePage {
    get grid(): Cypress.Chainable<JQuery> {
        return cy.get('main.grid');
    }

    get navigatorSection(): Cypress.Chainable<JQuery> {
        return cy.get('nav');
    }

    get navigatorList(): Cypress.Chainable<JQuery> {
        return cy.get('nav ul li');
    }

    get navigatorListItems(): Cypress.Chainable<JQuery> {
        return cy.get('nav ul li a');
    }

    get articleSection(): Cypress.Chainable<JQuery> {
        return cy.get('article');
    }

    get articleTableRows(): Cypress.Chainable<JQuery> {
        return cy.get('article tbody tr');
    }
}