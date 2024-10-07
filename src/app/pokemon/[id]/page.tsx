"use client";

import { usePokedexContext } from "@/app/utilities";
import Image from "next/image";
import { Pokemon } from "pokeapi-js-wrapper";
import { useEffect, useState } from "react";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const { PokeDex } = usePokedexContext();
  const [data, setData] = useState<Pokemon | null>(null);

  const fetchData = async () => {
    if (!PokeDex || !id) {
      return;
    }
    const nameData = await PokeDex.getPokemonByName(id);
    const speciesData = await PokeDex.getPokemonSpeciesByName(id);
    const res = { ...nameData, ...speciesData };
    if (res) {
      setData(res);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-10 max-w-lg">
      <div className="uppercase">Name: {data.name}</div>
      {data.sprites.front_default && (
        <img
          alt={`${data.name}image`}
          className="w-full"
          src={`${data.sprites.front_default}`}
        />
      )}
      <div className="flex flex-row p-1">
        <div className="pl-1">Height: {data.height}</div>
        <div className="pl-1">Weight: {data.weight}</div>
      </div>
      <div>{data.flavor_text_entries[0].flavor_text}</div>
      <div className="flex flex-row p-1">
        Abilities ({data.abilities.length}):
        {data.abilities.map((v, i) => (
          <div key={i} className="ml-1 mr-1 p-1 bg-slate-700 rounded">
            {v.ability.name}
          </div>
        ))}
      </div>
    </div>
  );
}
