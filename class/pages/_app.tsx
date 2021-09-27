// import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import {initializeApp} from "firebase/app"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const firebaseApp = initializeApp ({
  apiKey: "AIzaSyDXffKZN458jg79onQiV0Du8aQCRqjpoK4",
  authDomain: "anywhere-eac97.firebaseapp.com",
  projectId: "anywhere-eac97",
  storageBucket: "anywhere-eac97.appspot.com",
  messagingSenderId: "352996018395",
  appId: "1:352996018395:web:192cc60bffe59662d464fe",
  measurementId: "G-NP4MPSQ70G"
})

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
