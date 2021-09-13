const userController = require("../controller/user");

const resolvers = {
  Query: {
    // User
    getUser: () => userController.getUser,
  },
  Mutation: {
    // User
    register: async (_, { input }) => userController.register(input),
  },
};

module.exports = resolvers;
