import React from "react";
import { MenuContainer, ButtonContainer } from "./menu.styles";
import { Button } from "../button/Button.styles";
const Menu = () => {
  const buttons = [
    { id: 1, name: "First" },
    { id: 2, name: "Second" },
    { id: 3, name: "Third" },
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
