import React from "react";
import Navigation from "./components/navigation/Navigation";
import { Route } from "react-router-dom";
import {
  PrimaryContainer,
  SecondaryContainer,
  MainContainer,
} from "./app.styles";
import Header from "./components/header/Header";
import ArrangeTraining from "./pages/arrange-training/ArrangeTraining";
import History from "./pages/history/History";
import Start from "./pages/start/Start";
import ViewTraining from "./pages/view-training/ViewTraining";
import "./App.css";
import Stopwatch from "./components/stopwatch/Stopwatch.jsx";
const App = () => {
  return (
    <>
      <MainContainer>
        <PrimaryContainer>
          <Header />
        </PrimaryContainer>
        <SecondaryContainer>
          <Route path="/" component={Start} exact={true} />
          <Route path="/arrangetraining" component={ArrangeTraining} />
          <Route path="/history" component={History} />
          <Route path="/viewtraining" component={ViewTraining} />
        </SecondaryContainer>
      </MainContainer>
    </>
  );
};

export default App;

// arrangetraining
// history
// viewtraining
// fourth
