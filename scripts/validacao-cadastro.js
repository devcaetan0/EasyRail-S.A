let cadastro = false;


let form = document.getElementById('form-cadastro');

form.addEventListener('submit', function(e){


    e.preventDefault();


    let valido = true;

    let nome = document.getElementById('nome').value;
    let senha = document.getElementById('senha').value;
    let email = document.getElementById('email').value;
    let setor = document.getElementById('setor').value;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

    if(nome ===  "" || senha === ""  || email === "" || setor === "" ){
        mensagem.innerHTML = "<div class = 'erro' <p> Prencha todos os campos! </p> </div>";
        return;
    }

    


    
document.getElementById("form-login").reset();

        
})