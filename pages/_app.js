import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

import Navbar from "../components/navbar";
import { AuthContext } from "../utils/AuthContext";
// import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{token, setToken}}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthContext.Provider>
  );
}

export default MyApp;
