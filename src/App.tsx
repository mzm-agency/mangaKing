import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from "./layout/HomeLayout";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeLayout />} >
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
