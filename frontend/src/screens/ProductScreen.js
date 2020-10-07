import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
import Product from '../components/Product'

const ProductScreen = ({ match }) => {
    const product = products.find(p => p._id === match.params.id);
    console.log(`these are the products shown: ${product.name}`);
    // products.find(product => product._id === matches Id in the URL)
    return (
        <div>
            <Link className="btn btn-dark my-3" to='/'> GoBack </Link>
            <Row>
                <Col md={6} >
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3} >
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3> {product.name} </h3>
                        </ListGroup.Item>

                        <ListGroup.Item variant='flush'>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>

                        <ListGroup.Item variant='flush'>
                            Price - ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item variant='flush'>
                            {product.description}
                        </ListGroup.Item>

                    </ListGroup>

                </Col>

                <Col md={3} >
                    Add to cart
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Price:
                                    </Col>

                                    <Col>
                                    <strong>${product.price}</strong>
                                    </Col>

                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Status:
                                    </Col>

                                    <Col>
                                    <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                                    </Col>

                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Button className='btn-block' type='button' disabled={product.countInStock === 0} >
                                    Add To Cart
                                    </Button>
                                </Row>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>

            </Row>
        </div>
    )
}

export default ProductScreen
