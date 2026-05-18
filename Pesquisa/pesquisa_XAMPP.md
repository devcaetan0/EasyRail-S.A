O que é XAMPP:
Basicamente um aplicativo que deixa você criar um domínio web de forma muito fácil com poucos cliques. através de um aplicativo (XAMPP control panel)	
A principal vantagem do XAMPP é de poder criar algo local para principalmente testar mudanças no código sem comprometer o site que está no ar, tendo assim essa instância local como área de teste, além de, poder compartilhar o IP do site para pessoas de fora poderem acompanhar o desenvolvimento do site.


Principais Componentes do XAMPP:

Apache: servidor HTTP
O Apache é o servidor HTTP incluso no XAMPP, responsável por servir páginas web aos navegadores. Ele interpreta e executa arquivos HTML, PHP e outros, respondendo às requisições dos usuários.

MySQL/MariaDB: banco de dados
O XAMPP conta também com o MySQL ou MariaDB como sistema de gerenciamento de banco de dados. Eles armazenam e organizam dados de aplicações web, gerando diferentes operações – como consultas, inserções e atualizações de dados.

PHP: linguagem de programação
O PHP é uma linguagem de programação com foco no desenvolvimento web. No XAMPP, ela é usada para criar scripts dinâmicos que interagem com bancos de dados e geram um conteúdo dinâmico para páginas web.

Perl: linguagem de script
Perl é uma linguagem de script poderosa e versátil e, dentro do XAMPP, usado para automação de tarefas, manipulação de textos e desenvolvimento de aplicações web.

Outros componentes: XAMPP
Além dos principais componentes citados acima, várias outras ferramentas e bibliotecas que auxiliam no desenvolvimento web, como phpMyAdmin (interface gráfica para gerenciamento de bancos de dados MySQL/MariaDB), OpenSSL (para criptografia de dados) e mod_perl (integração do Perl com o Apache), fazem parte do XAMPP.

Esses componentes adicionais ampliam ainda mais as funcionalidades do XAMPP, transformando-o em uma solução completa para desenvolvedores.





Como realizar a instalação e configuração básica?

Primeira Meiramente nos inicializamos instalando o XAMPP pelo site da 

Download XAMPP (apachefriends.org) e instalar a versão 8.0.13 / PHP 8.0.13 

Passo 2: Inicializar os módulos “APACHE” e “MySQL” no painel “Xampp Control Panel” que pode ser acessado dentro da pasta do xampp instalada no computador. Em caso de dúvida, ela está mantida na pasta “Disco Local” do computador. 

Passo 3: Importar o banco de dados do sistema no site do phpMyAdmin pelo link: http://localhost/phpmyadmin Importante: É necessário criar um banco de dados com o mesmo nome do banco do programa (tcc) para que assim seja possível importá-lo dentro do site e não gerar problemas de funcionamento. 
Passo 4: Salvar a pasta TCC na pasta “htdocs” do Xampp. 

Passo 5: No seu navegador, digite na barra de navegação o seguinte link: localhost/tcc/pag.inicial.php

 Passo 6: Navegue no sistema e explore-o! 

A instalação do XAMPP é um dos processos mais simples quando se trata de configurar um ambiente de desenvolvimento local. Mesmo quem não tem experiência avançada consegue realizar todos os passos e poucos minutos.




Instalação de forma mais detalhada:


Tanto baixar quanto instalar essa ferramenta é muito fácil e você vai conseguir fazer sem dificuldade mesmo com pouco conhecimento, desde que a sua máquina atenda aos requisitos citados anteriormente. 
O próximo passo é acessar o site oficial do XAMPP XAMPP Apache + MariaDB + PHP + Perl e baixar a versão compatível com o seu sistema operacional (Windows, macOS ou Linux). 
Durante a instalação, o assistente exibirá a lista de componentes disponíveis, como Apache, MySQL, FileZilla e phpMyAdmin. Você pode selecionar apenas os serviços que realmente pretende utilizar, o que torna o processo ainda mais flexível. 

Nesta etapa você precisa selecionar os componentes do seu servidor web, como banco de dados e linguagem. 

Ainda nesta fase da instalação você vai selecionar a pasta do seu sistema que deseja salvar os arquivos do XAMPP
Por fim, você precisa selecionar a linguagem do sistema que você deseja utilizar. 
Agora é só prosseguir para a instalação apertando NEXT.
E pronto, agora basta esperar a conclusão da instalação, 






Requisitos do sistema para a instalação do XAMPP:



Processador dual-core ou superior, garantindo desempenho estável para rodar os serviços;
Memória RAM de pelo menos 2GB, suficiente para executar Apache, MySQL e demais ferramentas sem travamentos;
Espaço em disco de aproximadamente 700MB para armazenar os arquivos do pacote.
Com esses requisitos, praticamente qualquer computador atual consegue rodar o XAMPP sem dificuldades. Mas, caso algum falte, é provável que a aplicação não funcione. Em alguns casos não é possível nem instalar. 



Importância do ambiente para desenvolvimento local:



O XAMPP tem um grande benefício no ambiente de desenvolvimento completo. Isso significa que ao instalar o pacote, você já tem acesso a todos os recursos necessários para rodar uma aplicação web.

Com o Apache, é possível simular um servidor web real. O MySQL/MariaDB permite gerenciar bancos de dados relacionais. O PHP possibilita criar aplicações dinâmica e, junto ao phpMyAdmin, o gerenciamento de tabelas e consultas fica simples e intuitivo.
Além disso, ferramentas extras como Mercury Mail e FileZilla FTP Server tornam o ambiente ainda mais próximo de um servidor de produção.

Esse conjunto de ferramentas nos ajudam a por exemplo: 

Testar sites antes de publicar online.

Criar e validar integrações com banco de dados.

Rodar scripts PHP sem necessidade de contratar uma hospedagem.

Simular ambientes complexos de desenvolvimento para estudos e treinamentos.

Além da economia, o XAMPP também proporciona segurança, já que o desenvolvedor pode experimentar e cometer erros em um ambiente isolado, sem riscos de afetar usuários reais ou dados sensíveis da suas companhia.


Referências:

TECHTUDO. O que é XAMPP e para que serve. 2012. Disponível em: https://www.techtudo.com.br/noticias/2012/02/o-que-e-xampp-e-para-que-serve.ghtml. Acesso em: 18 maio 2026.

Mercado Online Digital

MERCADO ONLINE DIGITAL. XAMPP: o que é e para que serve. Disponível em: https://mercadoonlinedigital.com/blog/xampp/. Acesso em: 18 maio 2026.

Instituto Federal Farroupilha PDF

INSTITUTO FEDERAL FARROUPILHA. Instruções para instalação e configuração do sistema. Disponível em: https://arandu.iffarroupilha.edu.br/bitstream/itemid/176/2/Instru%C3%A7%C3%B5es%20para%20instala%C3%A7%C3%A3o%20e%20configura%C3%A7%C3%A3o%20do%20sistema_.pdf. Acesso em: 18 maio 2026.

HostGator Brasil

HOSTGATOR BRASIL. O que é XAMPP?. Disponível em: https://www.hostgator.com.br/blog/o-que-e-xampp/. Acesso em: 18 maio 2026.
