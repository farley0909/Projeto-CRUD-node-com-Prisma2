module.exports=class AdminDAO{
    private senha:string
    private usuario:string

    constructor(usuario:string, senha:string){
        this.senha = senha
        this.usuario= usuario

    }
   async buscarDados(){
        const { PrismaClient } = require('@prisma/client')
        const prisma = new PrismaClient()
        const result = await prisma.admin.findMany({
            where:{
                usuario:this.usuario
            }
        })
        return result;
    }
    get getSenha(){
        return this.senha
    }
    get getUsuario(){
        return this.usuario
    }


}