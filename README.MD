# ⚽ Simulador do Campeonato Brasileiro - Série A

## 📖 Sobre o Projeto

Este é um projeto web full-stack criado como um exercício prático para desenvolver e aprimorar habilidades em desenvolvimento de software. A aplicação permite ao usuário simular os resultados de todas as 380 partidas do Campeonato Brasileiro, calculando e atualizando a tabela de classificação em tempo real.

O sistema foi construído do zero, abrangendo desde a criação e modelagem do banco de dados, passando pelo desenvolvimento de uma API REST no backend, até a construção de uma interface de usuário interativa e reativa no frontend.

---

## ✨ Funcionalidades Principais

-   **Tabela de Classificação Dinâmica:** A tabela é recalculada instantaneamente a cada placar inserido.
-   **Navegação por Rodadas:** O usuário pode navegar entre as 38 rodadas do campeonato para inserir os resultados.
-   **Cálculo Completo:** Calcula pontos, jogos, vitórias, empates, derrotas, saldo de gols e gols pró.
-   **Zonas de Classificação:** As posições na tabela são coloridas para indicar as zonas de Libertadores, Pré-Libertadores, Sul-Americana e Rebaixamento, com legenda.
-   **Arquitetura Full-Stack:** Completa separação entre o frontend (React), o backend (Node.js) e o banco de dados (MariaDB/MySQL).

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

-   **Frontend:**
    -   [**React.js**](https://reactjs.org/) (com [**Vite**](https://vitejs.dev/))
    -   JavaScript (ES6+)
    -   CSS3 para estilização

-   **Backend:**
    -   [**Node.js**](https://nodejs.org/)
    -   [**Express.js**](https://expressjs.com/) para a criação da API REST
    -   **CORS** para gerenciamento de permissões de acesso

-   **Banco de Dados:**
    -   [**MariaDB**](https://mariadb.org/) (totalmente compatível com [**MySQL**](https://www.mysql.com/))

---

## 🔧 Como Executar o Projeto Localmente

Siga os passos abaixo para configurar e rodar o projeto na sua máquina.

### Pré-requisitos

Antes de começar, garanta que você tenha instalado:
* [Node.js](https://nodejs.org/en/download/) (versão 16 ou superior)
* [MariaDB Server](https://mariadb.org/download/) (ou MySQL Server)
* [Git](https://git-scm.com/downloads/)

---
### Passo a Passo

**1. Clone o Repositório**

```bash
git clonehttps://github.com/MurilooMiranda/Simulador-Campeonato-Brasileiro
cd Simulador-Campeonato-Brasileiro
````

**2. Configure o Banco de Dados**

O projeto precisa de um banco de dados MariaDB/MySQL para funcionar.

  * **Acesse seu cliente de banco de dados** como usuário `root`:

    ```bash
    sudo mariadb -u root -p
    ```

  * **Crie o banco de dados e o usuário** para a aplicação (substitua `'senha_forte_aqui'` por uma senha segura):

    ```sql
    CREATE DATABASE brasileirao_system;
    CREATE USER 'simulador_user'@'localhost' IDENTIFIED BY 'senha_forte_aqui';
    GRANT ALL PRIVILEGES ON brasileirao_system.* TO 'simulador_user'@'localhost';
    FLUSH PRIVILEGES;
    EXIT;
    ```

  * **Popule o banco de dados:** Se você criou um arquivo `database.sql` no seu backend, pode populá-lo com o comando abaixo, executado de dentro da pasta `brasileirao-backend`:

    ```bash
    mariadb -u simulador_user -p brasileirao_system < database.sql
    ```

    *(Será solicitada a senha que você acabou de criar)*.

**3. Configure e Rode o Backend**

O backend é o servidor que se conecta ao banco de dados e serve os dados para o frontend.

  * **Navegue para a pasta do backend:**

    ```bash
    cd backend
    ```

  * **Instale as dependências:**

    ```bash
    npm install
    ```

  * **Rode o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

    O backend estará rodando em `http://localhost:3001`.

**4. Configure e Rode o Frontend**

O frontend é a interface visual com a qual o usuário interage.

  * **Abra um novo terminal** e navegue para a pasta do frontend:

    ```bash
    # A partir da pasta raiz do projeto
    cd frontend
    ```

  * **Instale as dependências:**

    ```bash
    npm install
    ```

  * **Rode o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

    O frontend estará rodando em `http://localhost:5173` (ou outra porta indicada pelo Vite).

**5. Acesse a Aplicação**

Abra seu navegador e acesse a URL fornecida pelo Vite para o frontend (geralmente `http://localhost:5173`). Pronto\! O simulador estará funcionando em sua máquina.

-----

## 🏗️ Estrutura do Projeto

A estrutura de pastas foi organizada para separar claramente as responsabilidades do backend e do frontend.

```
.
├── brasileirao-backend/        # Pasta do servidor Node.js
│   ├── node_modules/
│   ├── index.js                # Arquivo principal do servidor Express
│   └── package.json
│
└── brasileirao-frontend/       # Pasta da aplicação React
    ├── public/
    ├── src/
    │   ├── assets/             # Imagens e outros arquivos estáticos
    │   ├── components/         # Componentes React (Tabela, ListaJogos)
    │   ├── utils/              # Funções auxiliares (cálculo da tabela)
    │   ├── App.jsx             # Componente principal
    │   └── main.jsx            # Ponto de entrada da aplicação
    └── package.json
```
#### **OBSERVAÇÃO IMPORTANTE:** Essa é uma simulação apenas para aprendizado. Ela não possui os times e partidas reais do Campeonato Brasileiro de 2025.
