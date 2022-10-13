module.exports=class AdminDAO{
    private senha:string
    private usuario:string
    jwt = require('jsonwebtoken')

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
        await prisma.$disconnect()
        return result;
    }
    get getSenha(){
        return this.senha
    }
    get getUsuario(){
        return this.usuario
    }
    async criarToken(){
        const res = await this.buscarDados()
         const payload={
             id: res[0].id
         }
        const token =  this.jwt.sign(payload, process.env.JWT_SECRET)
        return token
     }

}