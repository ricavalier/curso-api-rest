import mysql from 'mysql'
const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '3001',
    database: 'bdcopa'
})

conexao.connect()
/**
 * 
 * @param {string} sql instrução SQL
 * @param {scring=id/[selecao, id]} val valores a ser recebido
 * @param {string} msgReject mensagem de erro
 * @returns objeto da promisse
 */
export const consult = (sql, val='', msgReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, val, (err, data) => {
          if(err) return reject(msgReject)
          const row = JSON.parse(JSON.stringify(data))
          return resolve(row)
        })
      })
}

export default conexao