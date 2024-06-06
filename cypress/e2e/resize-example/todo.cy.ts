/**
 * Because i want to show how to do api calls in e2e test
 * (api call tests are faster than UI tests, sometimes will suggest to use api).
 *
 * you can also visit https://todo.qacart.com/signup directly, there is a form for registering
 * This e2e uses a third party url, and is to add a todo
 */

import { faker } from '@faker-js/faker';

// please also check cypress.config.ts file. that is another way to do this
describe('Multiple screen size tests', () => {
    context('default size', () => {
        beforeEach(() => {
            // could be skip also, because it is a default setting
            cy.viewport(1000, 600);
        });

        it('should be able to add a todo in default size', () => {
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
        });
    });

    context('iphone 14 pro max size', () => {
        beforeEach(() => {
            // could be skip also, because it is a default setting
            cy.viewport(430, 932);
        });

        it('should be able to add a todo in mobile size', () => {
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
        });
    });
});

