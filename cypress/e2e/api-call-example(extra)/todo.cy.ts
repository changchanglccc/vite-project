/**
 * Because i want to show how to do api calls in e2e test
 * (api call tests are faster than UI tests, sometimes will suggest to use api).
 *
 * you can also visit https://todo.qacart.com/signup directly, there is a form for registering
 * This e2e uses a third party url, and is to add a todo
 */

import { faker } from '@faker-js/faker';

it('should be able to add a todo', () => {
    // // a third party url
    // cy.visit('https://todo.qacart.com/signup');
    // // fill the form
    // cy.get('[data-testid="first-name"]').type(faker.person.firstName());
    // cy.get('[data-testid="last-name"]').type(faker.person.lastName());
    // cy.get('[data-testid="email"]').type(faker.internet.email());
    // cy.get('[data-testid="password"]').type('Test1234');
    // cy.get('[data-testid="confirm-password"]').type('Test1234');

    // cy.get('[data-testid="submit"]').click();

    //api call:
    cy.request({
        method: 'POST',
        url: 'https://todo.qacart.com/api/v1/users/register',
        body: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: 'Test1234'
        }
    }).should(response => {
        expect(response.status).to.equal(201);
        expect(response.body).have.property('userID');
        expect(response.body).have.property('firstName');
    });

    cy.visit('https://todo.qacart.com/todo');

    cy.get('[data-testid="welcome"]').should('be.visible');
    cy.get('[data-testid="add"]').click();
    cy.get('[data-testid="new-todo"]').type('Demo Api call');
    cy.get('[data-testid="submit-newTask"]').click();
    cy.get('[data-testid="todo-item"]').should('contain', 'Demo Api call');
});