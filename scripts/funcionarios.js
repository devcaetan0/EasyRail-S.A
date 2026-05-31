let counter = 1;
let tr = document.createElement('tr');

//ADICIONADOR DE FUNCIONÁRIOS
document.getElementById("form-funcionarios").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();//obs: vou apagar essas anotações futuramente, atualmente elas são para estudo
    let setor = document.getElementById("setor").value;//obs: o trim faz pegar os valores tirando os espaços laterais acidentais

    let tbody = document.querySelector('table tbody');

    let lastID; // guarda globalmente o último ID para não ter duplicatas

    let existingIds = Array.from(tbody.querySelectorAll('tr'))
        .map(tr => parseInt(tr.id)); // pega os IDs dos <tr>  
    counter++;
    nextId = counter.toString();

    tr = document.createElement('tr');
    tr.id = nextId;
    tr.innerHTML = `
        <tr id="${nextId}">
            <td id="${nextId}">#${nextId.padStart(5, '0')}</td>
            <td id="${nextId}" class="setor-tr">${setor}</td>
            <td id="${nextId}" class="nome-tr">${nome}</td>
            <td id="${nextId}">
                <button class="editar btn btn-sm btn-outline-secondary" data-bs-toggle="modal"
                    data-bs-target="#modalCadastro" id="${nextId}">✏</button>
                <button class="excluir btn btn-sm btn-outline-danger" id="${nextId}">🗑</button>
            </td>
        </tr>
    `; //padStart 5 faz ter cinco caracteres no total, e sempre zero caso não haja outro número para ser colocado
    tbody.appendChild(tr); //cria o tr já editado na última linha do 'table tbody'

    e.target.reset();
});

document.querySelector('table').addEventListener('click', function (e) {

    let botao = e.target.closest('button');

    if (botao.classList.contains('excluir')) { //apaga o funcionário clicado

        tr = botao.closest('tr');
        if (tr) { tr.remove(); }
        return;

    }

    if (botao.classList.contains('editar')) { //a partir daqui é o editor de funcionário

        let tr = botao.closest('tr');

        if (tr) {
            let setor = tr.querySelector('.setor-tr').textContent;
            let nome = tr.querySelector('.nome-tr').textContent;

            document.getElementById('edit-nome').value = nome;
            document.getElementById('edit-setor').value = setor;
        }
        return;
    }

}); //a ideia é que o editor venha com os items dos ids mais proximos do botao de click, e quando eu crico em submit no botao do editor ele muda os td do id com os dados novos

document.getElementById("form-editor").addEventListener("submit", function (e) {
    e.preventDefault();

    let novoNome = document.getElementById('edit-nome').value.trim();
    let novoSetor = document.getElementById('edit-setor').value.trim();

    tr.querySelector('.nome-tr').textContent = novoNome;
    tr.querySelector('.setor-tr').textContent = novoSetor;

    
})