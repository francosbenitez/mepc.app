import "../styles/global.css";
import type { AppProps } from "next/app";
import PageWithLayoutType from "../types/pageWithLayout";
import { ReactElement } from "react";

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
