const conexao = require('../infraestrutura/conexao')
const Usuario = require('../entity/Usuario')

class UsuarioModel {

    buscar(res, id = null) {
        let sql = 'SELECT * FROM usuario'

        if(id) 
            sql = `${sql} WHERE usr_id = ${id}`
        
        conexao.query(sql, (err, resultados) => {
            if(err) {
                res.status(400).send(err)
            }
            else {
                resultados = resultados.map(usr => ({
                    id: usr.usr_id,
                    apelido: usr.usr_apelido
                }))

                res.status(200).send((id) ? resultados[0] : resultados)
            }
        })
    }

    adicionar(dados) {
        let usuario = new Usuario(dados)

        const sql = 'INSERT INTO usuario SET ?'
        conexao.query(sql, usuario.toJSON(), (err, resultados) => {
            if(err) {
                console.log(err)
            }
            else {
                console.log(resultados)
            }
        })
    }
}

module.exports = new UsuarioModel()