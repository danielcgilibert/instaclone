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
    register: (_, { input }) => {
      console.log("Registrando Usuarios");
      console.log(input);
      return null;
    },
  },
};

module.exports = resolvers;
