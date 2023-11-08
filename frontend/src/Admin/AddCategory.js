import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar"


function AddCategory() {
    const navigate = useNavigate();

    const [category, setCategory] = useState({
        name: '',

    });

    const handleChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/add-category?category_name = {category_name}', category)
            .then((response) => {

                if (response.data.length > 0) {
                    // Category already exists, show an error message or handle it as desired
                    alert('Category already exists');
                }
                else {
                    // Category does not exist, proceed with creating the category
                    axios.post('http://localhost:8081/add-category', category)
                        .then((response) => {
                            alert("Category Successfully added")
                            navigate('/add-products')

                        })
                }

            })
            .catch((error) => {
                console.error(error);
                // Handle error, e.g., show an error message
            });

    };

    return (
        <>

            <Sidebar />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ width: "50%", padding: '8px', margin: '15px' }}>Product Category</Form.Label>
                    <input
                        type="text"
                        id="name"
                        name="cat_name"
                        placeholder='Category'
                        value={category.cat_name}
                        onChange={handleChange}
                        style={{ margin: '15px', width: '50%' }}

                    />


                </Form.Group>


                <Button type="submit" style={{ margin: "15px", backgroundColor: '#00A1D9' }}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default AddCategory