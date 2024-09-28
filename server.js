import app from './src/app.js'
const port = 3000

import conexao from './infra/conexao.js'
//fazer a conexao
conexao.connect((err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Conexão realizada com sucesso!')
        app.listen(port, () => {
            console.log(`Servidor rodando na no endereço: http://localhost:${port}`)
        })
    }
})
