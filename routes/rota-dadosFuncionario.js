const express = require('express')
const cors = require('cors');
const path = require('path')
const router = express.Router()
const FuncionarioDAO = require("../dist/DAO/FuncionarioDAO.js")
router.use(cors())

router.get("/dadosFuncionarios/:token", async (req, res)=>{
    const funcionario =new  FuncionarioDAO()
    const data = {
        data: await funcionario.mostrar()
    }
    res.json(data)
})
module.exports = router