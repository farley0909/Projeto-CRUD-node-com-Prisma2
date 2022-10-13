const express = require('express')
const path = require('path')
const router = express.Router()

router.get("/cadastroFuncionario/:token", (req, res)=>{
    res.sendFile(path.join(__dirname, "../views/cadastroFuncionario.html"))
})
module.exports = router