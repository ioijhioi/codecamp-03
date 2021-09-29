// import '../styles/globals.css'
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createUploadLink} from 'apollo-upload-client'



function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink ({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
  })
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
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
