import React from "react";
import "./style.css";
import Saludo from "./saludo";

export default function App() {
  return (
    <div>
      <h1>Usando una instalacion online</h1>
      <p>Es mas facil de lo que te explique hoy :)</p>
      <Saludo mensaje="Hola Soy Goku" />
    </div>
  );
}
