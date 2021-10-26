describe('User is unable to submit an application without captcha', () => {
    it('should load login page', () => {
        cy.visit('https://www.userlane.com/careers/')
    })

    it('should go to open positions', () => {
        cy.xpath('//*[@id="page-7408"]/div[1]/div[1]/section/div/div/div[1]/p[2]/a').click()
        cy.url().should('include', '#careers-at-userlane')
    })

    it('should open job description', function() {
            cy.visit('https://www.userlane.com/careers/#careers-at-userlane')
            cy.xpath('//*[@id="jobs-container"]/div[3]/div[4]/a').invoke('removeAttr', 'target').click()
    })
    it('Click apply button', () => {
        cy.xpath('/html/body/div[3]/div/div[1]/div/div[2]/a').click()
        cy.get('input[name="name"]').type('Pamela')
        cy.get('input[name="email"]').type('email@email.com')
        cy.get('input[name="phone"]').type('1234567890')
        cy.get('input[name="org"]').type('Pamela Inc.')
        cy.get('input[name="urls[LinkedIn]"]').type('linkedin')
        cy.get('input[name="urls[Twitter]"]').type('twitter')
        cy.get('input[name="urls[GitHub]"]').type('github')
        cy.get('input[name="urls[Portfolio]"]').type('portfolio')
        cy.get('input[name="urls[Other]"]').type('others')
        cy.get('input[name="cards[b6003f01-23c3-4880-bdc9-a553b23948a9][field0]"]').type('ASAP')
        cy.get('[type="radio"]').check('Yes').click()
        cy.get('input[name="cards[a84c6739-175e-4233-aeee-8806fce30c87][field0]"]').type('70k')
        cy.get('[id=additional-information]').type('Some comment was added')
        cy.get('input[name="resume"]').attachFile('profile.json');
        cy.get('[type="submit"]').click()
        cy.contains('✱ Please verify that you are not a robot, and reupload any files.').should('be.visible')
    })
        })
    
    
        