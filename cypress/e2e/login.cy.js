describe('Suite de pruebas de login',() =>{
    it ('Validar el mensaje de error de un Ingreso de credenciales incorrectas', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[name='username']").type('Test')
    cy.get("input[name='password']").type('admin2024')
    cy.get("button[type='submit']").click()
    cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should('be.visible')

    })

    it ('Validar el mensaje de error al ingresar un passwoard incorrecto', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin2024')
        cy.get("button[type='submit']").click()
        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should('be.visible')
})
    it ('Validar el ingreso de credenciales correctas', () => { //para ejecutar un solo caso usar le comando it.only
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[name='username']").type('Admin')
    cy.get("input[name='password']").type('admin103')
    cy.get("button[type='submit']").click()
    cy.contains("Bob Tester").should('be.visible')

})
})