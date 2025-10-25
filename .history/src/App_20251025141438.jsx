import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "../app/Homepage/Homepage";

function App() {
    return (
        <div>
            <Homepage />
        </div>
    );
}

export default App;
