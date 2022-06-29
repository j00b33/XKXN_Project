import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createContext, useEffect, useState } from "react";
import Layout from "../src/commons/layout";
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";
import "../styles/globals.css";

export const GlobalContext = createContext(
  {
    loggedin: false,
    setLoggedin: (_: any) => {},
  }
  // { accessToken: "" ,
  // setAccessToken: (_: any) => {} }
);

export default function MyApp({ Component, pageProps }) {
  const [loggedin, setLoggedin] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
  };

  // useEffect(() => {
  //   getAccessToken().then((newAccessToken) => {
  //     setAccessToken(newAccessToken);
  //   });
  // }, []);

  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql", // << API 주소
    // headers: { authorization: `Bearer ${userLogin}` },
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <GlobalContext.Provider value={{ loggedin, setLoggedin }}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}
