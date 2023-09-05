import { AppProps } from "next/app";
import { GlobalStyle } from "@shared/global";
import { FontStyle } from "@shared/fonts";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import { HeadComponent } from "@components/layout/head";
import "../shared/reset.css";

const App = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;
  return (
    <ApolloProvider client={client}>
      <HeadComponent />
      <FontStyle />
      <GlobalStyle />

      <AnyComponent {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
