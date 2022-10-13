$("#usuario").mask("999.999.999-99");




btn = document.getElementById("entrar")
btn.addEventListener('click', async ()=>{
    let login = document.getElementById("formLogin")
    let inputUsuario = document.getElementById("usuario")
    let inputSenha = document.getElementById("senha")
    const form = new FormData(login);
    

   const  data={usuario: inputUsuario.value,senha: inputSenha.value}
    const opt = { 
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    try {
        const res = await fetch('http://localhost:8080/login', opt)
        conv = await res.json()
        localStorage.setItem('token', conv.token);
        location.href=`http://localhost:8080/inicio/${conv.token}`

    } catch (error) {
        let inputUsuario = document.getElementById("usuario")
        let inputSenha = document.getElementById("senha")
        inputUsuario.classList.add('is-invalid')
        inputSenha.classList.add('is-invalid')
        inputUsuario.focus()
    }
    

})