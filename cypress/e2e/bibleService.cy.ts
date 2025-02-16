describe('Bible Service', () => {
  beforeEach(() => {
    // Interceptar las llamadas a la API
    cy.intercept('GET', '**/bibles/592420522e16049f-01/books', {
      fixture: 'books.json',
      headers: {
        'api-key': Cypress.env('API_KEY')
      }
    }).as('getBooks')

    cy.intercept('GET', '**/bibles/592420522e16049f-01/books/*/chapters', {
      fixture: 'chapters.json',
      headers: {
        'api-key': Cypress.env('API_KEY')
      }
    }).as('getChapters')

    cy.intercept('GET', '**/bibles/592420522e16049f-01/chapters/*/verses', {
      fixture: 'verses.json',
      headers: {
        'api-key': Cypress.env('API_KEY')
      }
    }).as('getVerses')
  })

  it('should fetch books successfully', () => {
    // Visitar la página donde se cargan los libros
    cy.visit('/')
    
    // Esperar a que se complete la llamada a la API
    cy.wait('@getBooks').then((interception) => {
      if (interception && interception.response) {
        expect(interception.response.statusCode).to.equal(200)
      } else {
        throw new Error('No se recibió respuesta de la API')
      }
      // Verificar que los libros se muestran en la UI
      cy.get('[data-testid="book-list"]').should('exist')
    })
  })

  it('should fetch chapters when selecting a book', () => {
    cy.visit('/')
    
    // Seleccionar un libro
    cy.get('[data-testid="book-item"]').first().click()
    
    cy.wait('@getChapters').then((interception) => {
      if (interception && interception.response) {
        expect(interception.response.statusCode).to.equal(200)
      } else {
        throw new Error('No se recibió respuesta de la API')
      }
      // Verificar que los capítulos se muestran
      cy.get('[data-testid="chapter-list"]').should('exist')
    })
  })

  it('should fetch verses when selecting a chapter', () => {
    cy.visit('/')
    
    // Navegar hasta un capítulo específico
    cy.get('[data-testid="book-item"]').first().click()
    cy.get('[data-testid="chapter-item"]').first().click()
    
    cy.wait('@getVerses').then((interception) => {
      if (interception && interception.response) {
        expect(interception.response.statusCode).to.equal(200)
      } else {
        throw new Error('No se recibió respuesta de la API')
      }
      // Verificar que los versículos se muestran
      cy.get('[data-testid="verse-list"]').should('exist')
    })
  })
}) 