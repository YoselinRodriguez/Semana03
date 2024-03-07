describe('template spec', () => {
  it('Validar que la carga del web sea correcta', () => {
    cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
    cy.get("li[id='ca-nstab-project']").should('be.visible')
    cy.get("#pt-createaccount-2").should('exist')

    
})
})