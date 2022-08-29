import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonSlice } from "./store/slices/pokemon/pokemonSlice";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  const { page, pokemons, isLoading } = useSelector((state) => state.pokemons);
  console.log(pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? "True" : "False"}</span>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.url}>{pokemon.name}</li>
        ))}
      </ul>

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  );
};
