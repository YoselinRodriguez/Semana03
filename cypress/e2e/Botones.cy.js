describe('Suite de pruebas de login',() =>{
    it ('Validar el mensaje al dar click en el botton Clickme', () => {
    cy.visit('https://demoqa.com/buttons')
    cy.get('button').eq(3).click()
   // cy.contains("Click Me").click()
    cy.get("#dynamicClickMessage").should('be.visible').and('contain','You have done a dynamic click')
    })

    it('doble click',()=>
    {
        cy.visit('https://demoqa.com/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('contain','You have done a double click')
    })
    
    it.only('click derecho',()=>
{
        cy.visit('https://demoqa.com/buttons')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('contain','You have done a double click')

})
    
})
