import { createContext, useContext, useReducer, useEffect, useState } from "react";
// import React from "react";
import { cartReducer, productReducer } from "./Reducer";
import products from "../Data";
import axios from "axios";

const Cart = createContext();

const getLocalCartData = () => {
    // const [allProducts, setAllProducts] = useState(products)

    const fetchData = async () => {
        const { data } = await axios.get("http://localhost:8081/products")
        console.log(data.data, "REDUCER");
    }

    fetchData()

    let localCartData = localStorage.getItem("myCart");
    if (localCartData === "" || localCartData === null) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
};

const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    Shipping_fee: 50000,
};

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: initialState.cart,
    });

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byRating: 0,
    });


    useEffect(() => {
        localStorage.setItem("myCart", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <Cart.Provider
            value={{ state, dispatch, productState, productDispatch }}
        >
            {children}
        </Cart.Provider>
    );
};

export const CartState = () => {
    return useContext(Cart);
};

export default Context;