
module.exports = class Funcionario{
  private prisma = require('./factory')
  //Método para o cadastro dos funcionários
  async cadastrar(func: any){
  
    await this.prisma.funcionario.create({
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
    })
    await this.prisma.$disconnect()
          
  }
  //Método que vai retornar um array com os funcionários cadastrados
  async mostrar(){
    const funcionarios = await this.prisma.funcionario.findMany()
    await this.prisma.$disconnect()
    return funcionarios
    
  }
  //Método que vai receber um cpf e então vai deletar o usuário do banco
  async remover(cpf:string){

    const funcionarios = await this.prisma.funcionario.findMany({
      where:{
        cpf: cpf
      }
    })
    const remove = await this.prisma.funcionario.delete({
      where:{
        cpf:funcionarios[0].cpf
      }
    })
    await this.prisma.$disconnect()
   }

   async atualizar(func: any){
    const atualizar = await this.prisma.funcionario.update({
      where: { cpf: func.cpf },
      data: { 
        nome: func.nome,
        sobrenome: func.sobrenome,
        email: func.email,
        numeroCasa: func.numeroCasa,
        bairro: func.bairro,
        rua: func.rua,
      
      }
    })
    await this.prisma.$disconnect()
   }
   
    
    /*main()
   
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })*/
}


