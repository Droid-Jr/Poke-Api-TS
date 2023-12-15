import {  IResult, Ipokemon } from '@/interfaces/pokemon.interface'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function PokemonApi(endpoint: string) {
  const [Pokemon, setPokemon] = useState<Ipokemon[]>([])
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
  
    (async () => {
      try {
        const { data } = await axios.get(endpoint, { timeout: 5000 });
  
        if (isMounted) {
          const finish: Ipokemon[] = await Promise.all(data.results.map(({ url }: IResult) => axios.get(url).then((res) => res.data)));
          setPokemon(finish);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    })();

    return () => {
      isMounted = false;
    };

  }, [endpoint]);
  

  return { Pokemon , loading }
}
