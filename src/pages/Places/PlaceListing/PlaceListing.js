import Product from "../../../components/productList/product";
import "./styles.css";
import { Col } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlaces } from "../../../store/actions/placesActions";
import {getSpecPlaces} from "../../../store/actions/placesActions";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { useLocation } from "react-router";
import Map from "../../../components/map/map";

const PlaceListing = () => {
  const location = useLocation();
  const listNumber = 10;
  const currentPageNumber = useSelector((state)=>state.places.pageNumber);
  const places = useSelector((state)=>state.places.places);
  const totalPlaces = useSelector((state)=>state.places.totalPlaces);
  const dispatch = useDispatch();
  useEffect(() => {
    
    if (!location.state.searchQuery){dispatch(getPlaces(0));}
    else{
      console.log(location.state);
      const city =location.state.searchQuery;
      console.log(city);
      dispatch(getSpecPlaces(0,city));
      console.log(places.length);
    }
  
  }, []);
  
  const items = [];
  for(let i = 0 ; i < places.length ; i++){
    let element = <Product currentPlace = {places[i]} key= {i} currentIndex = {i}/>;
    items.push(element);}

  console.log(totalPlaces);
  console.log(location.state);
  const pages = [];
  for(let i = 0 ; i < Math.ceil(totalPlaces/listNumber) ;i++){

    
  pages.push(<PaginationItem active={i === currentPageNumber} key={i}>
    <PaginationLink  onClick = {()=>handlePageClick(i)}>
      {i + 1}
    </PaginationLink>
</PaginationItem>)

  }
  const handlePageClick = (i)=>{

    console.log(i);
    dispatch(getPlaces(i));
    
  }
  const handleOnPrevious = ()=>{

    let newpage = currentPageNumber-1;
    dispatch(getPlaces(newpage));

  }

  const handleOnNext = ()=>{

    let newpage = currentPageNumber+1;
    dispatch(getPlaces(newpage));
  }
  


  return (
    <>
      
      <section className="row container-fluid p-0 m-0">
        <Col md="7">
          <div className="top">
            <h2>Stays in Nearby Map</h2>
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
          <Pagination className="pagination">

            <PaginationItem disabled={currentPageNumber <= 0}>
              <PaginationLink  previous onClick= {handleOnPrevious} />
            </PaginationItem>
          
            {pages}

            <PaginationItem disabled={currentPageNumber == pages.length - 1 }>
              <PaginationLink next onClick= {handleOnNext} />
            </PaginationItem>

          </Pagination>
          
        </Col>
        <Col md="5">
          <div className="topy">

            <Map data={{ coordinates: { lat: 30.0444, lng: 31.2357 } }} />  

          </div>
            
        </Col>
      </section>
    </>
  );
};
export default PlaceListing;

