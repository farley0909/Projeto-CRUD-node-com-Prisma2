const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")
const FuncionarioDAO = require("../dist/DAO/FuncionarioDAO.js")
const FuncionarioModel = require("../dist/Model/FuncionarioModel.js")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

router.post("/funcionarios/:token", async (req, res)=>{
    const dadosFuncionario= {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        rua:req.body.rua,
        bairro: req.body.bairro,
        numeroCasa:req.body.numCasa,
        telefone: req.body.telefone
    }
    const funcionarioDTO = new FuncionarioModel(dadosFuncionario)
    const funcionarioConector = new FuncionarioDAO()
    await funcionarioConector.cadastrar(funcionarioDTO)
    let token = req.params.token
    res.redirect('/inicio/'+token);
})
module.exports = router