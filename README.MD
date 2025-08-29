# ⚽ Simulador do Campeonato Brasileiro - Série A

## 📖 Sobre o Projeto

Este é um projeto web full-stack criado como um exercício prático para desenvolver e aprimorar habilidades em desenvolvimento de software. A aplicação permite ao usuário simular os resultados de todas as 380 partidas do Campeonato Brasileiro, calculando e atualizando a tabela de classificação em tempo real.

O sistema foi construído do zero, abrangendo desde a criação e modelagem do banco de dados, passando pelo desenvolvimento de uma API REST no backend, até a construção de uma interface de usuário interativa e reativa no frontend.

---

## ✨ Funcionalidades Principais

-   **Tabela de Classificação Dinâmica:** A tabela é recalculada instantaneamente a cada placar inserido.
-   **Navegação por Rodadas:** O usuário pode navegar entre as 38 rodadas do campeonato para inserir os resultados.
-   **Cálculo Completo:** Calcula pontos, jogos, vitórias, empates, derrotas, saldo de gols e gols pró.
-   **Zonas de Classificação:** As posições na tabela são coloridas para indicar as zonas de Libertadores, Pré-Libertadores, Sul-Americana e Rebaixamento.
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

-   [Node.js](https://nodejs.org/en/download/) (versão 16 ou superior)
-   [MariaDB Server](https://mariadb.org/download/) ou MySQL Server
-   Um cliente de linha de comando para o banco de dados (ou uma GUI como o DBeaver)

### Passo a Passo

**1. Clone o Repositório**
```bash
git clone https://github.com/MurilooMiranda/Simulador-Campeonato-Brasileiro.git
cd Simulador-Campeonato-Brasileiro