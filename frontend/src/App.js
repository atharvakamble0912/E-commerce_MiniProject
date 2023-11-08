// import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
// import Navbar from "../src/components/navbar"
import Home from './Home';
import UpdateProfile from "../src/components/UpdateProfile"
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from "./Admin/Dashboard"
import ReportGenerator from './Admin/ReportGenerator';
import ReceiptGenerator from './Admin/ReceiptGenerator';
import Products from './Products';
import Cart from './Cart';
import Checkout from './components/CheckoutForm';
// import AddCategory from './Admin/AddCategory';
import AddProduct from './Admin/AddProduct';
// import ProtectedRoute from './ProtectedRoute';
import Receipt from './components/receipt';



export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}
function App() {





  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/updateprofile" element={< UpdateProfile />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/receipt" element={<Receipt />} />

        </Routes>
      </Router>



      <Router>
        < Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report-generator" element={<ReportGenerator />} />
          <Route path="/receipt-generator" element={<ReceiptGenerator />} />
          <Route path="/add-products" element={<AddProduct />} />


        </Routes>

      </Router>

      {AddLibrary(
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
        'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js')}
    </>
  );
}

export default App;
