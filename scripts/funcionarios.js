let counter = 1;

document.getElementById("form-funcionarios").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim(); //obs: vou apagar essas anotações futuramente, atualmente elas são para estudo
    let senha = document.getElementById("senha").value.trim(); //obs: o trim faz pegar os valores tirando os espaços laterais acidentais
    let setor = document.getElementById("setor").value;

    let tbody = document.querySelector('table tbody');

    let lastID; // guarda globalmente o último ID para não ter duplicatas

    let existingIds = Array.from(tbody.querySelectorAll('tr'))
        .map(tr => parseInt(tr.id)); // pega os IDs dos <tr>  
//    let nextId = (Math.max(0, ...existingIds) + 1).toString(); //armazena o maior ID disponível

    counter++;
    nextId = counter.toString();

    let tr = document.createElement('tr');
    tr.id = nextId;
    tr.innerHTML = `
        <td>#${nextId.padStart(5, '0')}</td>
        <td>${setor}</td>
        <td>${nome}</td>
        <td>
            <button class="editar btn btn-sm btn-outline-secondary" id="${nextId}">✏</button>
            <button class="excluir btn btn-sm btn-outline-danger" id="${nextId}">🗑</button>
        </td>
    `; //padStart 5 faz ter cinco caracteres no total, e sempre zero caso não haja outro número para ser colocado
    tbody.appendChild(tr); //cria o tr já editado na última linha do 'table tbody'

    e.target.reset();
});

let tabela = document.querySelector('table');
if (tabela) {
    tabela.addEventListener('click', function (e) {
        let botao = e.target.closest('button');

        if (botao.classList.contains('excluir')) {
            let tr = botao.closest('tr');
            if (tr) {
                tr.remove();
            }
            return;
        }

                if (botao.classList.contains('editar')) {
            let tr = botao.closest('tr');
            if (tr) {

  let tbody = document.querySelector('table tbody');

    let existingIds = Array.from(tbody.querySelectorAll('tr'))
        .map(tr => parseInt(tr.id, 10) || 0);
    let nextId = (Math.max(0, ...existingIds) + 1).toString();

    let tr = document.createElement('tr');
    tr.id = nextId;
    tr.innerHTML = `
            <div class="modal fade" id="modalCadastro" tabindex="-1" aria-labelledby="modalCadastroLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content text-start">
                        <div class="modal-header">
                            <h5 class="modal-title fw-bold" id="modalCadastroLabel">Cadastrar Novo Sensor</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="form-sensor">
                                <div class="mb-3">
                                    <label for="id-sensor" class="form-label fw-bold">ID do Sensor</label>
                                    <input type="text" class="form-control" id="id-sensor" required>
                                </div>
                                <div class="mb-3">
                                    <label for="setor-sensor" class="form-label fw-bold">Localização</label>
                                    <input type="text" class="form-control" id="setor-sensor" required>
                                </div>
                                <div class="mb-3">
                                    <label for="nome-sensor" class="form-label fw-bold">Nome</label>
                                    <input type="text" class="form-control" id="nome-sensor" required>
                                </div>
                                <div class="mb-3">
                                    <label class="fw-bold form-label">Tipo</label>
                                    <select class="form-select">
                                        <option>Selecionar</option>
                                        <option>Temperatura</option>
                                        <option>Velocidade</option>
                                        <option>Energia</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer justify-content-between">
                            <button type="button" class="btn btn-secondary fw-bold"
                                data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-laranja" id="btn-salvar">Salvar Sensor</button>
                        </div>
                    </div>
                </div>
            </div>
    `;
    tbody.appendChild(tr);

    e.target.reset();

            }
            return;
        }

    });
}

//TODO: fazer a edição dos dados
//TODO: fazer o id mais alto continuar salvo mesmo depois de deletado