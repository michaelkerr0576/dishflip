import React, { Component } from "react";
import { Badge } from "reactstrap";

class MenuAdditionItem extends Component {
  onItemClick = (name) => {
    alert("Clicked " + name);
  };

  render() {
    const { menuAdditionItem, masterOption, minPrice } = this.props;

    return (
      <Badge
        className="c-pointer text-dark font-weight-normal ml-1"
        color="light"
        pill
        onClick={() => {
          this.onItemClick(menuAdditionItem.Name);
        }}
      >
        <i className="fas fa-plus mr-1"></i>
        {menuAdditionItem.Name}
        <strong className="ml-1">
          €
          {masterOption
            ? (menuAdditionItem.Price - minPrice).toFixed(2)
            : menuAdditionItem.Price.toFixed(2)}
        </strong>
      </Badge>
    );
  }
}

export default MenuAdditionItem;
