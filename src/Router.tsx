import { Routes, Route } from "react-router-dom";
import { Home } from "./components/views/Home";
import { Login } from "./components/views/Login";
import { Signup } from "./components/views/Signup";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};


export default Router;
