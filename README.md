<p align="center">
  <img src="./.github/logo.svg" width="300px"/>
</p>

<p align="center">
  <img src="./.github/react.svg">
  <img src="./.github/github.svg">
  <img src="./.github/visual_studio_code.svg">
</p>

# Semana Omnistack 11

**Be The Hero** é uma aplicação que visa conectar ONG's que precisam de ajuda e pessoas dispostas a ajudar. Através da interface web a ONG's cadastra seus dados e adiciona informações sobre os casos. E no app mobile, as pessoas podem entrar em contato com as instituições através de e-mail ou whatsapp.


## ✋🏻 Be The Hero Backend e Mobile 

* [Be The Hero Backend](https://github.com/vitorsemidio-dev/be-the-hero-backend) 
* [Be The Hero Mobile](https://github.com/vitorsemidio-dev/be-the-hero-mobile) 


## 🚀 Como executar o projeto

1. Clone este repositório através do comando `git clone https://github.com/vitorsemidio-dev/be-the-hero-web`
2. Troque para o diretório do projeto
3. Rode `yarn` ou `npm install` para instalar todas as dependências
4. Rode `yarn start` ou `npm start` para iniciar a aplicação


## 🎓 Aprendizado

```
  ├── sqlite
  ├── jest
  ├── celebrate
  └── knex
```

1.  **`sqlite`**: Banco de dados utilizado para armazenar os dados da aplicação. Para criação ou alteração da estrutura da tabelas são utilizados *migrations*

2.  **`knex`**: É um criador de query SQL para alguns banco de dados, como por exemplo: Postgres, MySQL, SQLite3. Possui um design flexível e portável para usá-lo com diferentes bancos.

3.  **`jest`**: É um Framework Web voltado para testes automatizados. Com ele é possível criar vários cenários de testes conforme e necessidade de sua aplicação;

4.  **`celebrate`**: É uma biblioteca que nos permite fazer validações sobre dados que nossas rotas recebem. Validar se os campos necessários foram informados e/ou se estão com a tipagem correta antes de passar para os controllers;