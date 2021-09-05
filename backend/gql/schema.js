const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: id
    name: String
    username: String
  }

  type Query {
    # User
    getUser: User
  }
`;

module.exports = typeDefs;
