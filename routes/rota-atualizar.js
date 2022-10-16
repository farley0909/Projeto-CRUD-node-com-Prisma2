const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser');

const router = express.Router()
const FuncionarioDAO = require("../dist/DAO/FuncionarioDAO.js")
const FuncionarioModel = require("../dist/Model/FuncionarioModel.js")
router.use(cookieParser());
router.post("/atualizar/:token", async (req, res)=>{
    const func = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        bairro: req.body.bairro,
        rua: req.body.rua,
        numeroCasa: req.body.numCasa
    }
    const funcionarioDTO = new FuncionarioModel(func)
    new FuncionarioDAO().atualizar(funcionarioDTO)
    let token = req.params.token
    res.cookie('hasToReload', 'true');
    res.redirect('/inicio/'+token);
   
   
})
module.exports = router