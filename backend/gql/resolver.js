const userController = require("../controller/user");

const resolvers = {
  Query: {
    // User
    getUser: () => {
      console.log("Obteniendo usuario");
      return null;
    },
  },
  Mutation: {
    // User
    register: async (_, { input }) => userController.register(input),
  },
};

module.exports = resolvers;
