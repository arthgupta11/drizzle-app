import { gql } from 'apollo-server';

export const UserTypeDefs = gql`
 type User{
   id: Int
   username : String
   age : Int
   password: String
   posts: [Post]
   updated_at : String
   deleted_at : String
   created_at : String
 }  

 type Post{
     id: Int
     title: String
     description : String
     comments: [Comment]
     updated_at : String
    deleted_at : String
    created_at : String
 }

  type Comment{
     id: Int
     description : String
     updated_at : String
    deleted_at : String
    created_at : String
 }

 type Query{
    getUsers: [User]
    getUserById ( id : Int) : [User]
  }

  type Mutation { 
     addGreet: String
  }

`;