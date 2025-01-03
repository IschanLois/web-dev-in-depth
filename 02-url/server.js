const { createServer } = require('http');
const { readFileSync } = require('fs')

const serveFile = (res, file, headers) => {
  try {
    const content = readFileSync(file, 'utf8')

    for (const key in headers) {
      res.setHeader(key, headers[key])
    }
  
    res.statusCode = 200
    res.write(content)
    res.end()
  } catch (error) {
    console.error(error)
    res.statusCode = 500
    res.write('Internal Server Error')
  }
}

createServer((req, res) => {
  if (req.url === '/path/to/file') {
    serveFile(res, './index.html', { 'Content-Type': 'text/html' })
  } else if (req.url === '/path/to/file2') {
    serveFile(res, './index2.html', { 'Content-Type': 'text/html' })
  }
}).listen(80, () => {
  console.log('server listening at port 80')
})
