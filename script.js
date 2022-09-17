let novaSenha = "";

function GeradordeSenhas(){
    let password = document.getElementById("password");
    let conteinerPassword = document.querySelector("#conteiner-password");
    let senhaGerada = "!@&0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"

    let pass = "";

    for(let i = 0; i < 10; i++ ){
        pass+= senhaGerada.charAt(Math.floor(Math.random() * senhaGerada.length));
    }

    conteinerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
    console.log(novaSenha);
}

function copiarSenha(){
    
    navigator.clipboard.writeText(novaSenha);
}

