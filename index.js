'use strict'

const fs = require('fs'),
  path = require('path'),
  http = require('http'),
  cors = require('cors'),
  serveStatic = require('serve-static')

const app = require('connect')()
const swaggerTools = require('swagger-tools')
const jsyaml = require('js-yaml')
const port = process.env.PORT || 8080

// swaggerRouter configuration
const options = {
  swaggerUi: path.join(__dirname, 'server//swagger.json'),
  controllers: path.join(__dirname, 'server/./controllers'),
  useStubs: process.env.NODE_ENV === 'development', // Conditionally turn on stubs (mock mode)
}

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
const spec = fs.readFileSync(
  path.join(__dirname, 'server/api/swagger.yaml'),
  'utf8'
)
const swaggerDoc = jsyaml.safeLoad(spec)

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function(middleware) {
  app.use(cors())

  app.use((req, res, next) => {
    const isApi = req.url.match(/^\/api/g)

    const serve = serveStatic('./build', { index: ['/index.html'] })

    if (isApi) {
      next()
    } else {
      const isStatic = req.url.match(/^\/static/g)
      const isData = req.url.match(/^\/data/g)

      if (isStatic || isData) {
        serve(req, res, next)
      } else {
        const stream = fs.createReadStream(
          path.join(__dirname, '/build/index.html')
        )
        stream.on('error', function() {
          res.writeHead(404)
          res.end()
        })
        stream.pipe(res)
      }
    }
  })

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata())

  // Validate Swagger requests
  app.use(middleware.swaggerValidator())

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options))

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi())

  // Start the server
  http.createServer(app).listen(port, function() {
    console.log(
      'Your server is listening on port %d (http://localhost:%d)',
      port,
      port
    )
    console.log('Swagger-ui is available on http://localhost:%d/docs', port)
  })
})
