document.getElementById("cadastro").addEventListener("submit", function(e) {

e.preventDefault()

let usuario = document.getElementById("usuario").value
let senha = document.getElementById("senha").value
let email = document.getElementById("email").value

if (usuario.length == 0) return alert("O campo usuário deve estar preenchido")
if (senha.length == 0) return alert("O campo senha deve estar preenchido")
if (usuario !== "admin") return alert("Usuário ou senha incorretos")
if (senha !== "1234") return alert("Usuário ou senha incorretos")
if (!email.includes('@')) return alert("Email inválido")
return window.location.href = "secao.html"
})