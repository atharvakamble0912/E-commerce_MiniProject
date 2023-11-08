import React, { useState, useEffect } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { CartState } from '../context/Context';
import { ListGroup, Row, Col, Table } from 'react-bootstrap';




const Checkout = () => {


  const navigate = useNavigate();
  const [data, setData] = useState(null);


  const handleCart = () => {
    values.amount = total;

    alert("Order placed successfully!");
    dispatch({ type: "EMPTY_CART" });


  };
  //const { cart } = useContext(CartState);
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.product_price) * curr.qty, 0)
    );
  }, [cart]
  );
  const [product_price, setPrice] = useState(0);

  const [values, setValues] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    amount: 0,

  })




  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8081/checkout", values)
      .then(res => {
        // console.log(res)
        navigate('/home')
        // navigate('/receipt')
      })


  }
  return (
    <>
      <div className="checkout-container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <h3 className="title">billing address</h3>
              <div className="inputBox">
                <label htmlFor="name" className="text-capitalize">Full Name :</label>
                <input type="text"
                  placeholder="john deo"
                  name='name'
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="inputBox">
                <label htmlFor="email" className="text-capitalize">E-mail :</label>
                <input name='email' type="email" placeholder="example@example.com" onChange={handleInput} required />
              </div>
              <div className="inputBox">
                <label htmlFor="address" >Address :</label>
                <input name='address' type="text" placeholder="room - street - locality" onChange={handleInput} required />
              </div>
              <div className="inputBox">
                <label htmlFor="city" >City :</label>
                <input name='city' type="text" placeholder="mumbai" onChange={handleInput} required />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <label htmlFor="state">State :</label>
                  <input name='state' type="text" placeholder="Maharshtra" onChange={handleInput} required />
                </div>
                {/* <div className="inputBox">
                <label htmlFor="zipcode">Zip code :</label>
                <input name='zipcode' type="text" placeholder="123 456" onChange={handleChange} required />
              </div> */}
              </div>
            </div>
            <div className="col">
              <h3 className="title">payment</h3>
              <div className="radio">
                <label style={{ padding: '5px', marginLeft: '2px' }}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                    style={{ padding: '5px', marginRight: '10px' }}
                    required
                  />
                  Cash On Delivery
                </label>
              </div>

              <div style={{ padding: '15px' }}>
                <h6 style={{ textAlign: ' center' }}><b>ORDERS</b></h6>
                <ListGroup>
                  {cart.map((product) => (

                    <ListGroup>

                      <ListGroup.Item key={product.product_id}>
                        <Table>

                          <Row>
                            <Col md={6}>
                              <span >{product.product_name}</span>
                            </Col>
                            <Col md={5} >₹ {product.product_price}</Col>
                          </Row>
                        </Table>



                      </ListGroup.Item>

                    </ListGroup>))}
                </ListGroup>
              </div>

              <span name='amount' type='number' style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>



            </div>
          </div>
          <input type="submit" value="Confirm Order" className="submit-btn" onClick={handleCart} />
        </form>
      </div>
    </>
  );

};

export default Checkout;