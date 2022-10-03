const path = require("path")
const bodyParser = require("body-parser")
const express = require("express")
const FuncionarioDAO = require("./dist/DAO/FuncionarioDAO.js")
const FuncionarioModel = require("./dist/Model/FuncionarioModel.js")
const admModel = require("./dist/Model/AdminModel.js") 
const bcrypt = require('bcrypt')
const admDAO = require("./dist/DAO/AdminDAO.js")
const app = express()
//Configurando o bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//Definindo onde os arquivos estaticos vão ficar
app.use(express.static(path.join(__dirname, "views")))              
//Definindo a rota raiz
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/login.html"))
})
app.post("/login", async (req, res)=>{
    const result = new admDAO(req.body.usuario, req.body.senha)
    const dados = await result.buscarDados()
    try {
        await bcrypt.compare(result.getSenha, dados[0].senha, (err, response)=>{
            if(err){
                console.log("erro na função")
            }
            if(response){
                res.redirect("/inicio")
            }else{
                res.redirect('/')
            }
        })
    }catch (error) {
        res.redirect('/')
    }
   

})
app.get("/inicio", (req, res)=>{
    res.sendFile(path.join(__dirname,"./views/listaFuncionarios.html"))
})
app.get("/atualizarCadastro/:nome", async (req, res)=>{
    res.sendFile(path.join(__dirname, "views/atualizar.html"))
})
//rota post
app.post("/funcionarios",async (req, res)=>{
    const dadosFuncionario= {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        rua:req.body.rua,
        bairro: req.body.bairro,
        numeroCasa:req.body.numCasa,
        telefone: req.body.telefone
    }
    const funcionarioDTO = new FuncionarioModel(dadosFuncionario)
    const funcionarioConector = new FuncionarioDAO()
    await funcionarioConector.cadastrar(funcionarioDTO)
    res.redirect('/');
})
app.get("/cadastroFuncionario", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/cadastroFuncionario.html"))
})
app.get("/removerFuncionario/:cpf", async (req, res)=>{
    const funcionarioConector = new FuncionarioDAO()
    await funcionarioConector.remover(req.params.cpf)
    res.send("Usuario apagado")

})
app.get("/dadosFuncionarios", async (req, res)=>{
    const funcionario =new  FuncionarioDAO()
    const data = {
        data: await funcionario.mostrar()
    }
    res.json(data)
})
app.post("/atualizar", async (req, res)=>{
    const func = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        bairro: req.body.bairro,
        rua: req.body.rua,
        numeroCasa: req.body.numCasa
    }
    const funcionarioDTO = new FuncionarioModel(func)
    new FuncionarioDAO().atualizar(funcionarioDTO)
    res.redirect('/');
   
   
})
app.listen(8080, console.log("Rodando..."))
