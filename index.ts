import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
module.exports = class Funcionario{
  
    constructor(){
        

    }
    async cadastrar(func: any){
        await prisma.funcionario.create({
            data: {
                nome: func.nome,
                sobrenome: func.sobrenome,
                email: func.email,
                cpf: func.cpf,
                rua: func.rua,
                bairro: func.bairro,
                telefone: func.telefone,
                numeroCasa: func.numeroCasa
            }
        }).then(async () => {
            console.log("Funcionário cadastrado!")
            await prisma.$disconnect()
          }) .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
          })
          
    }
   async mostrar(){
        const funcionarios = await prisma.funcionario.findMany()
        return funcionarios
    

   }
   async remover(nome: any){
    const funcionarios = await prisma.funcionario.findMany({
      where:{
        nome: nome
      }
    })
    const remove = await prisma.funcionario.delete({
      where:{
        cpf:funcionarios[0].cpf
      }
    })
    console.log("Esse usuário foi deletado", remove)
   }

   async atualizar(func: any){
    const atualizar = await prisma.funcionario.update({
      where: { email: func.email },
      data: { 
        nome: func.nome,
        sobrenome: func.sobrenome,
        cpf: func.cpf,
        numeroCasa: func.numeroCasa,
        bairro: func.bairro,
        rua: func.rua,
      
      }
    })
    console.log("atualizado: ", atualizar)
   }
   
    
    /*main()
   
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })*/
}


