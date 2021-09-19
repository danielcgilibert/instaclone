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
