import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";
import { Auth } from "./pages/Auth/Auth";

function App() {
  const [auth, setAuth] = useState(undefined);
  return (
    <ApolloProvider client={client}>
      {!auth ? <Auth /> : <h1>Esta logueado</h1>}
    </ApolloProvider>
  );
}

export default App;
