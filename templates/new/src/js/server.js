import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import {renderJson, renderHtml} from 'setup/renderServer'
import router from 'setup/router'
import renderServiceRouter from 'setup/renderServiceRouter'
import {PORT} from 'config/server'

const app = express()

// Express configuration and middlewares
app.use(express.static('dist/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Router path for JSON-only representation of views
app.use('/jsonui', renderJson)
app.use('/jsonui', router)

// All other router paths use fully-rendered views
app.use(renderHtml)
app.use('/__RENDER__', renderServiceRouter)
app.use(router)

// Turn it into an HTTP server
http.createServer(app).listen(PORT)
console.log(`Server is listening on ${PORT}`)
