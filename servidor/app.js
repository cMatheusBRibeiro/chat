const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')

conexao.connect(err => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('Conectado com sucesso')

        const port = 3000
        const app = customExpress()
        
        app.listen(port, () => console.log('Servidor está rodando na porta ' + port))
    }
})