/**
 * Because i want to show allure reporting by doing api calls in e2e test, easy and fast.
 * you can also visit https://todo.qacart.com/signup directly, there is a form for registering
 *
 * This e2e uses a third party url, and is to add a todo
 *
 * More info could be found in Allure report
 */

import { faker } from '@faker-js/faker';

it.only('should be able to add a todo', () => {
    // a third party url
    cy.visit('https://todo.qacart.com/signup');
    // fill the form
    cy.get('[data-testid="first-name"]').type(faker.person.firstName());
    cy.get('[data-testid="last-name"]').type(faker.person.lastName());
    cy.get('[data-testid="email"]').type(faker.internet.email());
    cy.get('[data-testid="password"]').type('Test1234');
    cy.get('[data-testid="confirm-password"]').type('Test1234');

    cy.get('[data-testid="submit"]').click();

    cy.get('[data-testid="welcome"]').should('be.visible');
    cy.get('[data-testid="add"]').click();
    cy.get('[data-testid="new-todo"]').type('Demo Api call');
    cy.get('[data-testid="submit-newTask"]').click();
    cy.get('[data-testid="todo-item"]').should('contain', 'Demo Api call');
});