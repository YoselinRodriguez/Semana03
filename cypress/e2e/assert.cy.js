describe ('Tipos de assert basicos',()=>{
it('assert que coincide con el atributo', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('#firstName').should('have.attr','placeholder','First Name')

})
it('assert contaneado',() => {
    cy.visit
})


})
