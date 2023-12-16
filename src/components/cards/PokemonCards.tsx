import { Ipokemon } from "@/interfaces/pokemon.interface";
import Image from "next/image";
import React from "react";
import './styles/pokeCards.css'
import { useRouter } from 'next/navigation';

interface CardsPorps {
  pokemons: Ipokemon;
}



function PokemonCards({ pokemons }: CardsPorps) {
 
  const router = useRouter();

  const changeRut = () => {
    router.push(`/pages/pokemon/${pokemons?.id}`);
  }


  return (
    <article
    onClick={changeRut}
      className={`poke-card border-${pokemons?.types[0].type.name}`}>
      <header className={`poke-card__header bg-${pokemons?.types[0].type.name}`}>
        <Image
        width={800} height={800}
          className="poke-card__sprite"
          src={pokemons?.sprites.other["official-artwork"].front_default}
          alt={pokemons?.name}
        />
      </header>
      <section className="poke-card__body">
        <h3  className={`poke-card__name  color-${pokemons?.types[0].type.name}`}>
          {pokemons?.name}
        </h3>
        <ul className="poke-card__types-container">
          {pokemons.types.map((type) => (
            <li
              className={`poke-card__type color-${type.type.name} `}
              key={type.type.name}
            >
              {type.type.name}
            </li>
          ))}
        </ul>
      </section>
      <footer className="poke-card__footer">
        <ul className="poke-card__stast-container">
          {pokemons?.stats.map((stat) => (
            <li className="poke-card__stat" key={stat.stat.name}>
              <span className="poke-card__label">{stat.stat.name}</span>
              <span className="poke-card__baseStat">{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}

export default PokemonCards;
