describe('Home Page', ()=>{
  it('verify the page title', ()=>{
      cy.visit('https://www.decathlon.in/')
      cy.title().should('eq','Decathlon - Buy Sport Products Online | Download Decathlon App')
  })
})