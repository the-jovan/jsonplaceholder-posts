import { FunctionComponent, ReactElement } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";
import SinglePost from "./pages/SinglePost/SinglePost";

const App: FunctionComponent = (): ReactElement => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
