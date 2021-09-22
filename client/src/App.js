import React, { useState, useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import client from "./config/apollo";
import { Auth } from "./pages/Auth/Auth";
import { getToken } from "./utils/token";

function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setAuth(null);
    } else {
      setAuth(token);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      {!auth ? <Auth /> : <h1>Esta logueado</h1>}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ApolloProvider>
  );
}

export default App;
