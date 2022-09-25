const path = require("path")
const bodyParser = require("body-parser")
const express = require("express")
const Funcionario = require("./dist/index.js")
const app = express()
//Configurando o bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//Definindo onde os arquivos estaticos vão ficar
app.use(express.static(path.join(__dirname, "views")))              
//Definindo a rota raiz
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/listaFuncionarios.html"))
})
app.get("/atualizarCadastro/:nome", async (req, res)=>{
    res.sendFile(path.join(__dirname, "views/atualizar.html"))
})
//rota post
app.post("/funcionarios",async (req, res)=>{
    const func = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        rua:req.body.rua,
        bairro: req.body.bairro,
        numeroCasa:req.body.numCasa,
        telefone: req.body.telefone
    }
    const funcionario = new Funcionario()
    await funcionario.cadastrar(func)
    res.redirect('/');
})
app.get("/cadastroFuncionario", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/cadastroFuncionario.html"))
})
app.get("/removerFuncionario/:nome", async (req, res)=>{
    const funcionario = new Funcionario()
    console.log("Esse que vai ser apagado: ", req.params.nome)
    await funcionario.remover(req.params.nome)
    res.send("Usuario apagado")

})
app.get("/dadosFuncionarios", async (req, res)=>{
    const funcionario =new  Funcionario()
    const data = {
        data: await funcionario.mostrar()
    }
    res.json(data)
})
app.post("/atualizar", async (req, res)=>{
    let response = await fetch("http://localhost:8080/dadosFuncionarios")
    let conv = await response.json()
    for(let k = 0; k<conv.data.length; k++){
        if(conv.data[k].nome == req.body.nome){

            const email = conv.data[k].email
            const func = {
                nome: req.body.nome,
                sobrenome: req.body.sobrenome,
                cpf: req.body.cpf,
                email: email,
                bairro: req.body.bairro,
                rua: req.body.rua,
                numeroCasa: req.body.numeroCasa
            }
            const funcionario = new Funcionario()
            console.log(func)
            funcionario.atualizar(func)
            res.redirect('/');
        }
    }
   
   
})

app.listen(8080, console.log("Rodando..."))