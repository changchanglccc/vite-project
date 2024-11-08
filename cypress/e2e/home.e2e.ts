export class HomePage {
    get grid(): Cypress.Chainable<JQuery> {
        return cy.get('main.grid');
    }

    get navigator(): Cypress.Chainable<JQuery> {
        return cy.get('nav');
    }

    get navigatorList(): Cypress.Chainable<JQuery> {
        return cy.get('nav ul li');
    }

    get navigatorListItems(): Cypress.Chainable<JQuery> {
        return cy.get('nav ul li a');
    }

    get article(): Cypress.Chainable<JQuery> {
        return cy.get('article');
    }

    get articleTableRows(): Cypress.Chainable<JQuery> {
        return cy.get('article tbody tr');
    }

    get workOrderDetailsSection(): Cypress.Chainable<JQuery> {
        return cy.get('article section');
    }

    get workOrderDetailsReturnButton(): Cypress.Chainable<JQuery> {
        return cy.get('article section a');
    }

    get workOrderDetailsDetailID(): Cypress.Chainable<JQuery> {
        return cy.get('article section h1.details-id');
    }

    get workOrderDetailsDetailName(): Cypress.Chainable<JQuery> {
        return cy.get('article section h1.details-name');
    }

    get workOrderDetailsAssignees(): Cypress.Chainable<JQuery> {
        return cy.get('article section div.assignee-inner');
    }

    get workOrderDetailsStatusSwitchButton(): Cypress.Chainable<JQuery> {
        return cy.get('article section button').eq(1);
    }

    get newWorkOrderTitle(): Cypress.Chainable<JQuery> {
        return cy.get('article section h3');
    }

    get newWorkOrderForm(): Cypress.Chainable<JQuery> {
        return cy.get('article section form');
    }

    get newWorkOrderFormLabels(): Cypress.Chainable<JQuery> {
        return cy.get('article section form label');
    }

    get newWorkOrderFormInput(): Cypress.Chainable<JQuery> {
        return cy.get('article section form input');
    }

    get newWorkOrderFormDropdown(): Cypress.Chainable<JQuery> {
        return cy.get('article section form select');
    }

    get newWorkOrderFormButton(): Cypress.Chainable<JQuery> {
        return cy.get('article section form .button');
    }
}