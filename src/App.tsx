import { FunctionComponent, ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header";
// import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";
import SinglePost from "./pages/SinglePost/SinglePost";

import loggerComponent from "./hocs/loggerComponent";
import { ToastContainer } from "react-toastify";

// const LoggedHome = loggerComponent(Home);
const LoggedPosts = loggerComponent(Posts);
const LoggedSinglePost = loggerComponent(SinglePost);

const App: FunctionComponent = (): ReactElement => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        {/* <Route
          path="/"
          element={<LoggedHome helloMsg="Hello from" componentName="Home" />}
        /> */}
        <Route
          path="/"
          element={<LoggedPosts helloMsg="Hello from" componentName="Posts" />}
        />
        <Route
          path="/post/:id"
          element={
            <LoggedSinglePost
              helloMsg="Hello from"
              componentName="SinglePost"
            />
          }
        />
      </Routes>
    </BrowserRouter>
    // </ErrorBoundary>
  );
};

export default App;
