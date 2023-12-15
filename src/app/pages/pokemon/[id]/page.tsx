// Importa useClient desde next/react
"use client"
import React from 'react';
import { PokemonIdeApi } from '@/services/PokemonIdeApi';
import Loader from '@/components/modals/Loader';

interface PageProps {
  id: string;
}

function Page({ id }: PageProps) {
 

  const [pokemon] = PokemonIdeApi(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return (
    <div className={`w-[90%] m-auto`}>
      {pokemon ? (
        <article className={`poke__info bg-${pokemon.types[0].type.name}`}>
          <h1>{pokemon.name}</h1>
         
        </article>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Page;
