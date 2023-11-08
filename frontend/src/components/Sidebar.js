import React from "react";
import { NavLink, Button } from "react-bootstrap";
import "../components/style.css"
import { FaTachometerAlt, FaRegPlusSquare, FaClone, FaFileAlt } from "react-icons/fa";
import logo from "../images/logo.png"
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // axios.get('http://localhost:8081/login')
        //     .then((response) => {
        //         // Logout successful, perform any necessary client-side cleanup
        //         console.log('Logout successful');
        //         alert("Logout Successful!");
        //         navigate("/", { replace: true });
        //     })
        //     .catch((error) => {
        //         // Handle error
        //         console.error('Logout failed:', error);
        //     });
        alert("Logout Successful");
        localStorage.clear();
        navigate('/', { replace: true });

    };


    return (

        <>
            <nav className={`navbar navbar-expand-lg`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="getfly-logo" width="50" height="50"></img>
                    </a>
                    <NavLink className="navbar-brand" to="/"><b>Admin</b></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex">
                        <span style={{ padding: '2px', fontSize: '15px' }}><NavLink><FaTachometerAlt /></NavLink></span>
                        <span className="d-flex" style={{ padding: '2px', fontSize: '16px' }}><NavLink href="/dashboard" >Dashboard</NavLink></span>
                    </div>
                    {/* <div className="d-flex">
                        <span style={{ padding: '2px', fontSize: '15px' }}><NavLink><FaRegPlusSquare /></NavLink></span>
                        <span className="d-flex" style={{ padding: '2px', fontSize: '16px' }}><NavLink href="/add-category">Add Category</NavLink></span>

                    </div> */}
                    <div className="d-flex">
                        <span style={{ padding: '2px', fontSize: '15px' }}><NavLink><FaRegPlusSquare /></NavLink></span>
                        <span className="d-flex" style={{ padding: '2px', fontSize: '16px' }}> <NavLink href="/add-products" >Add Products</NavLink></span>

                    </div>


                    {/* <div className="d-flex">
                        <span style={{ padding: '2px', fontSize: '15px' }}><NavLink><FaClone /></NavLink></span>
                        <span className="d-flex" style={{ padding: '2px', fontSize: '16px' }}><NavLink href="/receipt-generator" >Receipt Generator</NavLink></span>
                    </div> */}

                    <div className="d-flex">
                        <span style={{ padding: '2px', fontSize: '15px' }}><NavLink><FaFileAlt /></NavLink></span>
                        <span className="d-flex" style={{ padding: '2px', fontSize: '16px' }}><NavLink href="/report-generator" >Report Generator Page</NavLink></span>
                    </div>
                    <div className="d-flex">

                        <span className="d-flex" style={{ padding: '2px', fontSize: '16px' }}><Button style={{ background: '#00A1D9' }} onClick={handleLogout}>Log Out</Button></span>
                    </div>




                </div>
            </nav >



        </>
    )
}

export default Sidebar