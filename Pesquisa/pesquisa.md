CRUD em PHP


O que é Crud:


O Crud vem do inglês, das palavras (Create, Read, Update, Delete) que quer dizer basicamente as 4 principais operações com um banco de dados que é inserir, ler, atualizar e excluir. 

Quando pensamos em qualquer site ou sistemas em gerais, a primeira coisa que vem na nossa cabeça é o CRUD, sem ele nada funciona, pois é com ele que realizamos as interações com o banco de dados.

Então o CRUD em php permite criar, ler, atualizar e excluir dados em um banco MySQL, usando os comandos SQL como o insert, select, update e delete. A estrutura básica envolve arquivos para conexão (config.php), listagem (index.php), formulários de cadastro/edição e scripts de processamento de ações.

O CRUD abrange tanto sistemas de gerenciamento de Banco de Dados relacionais e não relacionais.


Os principais componentes fundamentais de um CRUP PHP

Conexão (config.php): Estabelece a ligação com o banco de dados.

Listagem (index.php): Exibe os registros usando SELECT.

Criação (create.php): Formulário que envia dados para um script PHP executar o INSERT.

Atualização (edit.php): Preenche um formulário com dados existentes para alteração via UPDATE

Exclusão (delete.php): Remove registros da tabela utilizando o DELETE.







Create:

A primeira operação CREATE serve para adicionar um novo registro a um banco de dados. No Banco de Dados relacional, uma linha de uma tabela é chamada de registro, enquanto as colunas são chamadas de atributos ou campos. A operação CREATE adiciona um ou mais novos registros com valores de campo distintos em uma tabela. 

A mesma ideia se aplica aos banco de dados NOSQL. Se o banco de dados NOSQL for orientado a documentos, um novo documento é adicionado á coleção, o que equivale a uma tabela em um SBGD relacional. Em sumo então o CREATE adiciona um item equivalente a um registro uma tabela.


Read:

A operação READ retorna registros de uma tabela de um banco de dados com base em determinados critérios de pesquisa. A operação READ pode retornar todos os registros e alguns ou todos os campos. É o comando SELECT do banco de dados.



Update:

O comando UPDATE é usado para modificar registros existentes no banco de dados. Por exemplo, isso pode ser um alteração de endereço em um banco de dados de clientes ou uma alteração ou de preço em um banco de dados de produtos. Bem parecido com o comando READ, o comando UPDATE pode ser aplicado a todos os registros ou apenas a alguns, com base em critérios específicos.

Uma operação UPDATE pode modificar e persistir alterações em um único campo ou em vários campos do registro. Se vários campos precisarem ser atualizados, o sistema de banco de dados garante que todos sejam atualizados ou que nenhum seja. 









Delete:

As operações DELETE permitem ao usuário remover registros do banco de dados. Uma exclusão permanente, remove o registro completamente, enquanto uma remoção temporária sinaliza o registro, mas mantém no banco de dados. Isso se aplica por exemplo numa folha de pagamento, onde os registros de emprego precisam ser mantidos mesmo depois que um funcionário deixa a empresa.








Como estas operações serão aplicadas no contexto do projeto

As operações serão aplicadas em basicamente todas as áreas do nosso projeto. O create será utilizado para criar diversos registros quando forem criadas as contas das pessoas dentro do website, como registrar os nomes do usuário e suas senhas, também utilizaremos quando forem cadastrados os sensores e também os dados dos sensores, como a distância que o trem está percorrendo e etc…

Quando um sensor detecta as locomotivas os dados são processados em tempo real e é sempre preciso procurar/ ler estes dados para estudo e análise então utilizaremos muito o comando READ para isto.

 E então com os dados sendo processados em tempo real nós precisamos atualizar sempre os dados novos que são processados, novos problemas, problemas nos trens, as variáveis de dados, em resumo o desempenho do trem e para atualizar este dados utilizaremos o comando UPDATE, no projeto.

O comando DELETE nos utilizaremos para deletar os registros, como uma pessoa que foi desligada da empresa que não tem mais ao acesso do dashboard, um trem que estragou e nao tem mais concerto então deletamos os seus dados, um sensor que entrou em falha e nao tem concerto apagamos seu registro e entre outras situações que utilizaremos o delete.
