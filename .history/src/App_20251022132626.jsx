import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Simulation from "../app/Simulation/Simulation";
import SimulationChat from "../app/SimulationChat/SimulationChat";
import TextBubble from "../components/TextBubble/TextBubble";
import Card from "../components/Card/Card";

function App() {
    return (
        <div>
            <SimulationChat />
            <TextBubble 
            textType={ai}
            />
        </div>
    );
}

export default App;
