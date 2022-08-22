import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "../pages/About";
import TodoList from "../pages/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="about" element={<About />} />
        <Route path="about/:id" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
