// import '../styles/globals.css'
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createUploadLink} from 'apollo-upload-client'
import { useRouter } from 'next/router';
import HomePage from '.';
import {createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext(null)

const HIDDEN_MAIN = ["/"];

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [ userInfo, setUserInfo] = useState({});

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  }

  useEffect (() => {
    const accessToken = localStorage.getItem("accessToken") || "";
    setAccessToken(accessToken);
  }, []);
  
  const uploadLink = createUploadLink ({
    uri: "https://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}`}
  })
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  const router = useRouter();

  const isHiddenMain = HIDDEN_MAIN.includes(router.pathname);

  return (
    <GlobalContext.Provider value={value}>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        {isHiddenMain && <HomePage/>}
        {!isHiddenMain &&(
          <Layout>
            <Component {...pageProps} />
          </Layout>)}
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
