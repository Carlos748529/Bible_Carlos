describe('Forgot Password Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display all elements correctly', () => {
    // Verificar la barra de estado
    cy.get('[data-testid="status-bar"]').should('exist');
    cy.get('[data-testid="time"]').should('contain', '9:41');
    
    // Verificar el botón de retroceso
    cy.get('[data-testid="back-button"]').should('exist');
    
    // Verificar el título y subtítulo
    cy.get('h1').should('contain', 'Forgot Password');
    cy.get('p').should('contain', 'Please type your email or phone number below');
    
    // Verificar el campo de entrada
    cy.get('input[placeholder="Email or Phone Number"]').should('exist');
    
    // Verificar el botón de envío
    cy.get('button[type="submit"]').should('contain', 'Send');
  });

  it('should handle input changes', () => {
    const testEmail = 'test@example.com';
    cy.get('input[placeholder="Email or Phone Number"]')
      .type(testEmail)
      .should('have.value', testEmail);
  });

  it('should handle form submission', () => {
    const testEmail = 'test@example.com';
    cy.get('input[placeholder="Email or Phone Number"]').type(testEmail);
    cy.get('button[type="submit"]').click();
  });

  it('should validate empty input', () => {
    cy.get('button[type="submit"]').click();
    cy.get('input[placeholder="Email or Phone Number"]')
      .should('have.attr', 'required');
  });

  it('should handle input focus state', () => {
    cy.get('input[placeholder="Email or Phone Number"]')
      .focus()
      .should('have.css', 'box-shadow')
      .and('include', 'rgb(209, 233, 255)');
  });
}); 