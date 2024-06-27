import React, { useEffect, useState } from "react";
import PokeList from "./PokeList";
import PokeForm from "./PokeForm";

enum SiteTabs {
  National = "Pokedex National",
  Tumbo = "Pokedex Tumbo",
}

const PokeTabs = () => {
  const [activeTab, setActiveTab] = useState<SiteTabs>(SiteTabs.National);
  const [isCreatingNewPokemon, setIsCreatingNewPokemon] =
    useState<boolean>(false);

  const [tumboPokemons, setTumboPokemons] = useState<any[]>([]);

  const toggleTabs = (tab: SiteTabs) => {
    setActiveTab(tab);
  };

  const localStoragePokemons = localStorage.getItem("pokemons");

  useEffect(() => {
    let pokemons = JSON.parse(localStoragePokemons) || [];
    setTumboPokemons(pokemons);
  }, [localStoragePokemons]);

  return (
    <div className="bg-gray-200">
      <h1 className="text-center text-bolder">POKEDEX</h1>
      <div className="flex justify-center items-center">
        {Object.values(SiteTabs).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-white outline-none m-3 ${
              activeTab === tab ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => toggleTabs(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {activeTab === SiteTabs.National && <PokeList />}
        {activeTab === SiteTabs.Tumbo && (
          <div className="flex flex-col justify-center items-center">
            <button
              className="bg-blue-500 text-white p-2 rounded-lg w-40"
              onClick={() => {
                console.log("clicked");
                setIsCreatingNewPokemon(!isCreatingNewPokemon);
              }}
            >
              Create New Pokemon
            </button>
            <PokeList tumboPokemons={tumboPokemons} />
          </div>
        )}
        {isCreatingNewPokemon && (
          <PokeForm
            closeModal={() => {
              setIsCreatingNewPokemon(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PokeTabs;
