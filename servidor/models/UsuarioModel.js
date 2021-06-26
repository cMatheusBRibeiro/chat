const conexao = require('../infraestrutura/conexao')
const Usuario = require('../entity/Usuario')
const { createHash } = require('crypto')

class UsuarioModel {

    adicionar(res, dados) {
        dados.senha = createHash('sha256').update(dados.senha).digest('hex')

        let usuario = new Usuario(dados)

        const sql = 'INSERT INTO usuario SET ?'
        conexao.query(sql, usuario.json(), (err, resultados) => {
            if(err) {
                if(err.sqlMessage.startsWith('Duplicate entry')) {
                    res.status(400).send({ message: 'Usuário já existe!' })
                }
            }
            else {
                dados.id = resultados.insertId
                res.status(201).send(new Usuario(dados).json())
            }
        })
    }

    buscar(res, id = null) {
        let sql = 'SELECT * FROM usuario'

        if(id) 
            sql = `${sql} WHERE usr_id = ${id}`
        
        conexao.query(sql, (err, resultados) => {
            if(err) {
                res.status(400).send(err)
            }
            else {
                if(id)
                    resultados = resultados.map(usr => ({
                        id: usr.usr_id,
                        apelido: usr.usr_apelido,
                        login: usr.usr_login,
                        senha: usr.usr_senha
                    }))[0]
                else
                    resultados = resultados.map(usr => ({
                        id: usr.usr_id,
                        apelido: usr.usr_apelido
                    }))

                res.status(200).send((id) ? resultados : resultados)
            }
        })
    }

    atualizar(res, dados) {
        dados.senha = createHash('sha256').update(dados.senha).digest('hex')

        let usuario = new Usuario(dados)

        const sql = 'UPDATE usuario SET ? WHERE usr_id = ?'
        conexao.query(sql, [usuario.json(), usuario.id], (err, resultados) => {
            if(err) {
                if(err.sqlMessage.startsWith('Duplicate entry')) {
                    res.status(400).send({ message: 'Usuário já existe!' })
                }
            }
            else {
                res.status(200).send(new Usuario(dados).json())
            }
        })
    }
}

module.exports = new UsuarioModel()