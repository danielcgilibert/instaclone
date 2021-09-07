const User = require("../models/user");

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
    register: async (_, { input }) => {
      console.log(input);
      const newUser = input;
      newUser.email = newUser.email.toLowerCase();
      newUser.username = newUser.username.toLowerCase();

      const { email, username, password } = newUser;

      // Revisar si el email esta en uso
      const foundEmail = await User.findOne({ email });
      if (foundEmail) throw new Error("El email ya esta en uso");

      // Revisar si el usuario esta en uso
      const foundUsername = await User.findOne({ username });
      if (foundUsername) throw new Error("El usuario ya esta en uso");

      //Encriptar
      //.....

      try {
        const user = new User(newUser);
        user.save();
        return user;
      } catch (error) {
        console.log(error);
      }

      return null;
    },
  },
};

module.exports = resolvers;
