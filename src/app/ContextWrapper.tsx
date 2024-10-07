"use client";
import { Pokedex } from "pokeapi-js-wrapper";
import { PokeDex } from "./utilities";
import React, { createContext, PropsWithChildren } from "react";
export const PDContext = createContext<{ PokeDex: Pokedex }>({ PokeDex });

export default function ContextWrapper({ children }: PropsWithChildren) {
  return (
    <PDContext.Provider value={{ PokeDex }}>{children}</PDContext.Provider>
  );
}
