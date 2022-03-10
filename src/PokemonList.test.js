import "@testing-library/jest-dom";

import React from "react";
import { render } from "@testing-library/react";

import PokemonList from "./PokemonList";

test("render list", () => {
  render(<PokemonList />);
});
