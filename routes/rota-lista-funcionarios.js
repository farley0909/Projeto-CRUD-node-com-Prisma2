const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')



router.get("/inicio/:token", (req, res)=>{
    try {
        if(!(req.params.token)){
            throw new Error("Parametro faltando")
        }
        //res.render(path.join(__dirname, "../views/listaFuncionarios.html"))
      
        res.sendFile(path.join(__dirname, "../views/listaFuncionarios.html"))
    }catch (error) {
        console.log(error)
    }
    
})
module.exports=router