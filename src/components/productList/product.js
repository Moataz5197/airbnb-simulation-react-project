import {
  CardText,
  Col,
  Row,
} from "reactstrap";
import Carousel from "./carousel";
import Title from "../../components/placeDetails/titleComponent";
import "./product.css";

const Product = () => {

  return (
    <>
      <Row>
        <Col>
          <div className="cart">
            <a href="#">
              <i
                className="far fa-heart"
                style={{
                  color: "black",
                  fontSize: "20px",
                  float: "right",
                  paddingTop: 15,
                }}
              />
            </a>
            <Row className="no-gutters">
              <Col md="4">
                <Carousel />
              </Col>
              <Col md="8">
                <div className="title">
                  <p>Entire flat in hurghada</p>
                  <p className="p2">Card subtitle</p>
                  <hr
                    style={{
                      width: 40,
                      float: "left",
                      marginBottom: 5,
                      marginTop: 5,
                    }}
                  />
                  <br />
                  <CardText>
                    4 guests · 2 bedrooms · 4 beds · 1 bathroom <br />
                    wifi . kitchen . washing machine
                    <Title
                      data={{
                        rating: 4.95,
                        numOfRaters: 19,
                      }}
                    />
                  </CardText>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Product;
