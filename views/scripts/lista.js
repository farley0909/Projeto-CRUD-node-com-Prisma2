async function getFuncionarios(){
 try {
   //Vai começar fazendo uma requisição pra rota onde estão os dados dos funcionarios
    const res = await fetch("http://localhost:8080/dadosFuncionarios")
    const conv = await res.json()
    //vai percorrer o arry de dados dos funcionarios
    for(let k = 0; k<conv.data.length;k++){
      //vai criar um elemento li
        let li = document.createElement("li")
        //Defini a classe comun dos elementos LI
        li.className="list-group-item"
        //Preenche o li com o nome do funcionario
        li.innerHTML=conv.data[k].nome
        //adiciona um evento de click a cada LI
        li.addEventListener("click", ()=>{
         let ulDados = document.getElementById("dadosFunc")
         lisdados = ulDados.childNodes
         for(let k=0; k<lisdados.length;k++){
            lisdados[k].parentNode.removeChild(lisdados[k]);
         
         }
         for(let k=0; k<lisdados.length;k++){
            lisdados[k].parentNode.removeChild(lisdados[k]);
         
         }
         let dados = document.getElementById("dadosFuncionarios").style.display="block"
         //Mostrando o nome do funcionario na box de info
         let liNome = document.createElement("li")
         liNome.className="list-group-item"
         liNome.innerHTML="<strong>Nome: </strong> "+ conv.data[k].nome + " "+ conv.data[k].sobrenome
         ulDados.appendChild(liNome)
         /////////////////////////////////////////////
         let liCpf = document.createElement("li")
         liCpf.className="list-group-item"
         liCpf.innerHTML="<strong>CPF: </strong>"+ conv.data[k].cpf
         ulDados.appendChild(liCpf)
        ///////////////////////////////////////////
        let liEmail = document.createElement("li")
        liEmail.className="list-group-item"
        liEmail.innerHTML="<strong>Email: </strong>"+ conv.data[k].email
        ulDados.appendChild(liEmail)
         //quando clicado um li vai pegar todos os lis da pagina
         let ul = document.getElementById("listaFuncionarios")
         let lis = ul.childNodes
         //Em seguida vai percorrer todos os lis da pagina mudando seu background e cor de texto para o formato padrão da página 
         
         for(let k=1;k<lis.length;k++){
            lis[k].style.color="black"
            lis[k].style.backgroundColor="white"
         }
         //por fim ele vai mudar a cor da letra e fundo apenas do li que foi clickado
          li.style.backgroundColor="#0D6EFD"
          li.style.color="white"       
        })
        //por ultimo ele vai inserir esse li dentro da ul
        document.getElementById("listaFuncionarios").appendChild(li)
    }

 } catch (error) {
    document.location.reload(true);
 }
   
}
getFuncionarios()

// Pegando o botão de remover
const btnRemover = document.getElementById("remover")

//Adicionando um evento de click ao botão
btnRemover.addEventListener("click", async ()=>{
   let lis = document.getElementsByTagName("li")
   for(let k=0; k<lis.length;k++){
      if(lis[k].style.color=="white"){
         let nome = lis[k].innerHTML
         const req = await fetch(`http://localhost:8080/removerFuncionario/${nome}`);
         alert("Funcionário apagado")
      }
   
   }
   for(let k=0; k<lis.length;k++){
      lis[k].parentNode.removeChild(lis[k]);
   
   }
   for(let k=0; k<lis.length;k++){
      lis[k].parentNode.removeChild(lis[k]);
   
   }
   let dados = document.getElementById("dadosFuncionarios").style.display="none"
   getFuncionarios()
})

