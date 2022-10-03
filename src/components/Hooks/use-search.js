import { useEffect, useState } from 'react';
import { typesGetAll } from '../../Services/pokedex.js';

export default function useSearch() {
  const [types, setTypes] = useState([]);

  const searchEffect = () => {
    typesGetAll().then((types) => setTypes(types.map((t) => t.type)));
  };

  useEffect(() => {
    searchEffect();
  }, []);

  return {
    types,
  };
}
