import { gql } from 'apollo-server';

export const GreetTypeDefs = gql`
  type Query{
    greet: String
  }

  type Mutation { 
     addGreet: String
  }

`;