import { getUsersController } from "./controllers/usersControler";

export const resolvers = {
    Query: {
        greet: () : string => {
            return 'hello';
        },

        getUsers : getUsersController
    },
    Mutation: {
      addGreet: () : string => {
        return 'added';
      }
    }
};