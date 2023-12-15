import axios from "axios";
import { useEffect, useState } from "react";
import { Ttypes } from "../interfaces/types.interface";

export default function TypesApi(url: string) {
  const [typos, settypos] = useState<Ttypes[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url);
        settypos(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [url]);

  return [typos];
}
