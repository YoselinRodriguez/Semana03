describe ('wait espera en cypress',()=>{
    it('assert que coincide con el atributo', () => {
        cy.visit('https://automationtesting.co.uk/loader.html')
        cy.wait(9000)
        cy.get('#loaderBtn').click()
        cy.contains('And you have clicked the button!').should('be.visible')
    })

    it.only('assert que coincide con el atributo', () => {
        cy.visit('https://automationtesting.co.uk/loader.html')
        cy.get('#loaderBtn',{timeout:9000}).click()
})
})