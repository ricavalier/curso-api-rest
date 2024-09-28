import express from 'express'
import conexao from '../infra/conexao.js'
const app = express()

// indicar para ler o corpo como json
app.use(express.json())

const buscarSelecaoId = (id) => {
  return selecoes.find(obj => obj.id == id)
}
const buscarIndexSelecao = (id) => {
  return selecoes.findIndex(obj => obj.id == id)
}

//ROTAS 
app.get('/selecoes', (req, res) => {
  const sql = 'SELECT * FROM selecoes;'
  conexao.query(sql, (err, data) => {
    if(err) {
      console.log(err)
      res.status(404).json({ 'error': err})
    } else {
      res.status(200).send(data)
    }
  })
})
app.get('/selecoes/:id', (req, res) => {
  // res.status(200).json(buscarSelecaoId(req.params.id))
  const id = req.params.id
  const sql = 'SELECT * FROM selecoes WHERE id=?;'
  conexao.query(sql, id, (err, data) => {
    if(err) {
      console.log(err)
      res.status(404).json({ 'error': err})
    } else {
      const item = data[0]
      res.status(200).send(item)
    }
  })
})
app.post('/selecoes', (req, res) => {
    // selecoes.push(req.body)
    // res.status(201).send('Seleção cadastrada com sucesso!')
    const selecao = req.body
    const sql = 'INSERT INTO selecoes SET ?;'
    conexao.query(sql, selecao, (err, data) => {
      if(err) {
        console.log(err)
        res.status(400).json({ 'error': err})
      } else {
        res.status(201).send(data)
      }
    })
})
app.delete('/selecoes/:id', (req, res) => {
  // const index = buscarIndexSelecao(req.params.id)
  // selecoes.splice(index, 1)
  // res.status(200).send(`Seleção com id ${res.params.id} foi removida com sucesso!`)
  const id = req.params.id
  const sql = 'DELETE FROM selecoes WHERE id=?;'
  conexao.query(sql, id, (err, data) => {
    if(err) {
      console.log(err)
      res.status(404).json({ 'error': err})
    } else {
      res.status(200).send(data)
    }
  })
})
app.put('/selecoes/:id', (req, res) => {
  // const index = buscarIndexSelecao(req.params.id)
  // selecoes[index].selecao = req.body.selecao
  // selecoes[index].grupo = req.body.grupo
  // res.status(200).json(selecoes)
  const id = req.params.id
  const selecao = req.body
  const sql = 'UPDATE selecoes SET ? WHERE id=?;'
  conexao.query(sql, [selecao, id], (err, data) => {
    if(err) {
      console.log(err)
      res.status(400).json({ 'error': err})
    } else {
      res.status(200).send(data)
    }
  })
})

export default app
