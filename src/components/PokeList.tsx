import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";

const PokeList = ({tumboPokemons}) => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20").then((res) => {
      setPokemons(res?.data.results);
      console.log(res?.data.results);
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);

      // if (userName.length > 9) {
      //   setFontSize("75px");
      // }
    });
    // axios
    //   .get("https://pokeapi.co/api/v2/type")
    //   .then((res) => setInputList(res?.data.results));
  }, []);

  if(isLoading){
    return <div className="animate-pulse text-2xl text-red-300">Loading...</div>
  }
  return (
    <div className="w-full h-10/12 flex flex-wrap justify-center items-center gap-3">
      {!tumboPokemons  && pokemons.map((pokemon: any) => (
        <PokemonCards
          url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
        />
      ))}

      {
        tumboPokemons && tumboPokemons.map((pokemon: any) => (
          <div className="w-80 bg-red-400 rounded-md flex flex-col items-center justify-center gap-3 mx-1">
            <p>Name: {pokemon.name}</p>
            <p>Type: {pokemon.Type}</p>
            <p>Gender: {pokemon.gender}</p>
          </div>
        ))
      }


    </div>
  );
};

export default PokeList;
