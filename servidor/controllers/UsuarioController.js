const UsuarioModel = require('../models/UsuarioModel')

module.exports = app => {
    app.get('/usuario', (req, res) => UsuarioModel.buscar(res))
    app.get('/usuario/:id', (req, res) => UsuarioModel.buscar(res, req.params.id))
    app.post('/usuario', (req, res) => UsuarioModel.adicionar(res, req.body))
    app.put('/usuario', (req, res) => UsuarioModel.atualizar(res, req.body))
}