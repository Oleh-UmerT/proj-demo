import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";
import store, { persistor } from "@/store";
import PageLayout from "@/components/layout/PageLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={60}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
