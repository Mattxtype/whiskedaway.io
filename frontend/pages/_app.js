import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function MyApp({ Component, pageProps }) {
  /* Create a client */
  const queryClient = new QueryClient();
  return (
    <>
      {/* Provide the client to our App */}
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;