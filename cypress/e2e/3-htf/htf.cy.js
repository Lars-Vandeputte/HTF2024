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

      cy.get('#continue').click()

      cy.get('img').click(200, 195)
      cy.get('.murder')
      cy.get('.modal').click()
      cy.get('.ski-button').click()

      cy.get('#continue').click()

      cy.getLocalStorage('code').then((codeNumbers) => {
        console.log(codeNumbers)
        let number = codeNumbers.split('')

        cy.get('#numpad').click()


        number.forEach((item) => {
            cy.wait(500)
            cy.get("#" + item).click()
        });

        cy.get('#enter').click()
      })

    //   cy.get('body').type("{upArrow}")
    })

})