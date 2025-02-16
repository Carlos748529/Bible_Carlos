import '@testing-library/cypress/add-commands'

declare global {
  namespace Cypress {
    interface Chainable {
      // Aquí puedes agregar tipos para comandos personalizados
    }
  }
} 