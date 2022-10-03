"use strict";
module.exports = class FuncionarioModel {
    constructor(Funcionario) {
        this.nome = Funcionario.nome;
        this.sobrenome = Funcionario.sobrenome;
        this.cpf = Funcionario.cpf;
        this.email = Funcionario.email;
        this.rua = Funcionario.rua;
        this.bairro = Funcionario.bairro;
        this.numeroCasa = Funcionario.numeroCasa;
        this.telefone = Funcionario.telefone;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    get getCpf() {
        return this.cpf;
    }
    set setCpf(cpf) {
        this.cpf = cpf;
    }
    get getEmail() {
        return this.email;
    }
    set setEmail(email) {
        this.email = email;
    }
    get getRua() {
        return this.rua;
    }
    set setRua(rua) {
        this.rua = rua;
    }
    get getBairro() {
        return this.bairro;
    }
    set setBairro(bairro) {
        this.bairro = bairro;
    }
    get getNumeroCasa() {
        return this.numeroCasa;
    }
    set setNumeroCasa(numeroCasa) {
        this.numeroCasa = numeroCasa;
    }
    get getTelefone() {
        return this.telefone;
    }
    set setTelefone(telefone) {
        this.telefone = telefone;
    }
};
//# sourceMappingURL=FuncionarioModel.js.map