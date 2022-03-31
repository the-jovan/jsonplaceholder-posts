import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NotFound from "./components/NotFound/NotFound";

import PostsProvider from "./store/posts.context";

import { ErrorBoundary } from "react-error-boundary";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<NotFound />}>
      <PostsProvider>
        <App />
      </PostsProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
