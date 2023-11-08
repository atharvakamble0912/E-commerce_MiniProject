
import React, { useState, useEffect } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import "./styles/Cart.css"
import { CartState } from "./context/Context";
import { AiFillDelete } from "react-icons/ai";
import Rating from "./components/Rating";
import Navbar from "./components/navbar";
import { NavLink } from "react-bootstrap";
import { cartReducer } from "./context/Reducer";



const Cart = ({ cartItems, submitOrder }) => {

    // const handleCart = () => {

    //     cart.length == 0;
    // };


    const {
        state: { cart },
        dispatch,
    } = CartState();
    const [total, setTotal] = useState();

    const numberOfItems = 1;

    const productIDs = [];

    for (let i = 1; i <= numberOfItems; i++) {
        const productID = localStorage.getItem("ID");
        productIDs.push(productID);
    }

    // console.log(productIDs);






    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.product_price) * curr.qty, 0)
        );
    }, [cart]);
    const [product_price, setPrice] = useState(0);

    const [show, setShow] = useState(true);



    return (
        <>
            <Navbar setShow={setShow} size={cart.length} />

            <div className="home">
                <div className="productContainer">
                    <ListGroup>
                        {cart.map((product) => (
                            <ListGroup.Item key={product.product_id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={product.image} alt={product.name} fluid rounded />
                                    </Col>
                                    <Col md={2}>
                                        <span>{product.product_name}</span>
                                    </Col>
                                    <Col md={2}>₹ {product.product_price}</Col>
                                    <Col md={2}>
                                        <Rating rating={product.review} />
                                    </Col>

                                    <Col md={2}>

                                        <Form.Control
                                            as="input"
                                            type="number"
                                            min="1"
                                            value={product.qty}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "CHANGE_CART_QTY",
                                                    payload: {
                                                        id: product.product_id,
                                                        qty: e.target.value,
                                                    },

                                                })
                                            }
                                        >

                                        </Form.Control>

{/* 
                                        <button onClick={() => 
              handleChange(product, 1)} className="btn1"> + </button>

            <button className="btn2">{product.qty}</button>

            <button className="btn3" onClick={() => 
              handleChange(product, -1)}>-</button> */}


                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={() =>
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: product.product_id,
                                                })
                                            }
                                        >
                                            <AiFillDelete fontSize="20px" />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
                <div className="filters summary">
                    <span className="title">Subtotal ({cart.length}) items</span>
                    <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
                    <Button type="button" disabled={cart.length === 0}>
                        <NavLink href="/checkout">Proceed to Checkout</NavLink>

                    </Button>
                </div>
            </div>
        </>
    );
};

export default Cart;

