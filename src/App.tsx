import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";

import PokeTabs from "./components/PokeTabs";
import PokeModal from "./components/PokeModal";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PokeTabs />} />
          <Route path="/pokedex/:name" element={<PokeModal />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
