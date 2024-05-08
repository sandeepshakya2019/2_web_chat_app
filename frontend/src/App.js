import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./Components/Auth/ProtectRoute";

const Home = lazy(() => import("./Pages/Home"));

const Chat = lazy(() => import("./Pages/Chat"));
const Group = lazy(() => import("./Pages/Group"));

const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));

const NotFound = lazy(() => import("./Pages/NotFound"));

let user = true;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectRoute user={user}>
                <Home />
              </ProtectRoute>
            }
          />
          <Route
            path="/chat/:id"
            element={
              <ProtectRoute user={user}>
                <Chat />
              </ProtectRoute>
            }
          />
          <Route
            path="/group"
            element={
              <ProtectRoute user={user}>
                <Group />
              </ProtectRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Register />
              </ProtectRoute>
            }
          />
          <Route path="*" element={<NotFound user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
