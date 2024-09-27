import express from 'express'
const app = express()

// indicar para ler o corpo como json
app.use(express.json())

//mock
const selecoes = [
    { id: 1, selecao: 'Brasil', grupo: 'G'},
    { id: 2, selecao: 'Suíça', grupo: 'G'},
    { id: 3, selecao: 'Servia', grupo: 'G'},
    { id: 4, selecao: 'Camarões', grupo: 'G'},
]

const buscarSelecaoId = (id) => {
  return selecoes.find(obj => obj.id == id)
}
const buscarIndexSelecao = (id) => {
  return selecoes.findIndex(obj => obj.id == id)
}

app.get('/', (req, res) => {
  res.send('Novo teste!')
})
app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes)
})
app.get('/selecoes/:id', (req, res) => {
  // const index = req.params.id
  res.status(200).json(buscarSelecaoId(req.params.id))
})
app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})
app.delete('/selecoes/:id', (req, res) => {
  const index = buscarIndexSelecao(req.params.id)
  selecoes.splice(index, 1)
  res.status(200).send(`Seleção com id ${res.params.id} foi removida com sucesso!`)
})
app.put('/selecoes/:id', (req, res) => {
  const index = buscarIndexSelecao(req.params.id)
  console.log('selecao', req.body)
  selecoes[index].selecao = req.body.selecao
  selecoes[index].grupo = req.body.grupo
  res.status(200).json(selecoes)
})

export default app
