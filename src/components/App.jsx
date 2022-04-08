import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Users from "./Users/Users";
import Tareas from "./Tareas/Tareas";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/tareas' element={<Tareas />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;