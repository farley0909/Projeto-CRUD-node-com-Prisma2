const express = require('express')
const path = require('path')
const router = express.Router()


router.get("/atualizarCadastro/:cpf/:token", async (req, res)=>{
    res.sendFile(path.join(__dirname, "../views/atualizar.html"))
})

module.exports = router