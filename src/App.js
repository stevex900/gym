import React from "react";
import Navigation from "./components/navigation/Navigation";
import "./App.css";
import Stopwatch from "./components/stopwatch/Stopwatch.jsx";
const App = () => {
  return (
    <div>
      <Navigation />
      <Stopwatch />
    </div>
  );
};

export default App;
