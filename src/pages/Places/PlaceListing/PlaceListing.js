import Product from "../../../components/productList/product";
import "./styles.css";
import { Container, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlaces } from "../../../store/actions/places";

const PlaceListing = () => {
  
  const listNumber = 20;
  const places = useSelector((state)=>state.places.places);
  const dispatch = useDispatch();
  useEffect(() => {dispatch(getPlaces({limit:10,skip:10}));}, []);
  const items = [];
  for(let i = 0 ; i < listNumber ; i++){
    let element = <Product currentPlace = {places[i]} key= {i} currentIndex = {i}/>;
    items.push(element);}
  return (
    <>
      
      <section className="row container-fluid p-0 m-0">
        <Col md="7">
          <div className="top">
            <h2>Stays in selected map area</h2>
            <br />
            <button
              type="button"
              className="btn btn border-secondary rounded-pill button"
            >
              Cancelation flexibility
            </button>
            {"\u00a0"}
            <button
              type="button"
              className="btn btn border-secondary rounded-pill button"
            >
              Type of places
            </button>
            {"\u00a0"}
            <button
              type="button"
              className="btn btn border-secondary rounded-pill button"
            >
              Price
            </button>
            {"\u00a0"}
            <button
              type="button"
              className="btn btn border-secondary rounded-pill button"
            >
              Instant Book
            </button>
            {"\u00a0"}
            <button
              type="button"
              className="btn btn border-secondary rounded-pill button"
            >
              More Filters
            </button>
          </div>
          <br/>
          <div style={{ marginLeft: 20 }}>
            <p>Enter dates and number of guests to see the total price per night.</p>
            <hr/>
            <p  className="p2" style={{fontSize:15 , fontWeight:350 , marginTop:30 , marginBottom:30}} >
              Review COVID-19 travel restrictions before you book . <a href="#">Learn more</a>
            </p>
          </div>
          {items}
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </Col>
        <Col md="5">
          <div className="col-5 container-fluid bg-light p-0">
            <img className="sticky-top" src="map.PNG" />
          </div>
        </Col>
      </section>
    </>
  );
};
export default PlaceListing;

