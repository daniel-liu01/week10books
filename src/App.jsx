import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Simulation from "../app/Simulation/Simulation";
import SimulationChat from "../app/SimulationChat/SimulationChat";

import TextField from "../components/TextField/TextField";

import TextBubble from "../components/TextBubble/TextBubble";
import TabMenu from "../components/TabMenu/TabMenu";
import Card from "../components/Card/Card";

function App() {
    return (
        <div>

            <TextField />

            <SimulationChat />
            <TextBubble
                textType='ai'
                text='sjdnakndkjandkasasjkd'
            />
            <TabMenu />
        </div>
    );
}

export default App;
