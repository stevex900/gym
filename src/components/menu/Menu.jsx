import React from "react";
import { MenuContainer, ButtonContainer } from "./menu.styles";
import { Button } from "../button/Button.styles";
const Menu = () => {
  const buttons = [
    { id: 1, name: "Arrange Training" },
    { id: 2, name: "History" },
    { id: 3, name: "View Training" },
    { id: 4, name: "Fourth" },
  ];
  return (
    <MenuContainer>
      <ButtonContainer>
        {buttons.map((button) => (
          <Button key={button.id}>{button.name}</Button>
        ))}
      </ButtonContainer>
    </MenuContainer>
  );
};

export default Menu;
