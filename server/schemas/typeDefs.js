const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Comment {
    _id: ID
    writtenBy: String
    commentBody: String
    createdAt: String
    }

  type TShirt {
    _id: ID
    title: String
    brand: String
    description: String
    createdBy: String
    createdAt: String
    comments: [Comment]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    user(username: String!): User
    tshirt(createdBy: String!): TShirt
    tshirts: [TShirt]
  }

  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;