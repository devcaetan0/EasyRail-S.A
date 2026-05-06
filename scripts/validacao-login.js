document.getElementById("form-login").addEventListener("submit", function(e) {

e.preventDefault()

let usuario = document.getElementById("usuario-login").value
let senha = document.getElementById("senha-login").value

if (usuario !== "a") return alert("Usuário ou senha incorretos")
if (senha !== "1") return alert("Usuário ou senha incorretos")
return window.location.href = "secao.html"
})