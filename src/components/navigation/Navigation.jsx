import { Nav } from "./navigation.styles";
import { ReactComponent as Hamburger } from "../../assets/hamburgerS.svg";
import Menu from "../menu/Menu";
import React from "react";
import { connect } from "react-redux";
import { selectMenuItem } from "../../redux/navigation/navigation.selectors";
import { showMenuChangeAction } from "../../redux/navigation/navigation.actions.js";
const Navigation = ({ showMenu, showMenuChangeAction }) => {
  const handleShowMenu = () => {
    showMenuChangeAction(!showMenu);
  };
  return (
    <Nav>
      <Hamburger onClick={handleShowMenu} />
      {showMenu && <Menu />}
    </Nav>
  );
};
const mapStateToProps = (state) => ({
  showMenu: selectMenuItem(state),
});
const mapDispatchToProps = (dispatch) => ({
  showMenuChangeAction: (item) => dispatch(showMenuChangeAction(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
