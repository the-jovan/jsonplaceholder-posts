import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NotFound from "./components/NotFound/NotFound";

import PostsProvider from "./store/posts.context";

import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const queryClient = new QueryClient();

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("black", "white")(props),
        color: mode("white", "black")(props),
      },
    }),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ErrorBoundary fallback={<NotFound />}>
        <QueryClientProvider client={queryClient}>
          <PostsProvider>
            <App />
          </PostsProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
