'use strict'

const uuid = require('uuid')
const axios = require('axios')
const config = require('../../server/config/config')['test']

describe('/api', () => {
  let userId
  before(() => userId = uuid.v4())

  describe('/list', () => {
    context('When the user does NOT have a list', () => {
      let actual

      beforeEach(() => {
        let url = `http://localhost:${config.port}/api/list`
        let headers = { Cookie: `${config.userCookieName}=${userId}` }
        return axios.get(url, { headers }).then(response => actual = response.data)
      })

      it('should return a null list', () => {
        expect(actual).to.be.null
      })
    })
  })
})
