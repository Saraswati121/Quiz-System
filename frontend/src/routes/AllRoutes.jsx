import React from "react";
import { Routes, Route } from "react-router-dom";
import { Admin } from "../components/Admin";
import { User } from "../components/User";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";
import { Quiz } from "../components/Quiz";
import { Result } from "../components/Result";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </div>
  );
};

