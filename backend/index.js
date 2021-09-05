const mongose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");
require("dotenv").config({ path: ".env" });

mongose.connect(process.env.BBDD, {}, (err, res) => {
  if (err) {
    console.log("Error de conexions");
  } else {
    server();
  }
});

function server() {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers,
  });

  serverApollo.listen().then(({ url }) => {
    console.log("___________________________________");
    console.log(`Servidor ON en ${url}`);
    console.log("___________________________________");
  });
}
