describe('please work', () => {
    it('visit hackaton', () => {
      cy.visit('https://hackthefuture.bignited.be')
      cy.get('#action-button').click()
    })

})