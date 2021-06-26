class Usuario {

    _id
    _apelido
    _login
    _senha

    constructor(usuario) {
        this._id = usuario.id
        this._apelido = usuario.apelido
        this._login = usuario.login
        this._senha = usuario.senha
    }

    get id() {
        return this._id
    }

    get apelido() {
        return this._apelido
    }

    get login() {
        return this._login
    }

    get senha() {
        return this._senha
    }

    json() {       

        return {
            usr_id: this.id,
            usr_apelido: this.apelido,
            usr_login: this.login,
            usr_senha: this.senha
        }
    }
}

module.exports = Usuario;