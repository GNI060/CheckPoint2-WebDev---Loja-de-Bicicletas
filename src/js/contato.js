alert("Seja bem vindo ao cadastro de contatos")


let form = document.getElementById("form")

form.addEventListener("submit", function(e){
    e.preventDefault();

    let[nome,email,telefone]=['nome', 'email', 'telefone'].map(name=>
        form.querySelector(`[name=${name}]`).value);
    
    document.getElementById("1").innerHTML=nome;
    document.getElementById("2").innerHTML=email;
    document.getElementById("3").innerHTML=telefone;
        console.log(nome)
})