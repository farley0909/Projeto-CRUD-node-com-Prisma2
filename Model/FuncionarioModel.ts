

module.exports = class FuncionarioModel{
    private nome:string
    private sobrenome:string
    private cpf:string
    private email:string
    private rua:string
    private bairro:string
    private numeroCasa:string
    private telefone:string

    constructor(Funcionario:any){
        this.nome = Funcionario.nome
        this.sobrenome = Funcionario.sobrenome
        this.cpf = Funcionario.cpf
        this.email = Funcionario.email
        this.rua = Funcionario.rua
        this.bairro = Funcionario.bairro
        this.numeroCasa = Funcionario.numeroCasa
        this.telefone = Funcionario.telefone
    }
    get  getNome() {
        return this.nome;
    }

    set setNome(nome:string) {
        this.nome = nome;
    }

    get  getCpf() {
        return this.cpf;
    }

    set  setCpf( cpf:string) {
        this.cpf = cpf;
    }

    get  getEmail() {
        return this.email;
    }

    set  setEmail(email:string) {
        this.email = email;
    }

    get  getRua() {
        return this.rua;
    }

    set setRua(rua:string) {
        this.rua = rua;
    }

    get getBairro() {
        return this.bairro;
    }

    set setBairro(bairro:string) {
        this.bairro = bairro;
    }

    get getNumeroCasa() {
        return this.numeroCasa;
    }

    set setNumeroCasa(numeroCasa:string) {
        this.numeroCasa = numeroCasa;
    }

    get  getTelefone() {
        return this.telefone;
    }

    set setTelefone(telefone:string) {
        this.telefone = telefone;
    }

}