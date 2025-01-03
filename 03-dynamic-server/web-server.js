const { createServer, request } = require('http')

createServer((req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`)

  if (pathname == '/landing' && req.method === 'GET') {
    const options = {
      hostname: 'localhost',
      port: 3000,
      method: 'GET',
      path: req.url,
    }

    res.setHeader('Content-Type', 'text/html')

    request(options, (response) => {
      response.on('data', (chunk) => res.write(chunk))
      response.on('end', () => {
        res.statusCode = 200
        res.end()
      })
    }).end()
  }
}).listen(80, () => {
  console.log('web server listening at port 80')
})
