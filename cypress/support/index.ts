export {}

declare global {
  namespace Cypress {
    interface Chainable {
      dataTest(value: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
