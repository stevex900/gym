import React from "react";
import { auth } from "../../firebase/firebase";
import {
  Container,
  LogInContainer,
  Span,
  NavLinkContainer as NavLink,
} from "./header.styles";
import Navigation from "../navigation/Navigation";
import Stopwatch from "../stopwatch/Stopwatch";
const Header = ({ currentUser }) => {
  const handleTest = () => {
    console.log(currentUser);
  };
  return (
    <Container>
      <Container>
        {currentUser ? (
          <div onClick={() => auth.signOut()}>
            <LogInContainer>
              <Span>Log out</Span>
            </LogInContainer>
          </div>
        ) : (
          <NavLink to="/login">
            <LogInContainer>
              <Span>Log in</Span>
            </LogInContainer>
          </NavLink>
        )}
      </Container>

      <Stopwatch />
      <Navigation />
    </Container>
  );
};

export default Header;
