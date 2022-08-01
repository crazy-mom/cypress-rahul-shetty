describe('HomePage', () => {
    it('visit homepage', () => {
        cy.visit('/')
        cy.get('.container')
            .find('.redlogo').should("be.visible")
    })
    it('User can click ADD to cart button', ()=>{
        cy.wait(5000)
        cy.get('.products')
        .find('.product')
            .each(($e1,index,$list)=> {
                
                cy.log($e1 + ' is value of the element outside if')
                cy.log(index +' is value of the index outside if ')
               // cy.wait(5000)
                cy.get('.product-name').should('be.visible')
              var vegetableName=  $e1.find('h4.product-name').text()
                            console.log(vegetableName + ' is text of the element outside if')
                            //cy.wait(5000)
                if(vegetableName.includes('Cauliflower')){
                  
                   cy.wrap($e1).contains('ADD TO CART').should('be.visible').click()
                  // cy.wrap($e1).get('.product-action')
                      //  .find('.button').should('be.visible').click()
                  cy.log($e1 + ' is value of the element.......')
                  cy.log(index +' is value of the index........')
                }
            })
    })
})