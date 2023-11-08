import React from 'react';
import "./style.css";
import { Card, Button } from "react-bootstrap";
// import Rating from "./Rating";
import { CartState } from '../context/Context';

const ProductCard = ({ product }) => {
    const { dispatch } = CartState();

    const { product_id, product_name, product_description, product_price, image } = product;

    const handleClick = (productId) => {
        localStorage.setItem('ID', productId);
        console.log('This is called for ID:', productId);
    };

    return (
        <div>
            <Card className='h-100'>
                <Card.Img className='card-img' src={image} />
                <Card.Body>
                    <Card.Title>{product_name}</Card.Title>
                    <Card.Text>{product_description}</Card.Text>
                    {/* <Rating rating={review} /> */}
                    <Card.Text className='card-price'><b>Cost: </b>Rs.{product_price}</Card.Text>
                    <Button
                        id={`btn-${product_id}`}
                        className='btn d-grid gap-2 col-5 mx-auto'
                        style={{ backgroundColor: '#00A1D9' }}
                        // onClick={() => handleClick(product_id)}
                        onClick={() =>
                            dispatch({
                                type: "ADD_TO_CART",
                                payload: product,
                            })
                        }
                    >
                        Add to Cart
                    </Button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductCard;
