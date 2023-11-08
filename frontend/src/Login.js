import React, { useState } from "react";
import "./styles/Login.css";
import logo from "./images/logo.png";
import { useNavigate, NavLink } from 'react-router-dom';
import Validation from "./components/LoginValidation"
import axios from 'axios'

function Login() {
    const [isShown, setIsSHown] = useState(false);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values))

        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data.result === true) {
                        localStorage.setItem('user', res.data.result);
                        //console.log(res.data);
                        if (res.data.isAdmin) {
                            navigate('/dashboard', { replace: true });
                        } else {
                            navigate('/home', { replace: true });
                        }
                    } else {
                        alert("No record Existed");
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <>
            <div className={`container`} >
                <div className="login-form">
                    <div className="container1">
                        <img src={logo} className="img-fluid" alt="logo" />
                    </div>
                    <div className="container3">
                        <div className="d-flex" style={{ height: 400 }}>
                            <div className="vr"></div>
                        </div>
                    </div>
                    <div className="container2">
                        <div className="col">
                            <h1 className="text-center">LOGIN</h1>
                            <p className="">
                                Welcome to Jamuna Online Store. Please Login into your account
                            </p>
                            <form className="request-form" action="" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        College Id <span className="req">*</span>
                                    </label>

                                    <input
                                        name='email'
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="id@gmail.com"
                                        onChange={handleInput}
                                        required
                                    />
                                    {errors.email && <span className="text-danger">{errors.email}</span>}
                                </div>
                                <label htmlFor="password" className="form-label">
                                    Password <span className="req">*</span>
                                </label>

                                <input

                                    type={isShown ? "text" : "password"}
                                    id="inputPassword5"
                                    name='password'
                                    className="form-control"
                                    aria-labelledby="passwordHelpBlock"
                                    placeholder="password"
                                    onChange={handleInput}
                                    required
                                />

                                {errors.password && <span className="text-danger">{errors.password}</span>}

                                <button type="submit" id="btn" className="btn d-grid gap-2 col-4 mx-auto">LOGIN</button>
                                <NavLink to="/signup" className=" footer d-grid gap-2 col-6 mx-auto">Don't have an account? Signup</NavLink>
                                <div className=" footer d-grid gap-2 col-6 mx-auto">
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;