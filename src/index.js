import "./styles.css";

import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import PokemonList from "./PokemonList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {" "}
        Jerome
        <Route path="/" element={<PokemonList />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
