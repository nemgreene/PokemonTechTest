"use client";
import React, { useEffect, useMemo, useState } from "react";
import { usePokedexContext } from "./utilities";

import { NamedAPIResourceList } from "pokeapi-js-wrapper";
import Dash from "./pokemon/Dash";

const pageSize = 20;

export default function Home() {
  const [data, setData] = useState<NamedAPIResourceList | null>(null);
  const [page, setPage] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const { PokeDex } = usePokedexContext();

  const getPokemon = async () => {
    const pokemon = await PokeDex.getPokemonsList();
    setData({
      ...pokemon,
      results: pokemon.results.sort((a, b) => a.name.localeCompare(b.name)),
    });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const match = useMemo(() => new RegExp(`${search}`), [search]);

  const handlePage = (advance: boolean) => {
    setPage((v) => {
      return advance ? v + 1 : Math.max(0, v - 1);
    });
  };

  return (
    <div className="h-screen w-screen">
      <div className="p-10 flex flex-row items-center">
        <div className="flex-1 ">PokeDex</div>
        <div className="p-2">Search </div>
        <input
          className="text-black p-1"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div className="pl-3 pr-3">
        <span>Page: {page + 1}</span>
        {data?.results && (
          <div className="grid grid-cols-1 [&>*:nth-child(even)]:bg-slate-800 [&>*:nth-child(odd)]:bg-slate-900  ">
            <Dash
              data={data.results.filter((v) => v.name.match(match))}
              page={page}
              pageSize={pageSize}
            />
          </div>
        )}
        <div className="flex flex-row items-center justify-center">
          <button
            disabled={page === 0}
            className="p-2 pr-4 pl-4 m-1 bg-slate-700 rounded"
            onClick={() => {
              handlePage(false);
            }}
          >
            Prev
          </button>
          <button
            className="p-2 pr-4 pl-4 m-1 bg-slate-700 rounded"
            onClick={() => {
              handlePage(true);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
