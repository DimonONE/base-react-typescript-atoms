import * as React from "react";
import type { AppProps } from "next/app";
import "../styles/index.scss";

type AppType = (properties: AppProps) => JSX.Element;

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
