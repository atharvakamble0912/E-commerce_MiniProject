import React from 'react'
import { Form, Button } from "react-bootstrap"
import "../components/style.css"
import { CartState } from "../context/Context";
import Rating from './Rating'

const Filters = () => {

    const {
        productDispatch,
        productState: { sort, byRating, byStock },
    } = CartState();

    return (
        <div className='filters'>
            <span className='title'>Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Low to High"
                    name="group1"
                    type="radio"
                    id={'inline1'}
                    onChange={() =>
                        productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "lowToHigh",
                        })
                    }
                    checked={sort === "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="High to Low"
                    name="group1"
                    type="radio"
                    id={'inline2'}
                    onChange={() =>
                        productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "highToLow",
                        })
                    }
                    checked={sort === "highToLow" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={() =>
                        productDispatch({
                            type: "FILTER_BY_STOCK",
                        })
                    }
                    checked={byStock}
                />
            </span>
            <span className='d-flex'>
                <label style={{ paddingRight: 10 }}>Ratings:</label>
                <Rating
                    rating={byRating}
                    onClick={(i) =>
                        productDispatch({
                            type: "FILTER_BY_RATING",
                            payload: i + 1,
                        })
                    }
                    style={{ cursor: "pointer" }} />

            </span>


            <span>
                <Button
                    onClick={() =>
                        productDispatch({
                            type: "CLEAR_FILTERS",
                        })
                    }>Clear Filter</Button>
            </span>

        </div >
    )
}

export default Filters