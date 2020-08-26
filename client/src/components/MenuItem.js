import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardFooter,
  Badge,
} from "reactstrap";

import MenuAddition from "./MenuAddition";

class MenuItem extends Component {
  render() {
    const { menuItem } = this.props;
    let sortedAdditions = [];

    let isAdditions;
    if (menuItem.MenuItemOptionSets.length) {
      isAdditions = (
        <CardFooter className="bg-white border-bottom px-2">
          <h6>Additions:</h6>
          {/* MENU Addition COMPONENT - copy data into new array and sort it by DisplayOrder */}
          {
            (sortedAdditions = []
              .concat(menuItem.MenuItemOptionSets)
              .sort((a, b) => (a.DisplayOrder > b.DisplayOrder ? 1 : -1))
              .map((menuAddition, index) => (
                <MenuAddition key={index} menuAddition={menuAddition} />
              )))
          }
        </CardFooter>
      );
    } else {
      isAdditions = null;
    }

    return (
      <div>
        <Card className="border-0 shadow mb-3">
          <CardImg
            top
            width="100%"
            src={menuItem.ImageUrl}
            alt={menuItem.ImageName}
          />
          <CardBody className="bg-light p-2">
            <CardTitle>
              <Row>
                <Col className="text-left mr-auto" xs="auto">
                  <h4 className="pt-1">
                    <u>{menuItem.Name}</u>
                  </h4>
                </Col>
                <Col className="text-right" xs="auto">
                  <h4>
                    <Badge color="dark">
                      <small
                        style={{ position: "relative", top: "-4px" }}
                        className="font-weight-light mr-1"
                      >
                        from
                      </small>
                      €{menuItem.ActualPrice.toFixed(2)}
                    </Badge>
                  </h4>
                </Col>
              </Row>
            </CardTitle>
            <CardText>{menuItem.Description}</CardText>
          </CardBody>
          {isAdditions}
        </Card>
      </div>
    );
  }
}

export default MenuItem;
