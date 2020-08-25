import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardColumns,
  Collapse,
} from "reactstrap";
import { Transition } from "react-transition-group";

import MenuItem from "./MenuItem";

class MenuSection extends Component {
  state = {
    collapse: false,
  };

  onToggle = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  render() {
    const { menuSection } = this.props;
    const { collapse } = this.state;

    let accordianIcon;
    if (collapse) {
      accordianIcon = <i className="fas fa-chevron-up"></i>;
    } else {
      accordianIcon = <i className="fas fa-chevron-down"></i>;
    }

    return (
      <div>
        <Card className="shadow-sm my-3">
          <CardHeader
            onClick={this.onToggle}
            className="c-textUnderline c-pointer py-3"
          >
            <Row>
              <Col xs="auto" className="text-left mr-auto">
                <h4>{menuSection.Name.toUpperCase()}</h4>
              </Col>
              <Col xs="auto" className="text-right">
                {accordianIcon}
              </Col>
            </Row>
          </CardHeader>
          {/* Card Body - accordian with transition */}
          <Transition in={collapse} timeout={1000}>
            <Collapse isOpen={collapse}>
              <CardColumns className="m-2">
                {/* MENU ITEM COMPONENT*/}
                {menuSection.MenuItems.length &&
                  menuSection.MenuItems.map((menuItem, index) => (
                    <MenuItem key={index} menuItem={menuItem} />
                  ))}
              </CardColumns>
            </Collapse>
          </Transition>
        </Card>
      </div>
    );
  }
}

export default MenuSection;
