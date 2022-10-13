const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")
const admDAO = require('../dist/DAO/AdminDAO.js')
const bcrypt = require('bcrypt')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

router.post("/login", async (req, res)=>{
    const {usuario, senha}=req.body
    const result = new admDAO(usuario, senha)   
    const dados = await result.buscarDados()
    try {
        await bcrypt.compare(result.getSenha, dados[0].senha, async (err, response)=>{
            if(err){
                console.log("erro na função")
               // res.sendStatus(404)
            }
            if(response){
                const token = await result.criarToken()
                res.set('Content-type', 'application/json')
                res.set('statusCode', 204)
                res.json({token:token})
               }else{
                res.redirect('/')
            }
        })
    }catch (error) {
        res.redirect('/')
    }
   

})
module.exports = router