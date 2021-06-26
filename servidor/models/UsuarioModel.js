const conexao = require('../infraestrutura/conexao')
const Usuario = require('../entity/Usuario')

class UsuarioModel {

    buscar(res, id = null) {
        let sql

        if (id) {
            sql = `SELECT * FROM usuario WHERE usr_id = ${id}`
        }
        else {
            sql = 'SELECT * FROM usuario'
        }

        let usuarios = []
        
        this.query(sql, (err, resultados) => {
            if (err) {
                res.status(400).send(err)
            }
            else {
                res.status(200).send(resultados.map(usr => ({
                        id: usr.usr_id,
                        apelido: usr.usr_apelido
                    })))
            }
        })

        return usuarios
    }

    adicionar(dados) {
        let usuario = new Usuario(dados)

        const sql = 'INSERT INTO usuario SET ?'
        
        this.query(sql, usuario.toJSON(), (err, resultados) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(resultados)
            }
        })
    }

    query(sql, func, dados = []) {
        conexao.query(sql, dados, func)
    }
}

module.exports = new UsuarioModel()