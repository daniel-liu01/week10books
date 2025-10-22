import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Simulation from "../app/Simulation/Simulation";
import SimulationChat from "../app/SimulationChat/SimulationChat";
import TextField from "../components/TextField/TextField";
import Card from "../components/Card/Card";

function App() {
    return (
        <div>
            <TextField />
            <Card />
        </div>
    );
}

export default App;
