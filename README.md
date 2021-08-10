# Curso - GraphQL

### <b>Curso de GraphQL para Iniciantes</b>
Exemplo simples sem integração com banco de dados

### Link:
<a>https://www.youtube.com/watch?v=7RoHxSGVAdU&list=PLPXWI3llyMiK9uw7tfljM2hnQl2qu6CeT&index=1</a>

## Como rodar 
`````
1. yarn install
2. yarn dev
`````
<br>

### Anotações:
* Toda Request GraphQL é POST;
* Toda request bate no MESMO endpoint (/graphql);
* Query -> obter informações (GET);
* Mutation -> manipular dados (POST/PUT/PATCH/DELETE);
* Scalar Types -> string, it, boolean, float e ID;
* Os pontos de "!" em frente ao tipo de dado significa que é obrigatório
* O tipo de dado "ID" é para tipar que é do tipo ID

<br>
<hr>

## Exemplos de QUERY da aula
### Buscando todos usuários - Trazendo apenas o id e nome
`````
query {
  users {
    _id
    name
  }
}
`````
<br>

### Buscando um usuário de email especifico
obs: dentro do retorno você pode passar o que quer retornar do usuário
`````
query {
  getUserByEmail(email: "flavio@test.com") {
    email
    name
  }
}
`````

<br>
<br>

## Exemplos de MUTATION da aula
### Cadastrando um novo usuário:
````
mutation {
  createUser(name: "Gabriel", email: "grabriel@test.com") {
    _id
    email
  }
}
````
