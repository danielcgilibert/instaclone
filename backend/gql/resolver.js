const userController = require("../controller/user");

const resolvers = {
  Query: {
    // User
    getUser: () => userController.getUser,
  },
  Mutation: {
    // User
    register: (_, { input }) => userController.register(input),
    login: (_, { input }) => userController.login(input),
  },
};

module.exports = resolvers;
