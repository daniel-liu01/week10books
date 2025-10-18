import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Simulation from "./Simulation/Simulation.jsx";

function App() {
    return (
        <div>
            <Simulation />
        </div>
    );
}

export default App;
