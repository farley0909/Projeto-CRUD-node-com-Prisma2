const express = require('express')
const path = require('path')
const router = express.Router()
const FuncionarioDAO = require("../dist/DAO/FuncionarioDAO.js")


router.get("/dadosFuncionarios/:token", async (req, res)=>{
    const funcionario =new  FuncionarioDAO()
    const data = {
        data: await funcionario.mostrar()
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.json(data)
})
module.exports = router