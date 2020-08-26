import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardColumns, Collapse } from "reactstrap";
import { Transition } from "react-transition-group";

import MenuItem from "./MenuItem";

class MenuSection extends Component {
  state = {
    collapse: false,
  };

  //Runs when the component mounts
  componentDidMount() {
    if (this.props.index === 0) {
      this.setState({
        collapse: true,
      });
    }
  }

  onToggle = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  render() {
    const { menuSection } = this.props;
    const { collapse } = this.state;
    let sortedItems = [];

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
          {/* Card Columns - accordian with transition */}
          <Transition in={collapse} timeout={1000}>
            <Collapse isOpen={collapse}>
              <CardColumns className="p-2 p-sm-4 ">
                {/* MENU ITEM COMPONENT - copy data into new array and sort it by DisplayOrder */}
                {menuSection.MenuItems.length &&
                  (sortedItems = []
                    .concat(menuSection.MenuItems)
                    .sort((a, b) => (a.DisplayOrder > b.DisplayOrder ? 1 : -1))
                    .map((menuItem, index) => (
                      <MenuItem key={index} menuItem={menuItem} />
                    )))}
              </CardColumns>
            </Collapse>
          </Transition>
        </Card>
      </div>
    );
  }
}

export default MenuSection;
