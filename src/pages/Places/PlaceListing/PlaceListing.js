import Product from "../../../components/productList/product";
import { Container, Row, Col } from 'reactstrap';

const PlaceListing = ()=>{

    const element = <Product/>;
    const num = 15;
    const items = [];
    for(let i = 0 ; i < num ; i++){
        items.push(element);
    }

    return(
        <>

                <section class="row container-fluid p-0 m-0">
                    <Col md='7'>
                    <div>
                        <h2>Stays in selected map area</h2>
                        <br/>
                        <button type="button" className="btn btn-light border-secondary rounded-pill">Cancelation flexibility</button>
                            {"\u00a0"}
                        <button type="button" className="btn btn-light border-secondary rounded-pill">Type of places</button>
                            {"\u00a0"}
                        <button type="button" className="btn btn-light border-secondary rounded-pill">Price</button>
                            {"\u00a0"}
                        <button type="button" className="btn btn-light border-secondary rounded-pill">Instant Book</button>
                            {"\u00a0"}
                        <button type="button" className="btn btn-light border-secondary rounded-pill">More Filters</button>

                    </div>
                    <br/>


                    <div>
                        <p>Review COVID-19 travel restrictions before you book.<a href="#">Learn more</a></p>
                    </div>

                    <hr/>
                    {items}
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    </Col>
                    <Col md='5'>

                        <div className="col-5 container-fluid bg-light p-0">
                            <img className="sticky-top" src="map.PNG"/>
                        </div>

                    </Col>
                    
                </section>
            
        </>
    );
}

export default PlaceListing;