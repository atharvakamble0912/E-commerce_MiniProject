import React, { useState } from 'react'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import "./styles/Home.css"
import { NavLink } from 'react-router-dom'
import { FaPiggyBank, FaShuttleVan, FaMobileAlt } from 'react-icons/fa'
import { Carousel } from "react-bootstrap"
import Navbar from './components/navbar'


function Home() {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);

    return (
        <>
            <Navbar setShow={setShow} size={cart.length} />
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            src={img1}
                            alt="First slide"
                        />
                        <NavLink id='banner-btn' className='btn d-grid gap-2 col-2 mx-auto' to="/products">Explore</NavLink>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            src={img2}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            src={img3}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>




                <div className="row d-flex justify-content-center mb-4">
                    <div className='text-center p-0 margin:0'>
                        <div className="row d-flex justify-content-center mb-4">
                            <h2 className="mb-4 text-dark  "><b>Features</b></h2>
                        </div>

                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <FaPiggyBank style={{ width: '75px', height: '75px' }} />
                                <h4 className="my-4"><b>Budget Friendly</b></h4>
                                <p className="text-dark">Discount prices on your favourite brands.</p>
                            </div>

                            <div className="col-md-4 mb-4">
                                <FaShuttleVan style={{ width: '75px', height: '75px' }} />
                                <h4 className="my-4"><b>Quick Delivery</b></h4>
                                <p className="text-dark">Delivery within 3 days ater the orfer is placed</p>
                            </div>
                            <div className="col-md-4 mb-4">
                                <FaMobileAlt style={{ width: '75px', height: '75px' }} />
                                <h4 className="my-4"><b>Shop on App</b></h4>
                                <p className="text-dark">Now shop on your cellphone
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;