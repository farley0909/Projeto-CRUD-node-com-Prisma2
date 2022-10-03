"use strict";
const bcrypt = require("bcrypt");
module.exports = class AdminModel {
    constructor(usuario, senha) {
        this.usuario = usuario;
        this.senha = senha;
        this.adicionaSenha(senha);
    }
    get getUsuario() {
        return this.usuario;
    }
    get getSenha() {
        return this.senha;
    }
    set setUsuario(usuario) {
        this.usuario = usuario;
    }
    set setSenha(senha) {
        this.senha = senha;
    }
    async senhaHash(senha) {
        return await bcrypt.hash(senha, 12);
    }
    async adicionaSenha(senha) {
        this.senha = await this.senhaHash(senha);
        console.log(this.senha);
    }
};
//# sourceMappingURL=AdminModel.js.map