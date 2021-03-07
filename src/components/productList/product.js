import {
  CardText,
  Col,
  Row,
} from "reactstrap";
import Carousel from "./carousel";
import Title from "../../components/placeDetails/titleComponent";
import "./product.css";

const Product = (props) => {
  let space_allowed = {};
  let placetype = {};
  let title = "";
  let city = "";
  let images = {};
  let space_allowed_selection = "Entire Place";
  let wifi = false;
  let kitchen = false;
  let washingMachine = false;
  let guests = 0;
  let bedrooms = 0;
  let bathrooms = 0;
  let beds = 0;
  if(props.currentPlace !== undefined){
   space_allowed =  props.currentPlace.space_allowed;
   placetype = props.currentPlace.place_type;
   title =props.currentPlace.title;
   city  = props.currentPlace.address.city;
   wifi = props.currentPlace.amenities.essential.wifi;
   kitchen = props.currentPlace.amenities.facilities.kitchen;
   washingMachine = props.currentPlace.amenities.facilities.laundry;
   guests = props.currentPlace.num_guests;
   bedrooms = props.currentPlace.total_bedrooms;
   bathrooms = props.currentPlace.total_bathrooms;
   beds = props.currentPlace.num_beds;
   images = props.currentPlace.images;
  }
  if(space_allowed.private_room)space_allowed_selection = "Private Room";
  if(space_allowed.shared_room)space_allowed_selection = "Shared Room";

  
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
                <Carousel   images = {images}/>
              </Col>
              <Col md="8">
                <div className="title">
                  <p> {space_allowed_selection} in {city}</p>
                  <p className="p2">{title}</p>
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
                    {guests} guests · {bedrooms} bedrooms ·  {beds} beds · {bathrooms} bathroom <br />
                    {wifi? "Wifi" : "No Wifi" } . {kitchen? "Kitchen" : "No Kitchen" } . {washingMachine? "Washing Machine" : "No Washing Machine" }
                    
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
