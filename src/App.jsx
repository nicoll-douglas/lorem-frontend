import { Routes, Route } from "react-router-dom";
import "./assets/css/styles.css";

import { NotFound } from "./components/status-pages";
import Index from "./pages";
import Verify from "./pages/auth/verify";
import Forgot from "./pages/auth/forgot";
import Reset from "./pages/auth/reset";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import User from "./pages/users/[username]";
import Home from "./pages/home";
import Me from "./pages/me";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/auth/verify" element={<Verify />} />
      <Route path="/auth/forgot" element={<Forgot />} />
      <Route path="/auth/reset" element={<Reset />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />

      <Route path="/users/:username" element={<User />} />
      <Route path="/me" element={<Me />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
