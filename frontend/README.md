# Projeto Integrador - CRUD de Produtos, Fornecedores e Associação

Este projeto foi desenvolvido como parte da disciplina **Projeto Integrador** da **Faculdade Gran**.

Trata-se de uma aplicação completa para cadastro, gestão e associação de produtos e fornecedores, utilizando tecnologias modernas de desenvolvimento web.

## 🚀 Tecnologias Utilizadas

- **Frontend**: 
  - React.js (Create React App)
  - Axios (requisições HTTP)
  - React Router DOM (roteamento)
  - React Hook Form (formulários)
- **Backend**:
  - Node.js
  - Express.js
  - SQLite (banco de dados leve e simples)
  - CORS e Body-Parser

## 🎯 Funcionalidades Implementadas

- **Cadastro de Produtos** (nome, descrição, preço e código de barras)
- **Cadastro de Fornecedores** (nome, CNPJ, endereço e contato)
- **Associação de Produtos com Fornecedores** (relação muitos para muitos)
- **Listagem, criação, edição e exclusão** de produtos e fornecedores
- **Navegação entre páginas** utilizando React Router
- **Validação de formulários** com React Hook Form

## 📂 Estrutura do Projeto

```
/backend
  server.js
  database.js
  /routes
    products.js
    suppliers.js
    associations.js

/frontend
  package.json
  src/
    App.js
    index.js
    /pages
      ProductsPage.js
      SuppliersPage.js
      AssociationsPage.js
```

## 🛠️ Como Rodar o Projeto Localmente

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Rodar o Backend
```bash
cd backend
npm install
npm start
```
> O servidor será iniciado na porta **5000**: http://localhost:5000

### 3. Rodar o Frontend
```bash
cd frontend
npm install
npm start
```
> A aplicação React estará disponível na porta **3000**: http://localhost:3000

---

# 📢 Observação

- O projeto foi desenvolvido para ambiente de desenvolvimento local.
- O banco de dados utilizado é o **SQLite**, criado automaticamente no backend (`database.db`).

---

# 🎓 Faculdade Gran

[https://faculdade.grancursosonline.com.br/](https://faculdade.grancursosonline.com.br/)

---