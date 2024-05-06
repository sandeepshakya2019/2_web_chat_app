import React, { useEffect, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
const Home = lazy(() => import("./Pages/Home"));

const Chat = lazy(() => import("./Pages/Chat"));
const Group = lazy(() => import("./Pages/Group"));

const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/group" element={<Group />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<h1>No Path Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
