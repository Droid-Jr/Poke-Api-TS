
import { Ipokemon } from '@/interfaces/pokemon.interface';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const PokemonIdeApi = (endpoint: string) => {
  const [Datos, setDatos] = useState<Ipokemon | null>(null);

  useEffect( ()  => {
   ( async () => {
    try {
      const { data} = await axios.get(endpoint, { timeout: 5000 }) ;
      setDatos(data)
    } catch (error) {
      console.error(error);
    }
   })()
   
  }, [endpoint]);

  return [Datos];
};