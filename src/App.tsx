import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from "./layout/HomeLayout";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import ReadDetail from "./components/ReadDetail";
import MyLibrary from "./components/library/myLibrary";
import Genres from "./components/genres/genres";
import New from "./components/new/new";
import Featured from "./components/featured/featured";
import Level from "./components/account/level";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeLayout />} >
              <Route index element={<Home />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/library" element={<MyLibrary />} />
              <Route path="/genres" element={<Genres />} />
              <Route path="/new" element={<New />} />
              <Route path="/featured" element={<Featured />} />
              <Route path="/buy" element={<Level />} />
            </Route>
            <Route path="/product/:slug/read/:id" element={<ReadDetail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
