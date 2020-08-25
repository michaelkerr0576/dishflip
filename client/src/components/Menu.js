import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { getMenu } from "../actions/menuActions";
import PropTypes from "prop-types";

import MenuSection from "./MenuSection";

class Menu extends Component {
  //Runs when the component mounts
  componentDidMount() {
    this.props.getMenu();
  }

  render() {
    const { menu } = this.props.menu;

    return (
      <div>
        <Container fluid="xl">
          {/* MENU SECTION COMPONENT*/}
          {menu.length &&
            menu.map((menuSection, index) => (
              <MenuSection key={index} menuSection={menuSection} />
            ))}
        </Container>
      </div>
    );
  }
}

Menu.propTypes = {
  getMenu: PropTypes.func.isRequired,
  menu: PropTypes.object.isRequired,
};

const mapSateToProps = (state) => ({
  menu: state.menu,
});

const mapDispatchToProps = {
  getMenu,
};

export default connect(mapSateToProps, mapDispatchToProps)(Menu);
