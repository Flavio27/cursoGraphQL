const { ApolloServer, gql } = require("apollo-server");

// Toda Request GraphQL é POST
// Toda request bate no MESMO endpoint (/graphql)

// Query -> obter informações (GET)
// Mutation -> manipular dados (POST/PUT/PATCH/DELETE)
// Scalar Types -> string, it, boolean, float e ID

// Os pontos de "!" em frente ao tipo de dado significa que é obrigatório
// o tipo de dado "ID" é para tipar que é do tipo ID

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    hello: String
    users: [User!]!
    getUserByEmail(email: String!): User!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`;

const users = [
  { _id: String(Math.random()), name: "Flavio 1", email: "email1@flaviorocha.com", active: true},
  { _id: String(Math.random()), name: "Flavio 2", email: "email2@flaviorocha.com", active: true},
  { _id: String(Math.random()),name: "Flavio 3",email: "email3@flaviorocha.com", active: true},
];

const resolvers = {
  Query: {
    hello: () => "Hello World! ",
    users: () => users,
    getUserByEmail: (_, args) => {
      return users.find((user) => user.email === args.email);
      },
    },

    // Mutation: criando um novo usuário 
    Mutation: {
      createUser: (_, args) => {
        const newUser = {
          _id: String(Math.random()),
          name: args.name,
          email: args.email,
          active: true
        };
        users.push(newUser)
        return newUser;
      } 
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server started at ${url}`));
