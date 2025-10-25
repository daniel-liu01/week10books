import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "../app/Homepage/Homepage";
import Simulation from "../app/Simulation/Simulation";
import SimulationChat from "../app/SimulationChat/SimulationChat";
import TextField from "../components/TextField/TextField";
import TextBubble from "../components/TextBubble/TextBubble";
import Card from "../components/Card/Card";

function App() {
    return (
        <div>
            <Homepage />
        </div>
    );
}

export default App;
