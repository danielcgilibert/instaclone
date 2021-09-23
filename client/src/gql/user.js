import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation RegisterMutation($registerInput: UserInput) {
    register(input: $registerInput) {
      id
      name
      username
      email
      createAt
    }
  }
`;

export const LOGIN = gql`
  mutation LoginMutation($loginInput: LoginInput) {
    login(input: $loginInput) {
      token
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID, $username: String) {
    getUser(id: $id, username: $username) {
      id
      name
      username
      email
      siteWeb
      description
      password
      avatar
    }
  }
`;
