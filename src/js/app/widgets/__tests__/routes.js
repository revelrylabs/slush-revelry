import express from 'express'
import routes from '../routes'

describe('widgets: routes', () => {
  let app = null

  before(() => {
    app = express()
  })

  it('can be mounted into an express app', () => {
    app.use('/widgets', routes)
  })
})
