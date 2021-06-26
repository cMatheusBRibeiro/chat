const UsuarioModel = require('../models/UsuarioModel')

module.exports = app => {
    app.get('/usuario', (req, res) => {
        UsuarioModel.buscar(res)
    })
    app.get('/usuario/:id', (req, res) => {
        UsuarioModel.buscar(res, req.params.id)
    })
    app.post('/usuario', (req, res) => {

        UsuarioModel.adiciona(req.body)

        res.send('Você está cadastrando um usuário')
    })
}