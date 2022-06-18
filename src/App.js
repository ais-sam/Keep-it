// import User from "./Pages/User";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Pages/User/User";
import Home from "./Pages/Home/Home"

export default function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="user" element={<User/>} />
         </Routes>
      </BrowserRouter>
    </>
  );
}
