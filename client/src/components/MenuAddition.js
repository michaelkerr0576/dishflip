import React, { Component } from "react";
import { CardText } from "reactstrap";

import MenuAdditionItem from "./MenuAdditionItem";

class MenuAddition extends Component {
  render() {
    const { menuAddition } = this.props;
    let sortedAdditionItems = [];

    return (
      <div>
        <CardText className="font-weight-light" style={{ fontSize: "1.2rem" }}>
          {menuAddition.Name ? menuAddition.Name + ":" : null}
          {/* MENU Addition Item COMPONENT - copy data into new array and sort it by DisplayOrder */}
          {menuAddition.MenuItemOptionSetItems.length &&
            (sortedAdditionItems = []
              .concat(menuAddition.MenuItemOptionSetItems)
              .sort((a, b) => (a.DisplayOrder > b.DisplayOrder ? 1 : -1))
              .map((menuAdditionItem, index) => (
                <MenuAdditionItem
                  key={index}
                  menuAdditionItem={menuAdditionItem}
                  masterOption={menuAddition.IsMasterOptionSet}
                  minPrice={menuAddition.MinPrice}
                />
              )))}
        </CardText>
      </div>
    );
  }
}

export default MenuAddition;
