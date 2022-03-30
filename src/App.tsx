import { FunctionComponent, ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";
import SinglePost from "./pages/SinglePost/SinglePost";

import loggerComponent from "./hocs/loggerComponent";

const LoggedHome = loggerComponent(Home);
const LoggedPosts = loggerComponent(Posts);
const LoggedSinglePost = loggerComponent(SinglePost);

const App: FunctionComponent = (): ReactElement => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoggedHome />} />
        <Route path="/posts" element={<LoggedPosts />} />
        <Route path="/post/:id" element={<LoggedSinglePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
