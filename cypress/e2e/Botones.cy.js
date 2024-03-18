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
    
    it('click derecho',()=>
{
        cy.visit('https://demoqa.com/buttons')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('contain','You have done a right click')

})
    it.only('interaction with canva',()=> {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('#action-canvas').click('topLeft')
        cy.get('#action-canvas').click('topRight')
        cy.get('#action-canvas').click('top')
        cy.get('#action-canvas').click('left')
        cy.get('#action-canvas').click('bottom')
        cy.get('#action-canvas').click('bottomLeft')
        cy.get('#action-canvas').click('bottomRight')
        cy.get('#action-canvas').click('right')
        cy.get('#action-canvas').click(80,75)
        cy.get('#action-canvas').click(170,175)

        cy.get('.action-labels>.label').click({multiple:true})
        cy.get('.action-opacity>.btn').click({force:true})
    })


})
