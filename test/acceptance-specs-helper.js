'use strict'

const LocalService = require('./local-service')

const localService = new LocalService('./server.js')

before(() => {
  return localService.start()
})

after(() => {
  return localService.kill()
})
