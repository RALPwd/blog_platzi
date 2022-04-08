import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Menu = () => (
  <nav id="menu">
    <Link to="/">Usuarios</Link>
    <Link to="/tareas">Tareas</Link>
  </nav>
)

export default Menu;