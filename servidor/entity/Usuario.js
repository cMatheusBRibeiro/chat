class Usuario {

    constructor(usuario) {
        this.usr_apelido = usuario.apelido
        this.usr_login = usuario.login
        this.usr_senha = usuario.senha
    }

    toJSON() {
        
        return {
            usr_apelido: this.usr_apelido,
            usr_login: this.usr_login,
            usr_senha: this.usr_senha
        }
    }
}

module.exports = Usuario;