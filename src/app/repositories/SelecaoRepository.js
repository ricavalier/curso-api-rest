import {consult} from "../database/conexao.js"
class SelecaoRepository {
  create(selecao) {
    const sql = 'INSERT INTO selecoes SET ?;'
    return consult(sql, selecao, 'Não foi possível cadastrar!')
  }
  findAll() {
    const sql = 'SELECT * FROM selecoes;'
    return consult(sql, 'Não foi possível localizar!')
  }
  findById(id) {
    const sql = 'SELECT * FROM selecoes WHERE id=?;'
    return consult(sql, id, 'Não foi possível localizar!')
  }
  update(selecao, id) {
    const sql = 'UPDATE selecoes SET ? WHERE id=?;'
    return consult(sql, [selecao, id], 'Não foi possível alterar!')
  }
  delete(id) {
    const sql = 'DELETE FROM selecoes WHERE id=?;'
    return consult(sql, id, 'Não foi possível apagar!')
  }
}
export default new SelecaoRepository()
