//<reference types="cypress" />

import Login from "./PageObject/Login.js"

describe('User should be able', function() {
    it('to log in', function() {
    const login = new Login();
    login.navigate();
    login.enterUsername('qa_user');
    login.enterPassword('pAss1235');
    login.submit();

   
    cy.get('.has-error > .help-block').should('have.text', "No account found with that username.");
    })
    
})

  describe ("User can't log in without entering username and password", function() {
        it('displays form', function() {
            const login = new Login();
            login.navigate();
            login.submit();

          cy.get(':nth-child(1) > .help-block').should('contain', 'Please enter username.');
          cy.get(':nth-child(2) > .help-block').should('contain', 'Please enter your password.');
        })
      })

      describe ("User can't log in without entering username", function() {
        it('displays form', function() {
            const login = new Login();
            login.navigate(); 
            login.enterPassword('pAss1235');
            login.submit();
        
          cy.get(':nth-child(1) > .help-block').should('contain', 'Please enter username.');
         

        })
      })

      describe ("User can't log in without entering password", function() {
        it('displays form', function() {
            const login = new Login();
            login.navigate();
            login.enterUsername('qa_user');
            login.submit();
    
          cy.get(':nth-child(2) > .help-block').should('contain', 'Please enter your password.');
        })
      })

    describe('User can log in', function() {
        it('displays user page', function() {
            cy.get('.user-page').should('be.visible');
            cy.screenshot('Capturing the screenshot after failing');
        })
    })

  