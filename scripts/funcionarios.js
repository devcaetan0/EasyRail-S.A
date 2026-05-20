document.getElementById("form-funcionarios").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let setor = document.getElementById("setor").value;

    const tbody = document.querySelector('table tbody');

    const existingIds = Array.from(tbody.querySelectorAll('tr'))
        .map(tr => parseInt(tr.id, 10) || 0);
    const nextId = (Math.max(0, ...existingIds) + 1).toString();

    const tr = document.createElement('tr');
    tr.id = nextId;
    tr.innerHTML = `
        <td>#${nextId.padStart(5, '0')}</td>
        <td>${setor}</td>
        <td>${nome}</td>
        <td>
            <button class="editar btn btn-sm btn-outline-secondary" id="${nextId}">✏</button>
            <button class="excluir btn btn-sm btn-outline-danger" id="${nextId}">🗑</button>
        </td>
    `;
    tbody.appendChild(tr);

    e.target.reset();
});

const tabela = document.querySelector('table');
if (tabela) {
    tabela.addEventListener('click', function (e) {
        const botao = e.target.closest('button');

        if (botao.classList.contains('excluir')) {
            const tr = botao.closest('tr');
            if (tr) {
                tr.remove();
            }
            return;
        }

    });
}

//TODO: fazer a edição dos dados
//TODO: fazer o id mais alto continuar salvo mesmo depois de deletado