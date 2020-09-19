import React from "react";
import { Container } from "./header.styles";
import Navigation from "../navigation/Navigation";
import Stopwatch from "../stopwatch/Stopwatch";
const Header = () => {
  return (
    <Container>
      <Stopwatch />
      <Navigation />
    </Container>
  );
};

export default Header;
