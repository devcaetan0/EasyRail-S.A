document.getElementById("form-login").addEventListener("submit", function(e) {

e.preventDefault()

let usuario = document.getElementById("usuario-login").value
let senha = document.getElementById("senha-login").value

return alert("adasdsdadsads")
if (usuario.length == 0) return alert("O campo usuário deve estar preenchido")
if (senha.length == 0) return alert("O campo senha deve estar preenchido")
if (usuario !== "a") return alert("Usuário ou senha incorretos")
if (senha !== "1") return alert("Usuário ou senha incorretos")
return window.location.href = "secao.html"
})