"use client"
import React from 'react';
import { PokemonIdeApi } from '@/services/PokemonIdeApi';
import '../../styles/pokemonDetail.css';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Loader from '@/components/modals/Loader';




function Page() {

    const {id} = useParams()
   
  const {Datos, loading}  = PokemonIdeApi(`https://pokeapi.co/api/v2/pokemon/${id}`);


  return (
   
    loading ? ( <Loader/>) : (
      <div className={`container bg-${Datos?.types[0].type.name}`}>
      <article className="poke__info">
        <header className="header__img">
        <Image
        width={400}
        height={400}
            className="header__img-img"
            src={Datos?.sprites?.other["official-artwork"]?.front_default ?? ""}
            alt={Datos?.types[0]?.type.name ?? 'defaultType'}
          />
          <div className="poke__info-data">
            <div className="poke__info-datawh">
              <div className="poke__info-weight">
                <h2> {Datos?.weight}</h2>
                <span>Peso</span>
              </div>
              <div className="poke__info-height">
                <h2> {Datos?.height}</h2>
                <span>Altura</span>
              </div>
            </div>
            <div className="poke__info-datat">
              <h1 className="poke__info-datah3">{Datos?.name}</h1>
              <h2 className="poke__info-datah2">#{Datos?.id}</h2>
            </div>
          </div>
        </header>
  
        <div className="poke__info-typespoke">
          <h1 className="poke__info-h1">Type</h1>
          <hr />
          <ul className="poke__types-container">
            {Datos?.types.map((t) => (
              <li
                className={`poke__types-item bg-${t.type.name}`}
                key={t.type.url}
              >
                {t.type.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="poke__info-abilitiespoke">
          <h1 className="poke__info-h1">Abilities</h1>
          <hr />
          <ul className="poke__abilities-container">
            {Datos?.abilities.map((a) => (
              <li className="poke__abilities-item" key={a.ability.url}>
                {a.ability.name}
              </li>
            ))}
          </ul>
        </div>
  
        <div className="poke__info-containerstats">
          <div>
            <h1 className="poke__info-statTitle">Estadisticas</h1>
          </div>
  
          <div className="poke__stat-container">
            {Datos?.stats.map((s) => (
              <>
                <h3 className="poke__info-stat">{s.stat.name}</h3>
  
                <div className="poke__info-bar">
                  <h4> 200%</h4>
                  <div
                    style={{
                      width: `${(s.base_stat * 100) / 200}%`,
                    }}
                    className={`poke__info-hp   bg-${Datos?.types[0].type.name}`}
                  >
                    <span
                      className={`poke__info-spa bg-${Datos?.types[0].type.name}`}
                    >
                      {s.base_stat}%
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
  
        <div className="poke__info-containermoves">
          <h1 className="poke__info-moveh1">Movements</h1>
          <ul className="poke__info-cont">
            {Datos?.moves.map((p) => (
              <li className="poke__move-item" key={p.move.url}>
                {p.move.name}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
    )
   
  );
}

export default Page;
