
describe('Automation API Reqres.in', () => {
  
    it('1. GET - List Users', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=2')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.not.be.null
      })
  })

    it('3. GET - Single User', () => {
    cy.request('GET', 'https://reqres.in/api/users/2')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.data).to.have.property('id', 2)
      })
  })

    it('3. GET - Single User Not Found', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users/23',
      failOnStatusCode: false
    }).then((response) => {
      expect([401, 404]).to.include(response.status)
    })
  })

    it('4. POST - Create User', () => {
    cy.request('POST', 'https://reqres.in/api/users', {
      name: 'Ali',
      job: 'Tester'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name', 'Ali')
      expect(response.body).to.have.property('job', 'Tester')
      
    })
  })

    it('5. PUT - Update User', () => {
    cy.request('PUT', 'https://reqres.in/api/users/2', {
      name: 'Ali',
      job: 'QA Engineer'
    }).then((response) => {
      expect(response.body).to.have.property('job', 'QA Engineer')
      expect(response.status).to.eq(200)
    })
  })

    it('6. PATCH - Update User', () => {
    cy.request('PATCH', 'https://reqres.in/api/users/2', {
      job: 'Lead QA'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('job', 'Lead QA')
      
    })
  })

    it('7. DELETE - User', () => {
    cy.request('DELETE', 'https://reqres.in/api/users/2')
      .then((response) => {
       expect(response.status).to.eq(200)
      })
  })


});
