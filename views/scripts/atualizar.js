$("#cpf").mask("999.999.999-99");
$("#crm").mask("99999");
$("#sexo").mask("a");
$("#telefone").mask("(99) 9 9999 - 9999");

$("#data_nascimento").mask("99/99/9999");

let path = location.pathname
let patheSeparado = path.split("/")
cpf = patheSeparado[2]
console.log(cpf)
let token = localStorage.getItem('token')
let form =  document.getElementById("formAtualizar")

form.action="/atualizar/"+token
async function getDados(cpf){
    
    let response = await fetch("http://localhost:8080/dadosFuncionarios/"+token)
    let conv = await response.json()
    for(let k = 0; k<conv.data.length; k++){
        if(conv.data[k].cpf == cpf){

            let nome = document.getElementById("nome").value=""+conv.data[k].nome
            let sobrenome = document.getElementById("sobrenome").value=""+conv.data[k].sobrenome
            let cpf = document.getElementById("cpf").value=""+conv.data[k].cpf
            let telefone = document.getElementById("telefone").value=""+conv.data[k].telefone
            let email = document.getElementById("email").value=""+conv.data[k].email
            let rua = document.getElementById("rua").value=""+conv.data[k].rua
            let bairro = document.getElementById("bairro").value=""+conv.data[k].bairro
            let numCasa = document.getElementById("numCasa").value=""+conv.data[k].numeroCasa
        }
    }
    
}
getDados(cpf)