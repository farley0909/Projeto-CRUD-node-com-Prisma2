const bcrypt = require("bcrypt")
module.exports=class AdminModel{
    private usuario:string
    private senha!: string 
    
    constructor(usuario:string, senha:string){
        this.usuario=usuario
        this.senha=senha
        this.adicionaSenha(senha)
    }
    get getUsuario(){
        return this.usuario
    }

    get getSenha(){
        return this.senha
    }
    set setUsuario(usuario:string){
        this.usuario = usuario
    }
    set setSenha(senha:string){
        this.senha = senha
    }
    async senhaHash(senha:string){
        return await bcrypt.hash(senha, 12)
    }
    async adicionaSenha(senha:string){
        this.senha = await this.senhaHash(senha)
        console.log(this.senha)
  
    }
}