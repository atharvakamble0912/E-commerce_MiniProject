import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.png"
import { NavDropdown } from "react-bootstrap"
import { FaUser, FaList, FaShoppingCart, FaPowerOff } from "react-icons/fa"
import { CartState } from '../context/Context'


const navbar = ({ setShow, size }) => {
    const {
        state: { cart },
        dispatch,
        productDispatch,
    } = CartState();



    return (
        <>


            <nav className={`navbar navbar-expand-lg`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">
                        <img src={logo} alt="getfly-logo" width="50" height="50"></img>
                    </a>
                    <NavLink className="navbar-brand" to="/home"><b>Jamuna</b></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/products">Products</NavLink>
                            </li>
                        </ul>


                        <div className='d-flex p-0 '>

                            <div className="nav_box d-flex">

                                <div className="cart" onClick={() => setShow(false)}>
                                    <span>
                                        <NavLink to="/cart"><FaShoppingCart style={{ color: 'black', fontSize: '18px' }} /></NavLink>
                                    </span>
                                    <sup style={{ backgroundColor: '#00A1D9', fontSize: '16px', borderRadius: '75px' }}>{cart.length}</sup>
                                </div>
                            </div>


                            <NavDropdown className='mx-5' title="Profile" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="/updateprofile"><FaUser /><span> Edit Profile</span></NavDropdown.Item>
                                <NavDropdown.Item href="/orders"><FaList /><span> My Orders</span></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/"><FaPowerOff /> Log out</NavDropdown.Item>
                            </NavDropdown>




                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default navbar