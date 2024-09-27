const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Novo teste!')
})

app.listen(port, () => {
  console.log(`Servidor rodando na no endereço: http://localhost:${port}`)
})