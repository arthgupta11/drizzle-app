import { getUsersByIdController, getUsersController } from "./controllers/usersControler";

export const resolvers = {
    Query: {
        getUsers : getUsersController,
        getUserById : getUsersByIdController
    },
    Mutation: {
      addGreet: () : string => {
        return 'added';
      }
    }
};