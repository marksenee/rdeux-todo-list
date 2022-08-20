import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import TodoList from "../pages/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="about" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;