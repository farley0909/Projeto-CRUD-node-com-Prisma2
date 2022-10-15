$("#usuario").mask("999.999.999-99");

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