describe('Second Case', () => {
    it('Visit site and log in', () => {
        cy.visit('http://localhost:3000/')
        cy.wait(1000)
        cy.get('[id="login1"]').type('ADMIN').should('have.value', 'ADMIN')
        cy.wait(1000)
        cy.get('[id="login2"]').type('ADMIN').should('have.value', 'ADMIN')
        cy.wait(1000)
        cy.get('[class="login-button"]').click()
        cy.wait(1000)
    })
    it('Edit profile', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('#prped').click()
        cy.wait(1000)
        cy.get('.profile-button2').click()
        cy.wait(1000)
        cy.get('[id="name"]').type('Василий').should('have.value', 'Василий')
        cy.wait(1000)
        cy.get('[id="middle_name"]').type('Васильевич').should('have.value', 'Васильевич')
        cy.wait(1000)
        cy.get('[id="last_name"]').type('Пупкин').should('have.value', 'Пупкин')
        cy.wait(1000)
        cy.get('[id="pass"]').type('123').should('have.value', '123')
        cy.wait(1000)
        cy.get(':nth-child(2) > .profile-button2').click()
        cy.wait(1000)
    })
    it('Add new student', () => {
        cy.get('[id="clruk"]').click()
        cy.wait(1000)
        cy.get('.student-list')  // get the containing toolbar
            .find('img[src*="https://i.ibb.co/4mZtQCb/user-student-add.png"]')     // *= gives a partial match on src
            .click()
        cy.wait(1000)
        cy.get('[id="createStudentName"]').type('Пупкин').should('have.value', 'Пупкин')
        cy.wait(1000)
        cy.get('[id="createStudentFIO"]').type('Пупкин Василий Васильевич').should('have.value', 'Пупкин Василий Васильевич')
        cy.wait(1000)
        cy.get('[id="clSex"]').select('0')
        cy.wait(1000)
        cy.get('[id="createStudentPFDO"]').type('some certificate').should('have.value', 'some certificate')
        cy.wait(1000)
        cy.get(':nth-child(5) > .profile-button2').click()
        cy.wait(1000)
    })
    it('Create new event', () => {
        cy.get('[id="vrab"]').click()
        cy.wait(1000)
        cy.get('.ListSt')  // get the containing toolbar
            .find('img[src*="https://i.ibb.co/Tbth16X/add.png"]')     // *= gives a partial match on src
            .click()
        cy.wait(1000)
        cy.get('.displayFlex > :nth-child(1) > :nth-child(10)').click()
        cy.wait(1000)
        cy.get(':nth-child(11)').click()
        cy.wait(1000)
    })
})