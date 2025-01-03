const { createServer } = require('http')
const { users } = require('./database')

const getDocument = (id) => {
  const { name } = users.find(user => user.id === Number(id))

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      Hello ${name}!
    </body>
    </html>
  `
}

createServer((req, res) => {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`)

  res.write(getDocument(searchParams.get('id')))
  res.end()
}).listen(3000, () => {
  console.log('application server listening at port 3000')
})

