"use strict";
module.exports = class Funcionario {
    //Método para o cadastro dos funcionários
    async cadastrar(func) {
        const { PrismaClient } = require('@prisma/client');
        const prisma = new PrismaClient();
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
            await prisma.$disconnect();
        }).catch(async () => {
            await prisma.$disconnect();
            process.exit(1);
        });
    }
    //Método que vai retornar um array com os funcionários cadastrados
    async mostrar() {
        const { PrismaClient } = require('@prisma/client');
        const prisma = new PrismaClient();
        const funcionarios = await prisma.funcionario.findMany();
        return funcionarios;
    }
    //Método que vai receber um cpf e então vai deletar o usuário do banco
    async remover(cpf) {
        const { PrismaClient } = require('@prisma/client');
        const prisma = new PrismaClient();
        const funcionarios = await prisma.funcionario.findMany({
            where: {
                cpf: cpf
            }
        });
        const remove = await prisma.funcionario.delete({
            where: {
                cpf: funcionarios[0].cpf
            }
        });
    }
    async atualizar(func) {
        const { PrismaClient } = require('@prisma/client');
        const prisma = new PrismaClient();
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
        });
    }
};
//# sourceMappingURL=FuncionarioDAO.js.map