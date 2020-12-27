const app = require('express')();
const apiRouter = require('./routes/apiRouter')

const { PORT = 9090 } = process.env

app.use('/api', apiRouter)

app.listen(PORT,() => {
  console.log(`Listening on port ${PORT}`)
})

module.exports = app