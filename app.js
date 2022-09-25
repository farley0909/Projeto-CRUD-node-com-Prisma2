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
    res.sendFile(path.join(__dirname, "views/cadastroFuncionario.html"))
})
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
   await  getDadosFuncionarios(funcionario)
    res.sendFile(path.join(__dirname, "/views/listaFuncionarios.html")) 
})
app.get("/removerFuncionario/:nome", async (req, res)=>{
    const funcionario = new Funcionario()
    console.log("Esse que vai ser apagado: ", req.params.nome)
    await funcionario.remover(req.params.nome)
    res.send("Usuario apagado")

})
function getDadosFuncionarios(funcionario){
   app.get("/dadosFuncionarios", async (req, res)=>{
    const data = {
        data: await funcionario.mostrar()
    }
    console.log(data)
    return res.json(data)
   })
}

app.listen(8080, console.log("Rodando..."))