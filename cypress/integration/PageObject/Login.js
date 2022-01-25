class Login {
   
    navigate(){
        cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
        cy.get('.wrapper').should('be.visible');
    }

    enterUsername(username){
        cy.get(':nth-child(1) > .form-control').clear();
        cy.get(':nth-child(1) > .form-control').type(username);
        return this;
    }

    enterPassword(psswd){
        cy.get(':nth-child(2) > .form-control').clear();
        cy.get(':nth-child(2) > .form-control').type(psswd);
        return this;
    }
   
    submit(){
        cy.get('.btn').click();
    }
}

export default Login;