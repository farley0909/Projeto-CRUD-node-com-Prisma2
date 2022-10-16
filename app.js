require('dotenv').config()
const path = require("path")
const bodyParser = require("body-parser")
const express = require("express")
const login = require('./routes/rota-login.js') 
const home = require('./routes/rota-home.js') 
const funcionarios = require('./routes/rota-funcionarios.js') 
const lista = require('./routes/rota-lista-funcionarios.js') 
const atualizarCadastro =  require('./routes/rota-atualizarCadastro.js') 
const cadastroFuncionario = require('./routes/rota-cadastroFuncionario.js') 
const removerFuncionario =require('./routes/rota-removerFuncionario.js')  
const dadosFuncionarios = require('./routes/rota-dadosFuncionario.js')  
const atualizar = require('./routes/rota-atualizar.js')  
const app = express()
//Configurando o bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//Definindo onde os arquivos estaticos vão ficar
app.use(express.static(path.join(__dirname, '/views')))              
//Rotas
app.use(home)
app.use(login)
app.use(funcionarios)
app.use(lista)
app.use(atualizarCadastro)
app.use(cadastroFuncionario)
app.use(removerFuncionario)
app.use(dadosFuncionarios)
app.use(atualizar)
app.listen(8080, console.log("Rodando..."))
