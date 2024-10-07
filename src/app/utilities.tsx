"use client";
import { Pokedex } from "pokeapi-js-wrapper";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

export const PokeDex = new Pokedex();
export const PDContext = createContext<{ PokeDex: Pokedex }>({ PokeDex });
export const usePokedexContext = () => useContext(PDContext);

export const extractId = /\/(\d+)\//;
