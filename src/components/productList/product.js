import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Col,
    Row,
    } from "reactstrap";
import Carousel from "./carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Product = (props)=>{

console.log(props)

const element = <FontAwesomeIcon icon={faHeart} />
    

    
    return(
        <>
        <Row>
            <Col>
                <Card>
                    <Row className="no-gutters">
                        <Col md="4">
                            <Carousel/>
                        </Col>
                        <Col md="8">
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and
                                    make up the bulk of the card's content.
                                    {element}
                                </CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        

        </>
    );


}



export default Product;