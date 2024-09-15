# Blogs API

<p>Este projeto é uma aplicação web desenvolvida para gerenciar um sistema de blog, permitindo a criação de usuários, categorias e postagens. A aplicação fornece uma API RESTful que permite interação com os dados de forma eficiente e segura.</p>

<h3>Tecnologias Utilizadas</h3>
<ul>
    <li><strong>Node.js:</strong> Ambiente de execução JavaScript no lado do servidor.</li>
    <li><strong>Express:</strong> Framework para construção de aplicações web em Node.js.</li>
    <li><strong>Sequelize:</strong> ORM (Object-Relational Mapping) para interagir com bancos de dados SQL.</li>
    <li><strong>MySQL:</strong> Sistema de gerenciamento de banco de dados relacional utilizado para armazenar dados.</li>
    <li><strong>Docker:</strong> Ferramenta para criar, implantar e executar aplicações em containers, facilitando a configuração do ambiente.</li>
    <li><strong>JWT:</strong> JSON Web Tokens para autenticação e autorização de usuários.</li>
</ul>

<h3>Funcionalidades</h3>
<ul>
    <li><strong>Registro de Usuários:</strong> Permite que novos usuários se registrem no sistema, criando um token JWT para autenticação.</li>
    <li><strong>Login de Usuários:</strong> Permite que usuários existentes façam login utilizando seu email e senha.</li>
    <li><strong>Gerenciamento de Categorias:</strong> Permite a criação e listagem de categorias para organizar postagens.</li>
    <li><strong>Criação de Postagens:</strong> Permite que usuários criem novas postagens associadas a categorias específicas.</li>
    <li><strong>Listagem de Postagens:</strong> Permite visualizar todas as postagens disponíveis no sistema.</li>
    <li><strong>Consulta de Usuários:</strong> Permite a listagem de usuários registrados e a busca de um usuário específico por ID.</li>
</ul>

<h3>Como Usar</h3>
<p>Para utilizar o projeto, siga os seguintes passos:</p>
<ul>
    <li>Clone o repositório em sua máquina local.</li>
    <li>Configure o ambiente Docker para executar o banco de dados MySQL.</li>
    <li>Instale as dependências do projeto utilizando o comando <code>npm install</code>.</li>
    <li>Crie um arquivo <code>.env</code> com as variáveis de ambiente necessárias, incluindo <code>JWT_SECRET</code>.</li>
    <li>Inicie a aplicação com o comando <code>npm start</code>.</li>
</ul>
