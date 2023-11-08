import React, { useState } from "react";
import logo from "../images/logo.png";
//import { useNavigate, NavLink } from 'react-router-dom';
//import Validation from "../components/ProfileValidation"
import axios from "axios";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

function UpdateProfile() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setContact] = useState("");
  const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdateProfile = (event) => {
    event.preventDefault();

    // Perform validation on the data (you can add your own validation logic)
    if (!name || !email || !phone || !password) {
      // Display an error message or perform the desired action
      console.error("Invalid data. Please provide all required fields.");
      return;
    }

    const userData = {
      name,
      email,
      phone,
      password,
    };

    axios
      .post("http://localhost:8081/updateprofile", userData)
      .then((response) => {
        alert("Profile Updated")
        navigate('/home')
        console.log(response.data); // Display success message or perform additional actions
      })
      .catch((error) => {
        console.error(error.response.data); // Display error message or handle error case
      });
  };

  const [isShown, setIsSHown] = useState(false);



  //   const togglePassword1 = () => {
  //     setIsSHown1((isShown) => !isShown1);
  //   };
  /*
        const [values, setValues] = useState({
            name: '',
            email: '',
            phone: 0,
            password: '',
            confirm_pass: ''
        })
        const navigate = useNavigate();
        const [errors, setErrors] = useState({})
        const handleInput = (event) => {
            setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        }
        const handleSubmit = (event) => {
            event.preventDefault();
            setErrors(Validation(values))
    
            if (errors.name == "" && errors.email == "" && errors.phone == "" && errors.password == "" && errors.confirm_pass == "") {
                axios.post('http://localhost:8081/updateprofile', values)
                /*.then(res => {
                    navigate('/home')
                })
                .catch(err => console.log(err));
    
            }
        }
    */
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  return (
    <>


      <Navbar setShow={setShow} size={cart.length} />
      <div class={`container `}>
        <div class="signup-form">
          <div class="container1">
            <img src={logo} class="img-fluid" alt="logo" />
          </div>
          <div class="container3">
            <div class="d-flex" style={{ height: 400 }}>
              <div class="vr"></div>
            </div>
          </div>
          <div className="container2">
            <div className="col">
              <h1 className="text-center">Update Profile</h1>

              <form
                className="request-form"
                action=""
                onSubmit={handleUpdateProfile}
              >
                <div className="mb-3">
                  <label htmlFor="name" class="form-label">
                    Name <span className="req">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Sam Joseph"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="email" className="form-label">
                    College Id <span className="req">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput2"
                    placeholder="id@pvppcoe.ac.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Contact Number <span className="req">*</span>
                  </label>
                  <input
                    name="phone"
                    type="phone"
                    className="form-control"
                    id="exampleFormControlInput3"
                    placeholder="12345678"
                    value={phone}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password <span className="req">*</span>
                  </label>
                  <input
                    type={isShown ? "text" : "password"}
                    id="inputPassword5"
                    name="password"
                    className="form-control"
                    aria-labelledby="passwordHelpBlock"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                </div>
                {/* <div className="mb-3">
                  <label htmlFor="confirm_pass" className="form-label">
                    Confirm Password <span className="req">*</span>
                  </label>
                  <input
                    type={isShown1 ? "text" : "password"}
                    id="inputPassword6"
                    name="confirm_pass"
                    className="form-control"
                    aria-labelledby="passwordHelpBlock"
                    placeholder="confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <div className="checkbox-container">
                    <label htmlFor="checkbox">Show password?</label>
                    <input
                      id="checkbox1"
                      type="checkbox"
                      checked={isShown1}
                      onChange={togglePassword1}
                    />
                  </div>
                </div> */}

                <button
                  type="submit"
                  id="btn"
                  className="btn d-grid gap-2 col-6 mx-auto"
                >
                  Update Profile
                </button>

                <div className="footer d-grid gap-2 col-7 mx-auto">
                  <p>www.getflytechnologies.com</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;