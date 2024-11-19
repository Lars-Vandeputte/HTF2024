describe('please work', () => {
    it('visit hackaton', () => {
      cy.visit('https://hackthefuture.bignited.be')

      cy.get('#action-button').click()
      cy.get('[style="overflow: hidden; width: 1000px; height: 660px; top: 0px;"]').click()
      cy.get('#continue').click() //ipv click naar volgende page navigeren visit('https://hackthefuture.bignited.be/collect-code')

      cy.get('#name').type('bob')
      cy.get('#age').type(22)
      cy.get('#species').select('Human')
      .should('have.value', 'human')
      cy.get('#planet').type('bobland{enter}')

      cy.get('img').click(220, 200)
    })

})