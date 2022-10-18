const express = require('express')
const cors = require('cors');
const path = require('path')
const router = express.Router()
const FuncionarioDAO = require("../dist/DAO/FuncionarioDAO.js")

router.get("/dadosFuncionarios/:token", async (req, res)=>{
    const funcionario =new  FuncionarioDAO()
    const data = {
        data: await funcionario.mostrar()
    }
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    res.json(data)
})
module.exports = router