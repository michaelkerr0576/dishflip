import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Badge,
} from "reactstrap";

class MenuItem extends Component {
  render() {
    const { menuItem } = this.props;

    return (
      <div>
        <Card className="border-0 shadow-sm mb-3">
          <CardImg
            top
            width="100%"
            src={menuItem.ImageUrl}
            alt={menuItem.ImageName}
          />
          <CardBody className="border-bottom px-2">
            {console.log(menuItem)}
            <CardTitle>
              <Row>
                <Col className="text-left mr-auto" xs="auto">
                  <h5>{menuItem.Name}</h5>
                </Col>
                <Col className="text-right" xs="auto">
                  <h5>
                    <small
                      style={{ position: "relative", top: "-4px" }}
                      className="font-weight-light mr-1"
                    >
                      from
                    </small>
                    €{menuItem.ActualPrice}
                  </h5>
                </Col>
              </Row>
            </CardTitle>
            <CardText>{menuItem.Description}</CardText>
            <hr className="my-1 mx-n2"></hr>
            <CardText className="font-weight-light">Additions: <Badge color="light" pill>Light</Badge></CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MenuItem;
