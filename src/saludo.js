import React from "react";
import "./style.css";

export default function Saludo({ mensaje }) {
  return (
    <div className="fondoRojo">
      <p>asi usas un componente</p>
      <h1>{mensaje}</h1>
    </div>
  );
}
