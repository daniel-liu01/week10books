import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Simulation from "../app/Simulation/Simulation";
import SimulationChat from "../app/SimulationChat/SimulationChat";

function App() {
    return (
        <div>
            <SimulationChat />
        </div>
    );
}

export default App;
