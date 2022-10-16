$("#usuario").mask("999.999.999-99");
if(document.cookie){
    let res = (document.cookie).split("=")
    if(res[1]/*.split('=')[1]*/=== 'true'){
        document.getElementById("senha").classList.add("is-invalid")
        document.getElementById("usuario").classList.add("is-invalid")
    
        var data = new Date(2010,0,01);
        data = data.toGMTString();
        // Apaga o cookie
        document.cookie = 'hasError=; expires=' + data + '; path=/';
       // document.cookie = 'hasToReload=; expires=' + data + '; path=/';
    }
    
}
let btn = document.getElementById("entrar")
btn.addEventListener('click', ()=>{

   let span =document.getElementById("loading")
    btn.innerHTML="Loading..."
})
/*
<button class="btn btn-primary" type="button" disabled>
<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>

</button>
*/