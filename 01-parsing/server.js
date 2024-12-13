const { createServer } = require('http');
const { readFileSync } = require('fs')

const includeCss = !process.argv.includes('--no-css')

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
  if (req.url === '/') {
    serveFile(res, './index.html', { 'Content-Type': 'text/html' })
    console.log('get html')
  }

  if (req.url === '/styles.css') {
    if (!includeCss) {
      res.end()
      console.log('no css')
      return
    }

    serveFile(res, './styles.css', { 'Content-Type': 'text/css' })
    console.log('get css')
  }
}).listen(3000, () => {
  console.log(`server listening at port 3000 ${includeCss ? 'with css' : 'without css'}`)
})
