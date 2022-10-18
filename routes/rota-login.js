const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")
const admDAO = require('../dist/DAO/AdminDAO.js')
const bcrypt = require('bcrypt')
const cors = require('cors')
const cookieParser = require('cookie-parser');
app.use(cookieParser());
//const validaUsuario = require('../util/validaUsuario.js')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

router.post("/login", async (req, res)=>{
    const {usuario, senha}=req.body
    const result = new admDAO(usuario, senha)   
    const dados = await result.buscarDados()
    try {
        await bcrypt.compare(senha, dados[0].senha, async (err, response)=>{
            if(err){
                console.log("erro na função de validação(arquivo: util/validaSenha.js)", err)
               // res.sendStatus(404)
            }
            if(response){
                const token = await result.criarToken()
                res.set({
                    'Authorization': token
                  })
                
                res.redirect("/inicio/"+token)
            }else{
                console.log('caiu aqui')
                res.cookie('hasError', 'true');
                res.redirect('/')
            }
        })
    } catch (error) {
        console.log(error)
    }
  

})

module.exports = router