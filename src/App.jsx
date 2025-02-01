import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Increment from "./pages/Increment";
import TOdo from "./pages/Todo";
import MainLayout from "./layout/Mainayout";
import Pagination from "./pages/Pagination";
import PostDAta from "./pages/PostDAta";

function App() {
  return (
    <div>
      <div className="container flex flex-col  rounded-md p-2 mx-auto">
        <Routes>
          <Route
            path="/increment"
            element={
              <MainLayout>
                <Increment />
              </MainLayout>
            }
          />
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/todo"
            element={
              <MainLayout>
                <TOdo />
              </MainLayout>
            }
          />
          <Route
            path="/post"
            element={
              <MainLayout>
                <PostDAta />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
