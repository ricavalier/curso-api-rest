import express from 'express'
const app = express()

//mock
const selecoes = [
    { id: 1, selecao: 'Brasil', grupo: 'G'},
    { id: 2, selecao: 'Suíça', grupo: 'G'},
    { id: 3, selecao: 'Servia', grupo: 'G'},
    { id: 4, selecao: 'Camarões', grupo: 'G'},
]

app.get('/', (req, res) => {
  res.send('Novo teste!')
})
app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes)
})

export default app
