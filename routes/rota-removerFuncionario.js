const express = require('express')
const path = require('path')
const router = express.Router()
const FuncionarioDAO = require("../dist/DAO/FuncionarioDAO.js")


router.get("/removerFuncionario/:cpf/:token", async (req, res)=>{
    const funcionarioConector = new FuncionarioDAO()
    await funcionarioConector.remover(req.params.cpf)
    res.send("Usuario apagado")

})
module.exports = router