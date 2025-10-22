import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Simulation from "../app/Simulation/Simulation";
import SimulationChat from "../app/SimulationChat/SimulationChat";

function App() {
    return (
        <div>
            <SimulationChat />
            <TextBubble
        textType="ai"
        text="If you were me… would you choose the path that helps you find yourself, or the one that helps you find others?"
      />
        </div>
    );
}

export default App;
