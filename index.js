'use strict'

var fs = require('fs'),
  path = require('path'),
  http = require('http'),
  cors = require('cors')

var app = require('connect')()
var swaggerTools = require('swagger-tools')
var jsyaml = require('js-yaml')
var serverPort = 5465

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, 'server//swagger.json'),
  controllers: path.join(__dirname, 'server/./controllers'),
  useStubs: process.env.NODE_ENV === 'development', // Conditionally turn on stubs (mock mode)
}

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(
  path.join(__dirname, 'server/api/swagger.yaml'),
  'utf8'
)
var swaggerDoc = jsyaml.safeLoad(spec)

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function(middleware) {
  app.use(cors())

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata())

  // Validate Swagger requests
  app.use(middleware.swaggerValidator())

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options))

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi())

  // Start the server
  http.createServer(app).listen(serverPort, function() {
    console.log(
      'Your server is listening on port %d (http://localhost:%d)',
      serverPort,
      serverPort
    )
    console.log(
      'Swagger-ui is available on http://localhost:%d/docs',
      serverPort
    )
  })
})

const express = require('express')
const favicon = require('express-favicon')
const port = process.env.PORT || 8080
const staticApp = express()

staticApp.use(favicon(__dirname + '/build/favicon.ico'))

// the __dirname is the current directory from where the script is running
staticApp.use(express.static(__dirname))
staticApp.use(express.static(path.join(__dirname, 'build')))
staticApp.get('/ping', function(req, res) {
  return res.send('pong')
})

staticApp.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

staticApp.listen(port, () => {
  console.log(`Static server running in port ${port}`)
})
