import React from "react";
import { Routes, Route } from "react-router-dom";
import SkipSizeSelection from "./components/SkipSizeSelection";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <>
      <ParticlesBackground />
      <Routes>
        <Route path="/" element={<SkipSizeSelection />} />
      </Routes>
    </>
  );
}

export default App;

