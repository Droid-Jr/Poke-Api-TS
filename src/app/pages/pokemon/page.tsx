"use client";
import PokemonCards from "@/components/cards/PokemonCards";
import Loader from "@/components/modals/Loader";
import NavBar from "@/components/navbar/NavBar";
import Pagination from "@/components/ui/paginacion/Pagination";
import WelcomePokemon from "@/components/ui/pokemons/WelcomePokemon";
import { Ipokemon } from "@/interfaces/pokemon.interface";
import PokemonApi from "@/services/PokemonApi";
import React, { ChangeEvent, useState } from "react";

function Page() {
  const [page, setPage] = useState<number>(1);
  const [pokePerPage, setPokePerPage] = useState<number>(8);

  const { Pokemon, loading } = PokemonApi(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );

  const [name, setname] = useState<string>("");

  const [option, setoption] = useState<string>("");

  const changeOption = (e: ChangeEvent<HTMLSelectElement>) => {
    setoption(e.target.value);
  };
  const changeName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputValue = e.currentTarget["inputs"].value;
    setname(inputValue);
  };

  const pokemonFilter: Ipokemon[] = Pokemon?.filter((poke) => {
    const names = poke.name.toLowerCase().includes(name.toLowerCase());
    const options = poke.types[0].type.name.includes(option);
    return names && options;
  });

  const initialPoke = (page - 1) * pokePerPage;
  const finalPoke = page * pokePerPage;

  const maxPage = pokemonFilter && pokemonFilter.length / pokePerPage;

 
  return (
    <div className="w-full h-screen ">
      <NavBar />
      <WelcomePokemon
        changename={changeName}
        changeOp={changeOption}
        option={option}
      />
      <section className="w-[90%] py-5 m-auto  flex flex-wrap justify-center gap-5">
        {loading ? (
          <Loader />
        ) : (
          pokemonFilter
            ?.slice(initialPoke, finalPoke)
            .map((pokemons: Ipokemon) => (
              <PokemonCards key={pokemons?.id} pokemons={pokemons} />
            ))
        )}
      </section>
      <div className="w-[79%] m-auto">
          <Pagination page={page} maxPage={maxPage} setPage={setPage} />
        </div>
    </div>
  );
}

export default Page;
