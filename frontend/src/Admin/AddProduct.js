import React, { useState } from 'react';
import axios from 'axios';
//import { FaCloudUploadAlt } from "react-icons/fa";
import "../Admin/styles/AddProduct.css"
import { useNavigate } from 'react-router-dom';
import { IKContext, IKImage, IKUpload } from "imagekitio-react";
import Sidebar from '../components/Sidebar';
import { Button } from 'react-bootstrap';



const AddProduct = () => {
    const navigate = useNavigate();
    const [prod_name, setName] = useState("");
    const [prod_description, setDescription] = useState("");
    const [prod_price, setPrice] = useState("");
    const [prod_image, setImage] = useState(null);
    const [respourl, setRe] = useState(null);
    const [flag, setFlag] = useState(false);
    // const [categories, setCategories] = useState([]);


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(respourl)

        const formData = new FormData();
        formData.append("name", prod_name);
        formData.append("description", prod_description);
        formData.append("price", prod_price);
        formData.append("image", respourl);


        // setTimeout( async () => {
        const { data } = await axios
            .post("http://localhost:8081/add-products", formData)
        alert("Product successfully added")
        console.log(data);

        // }, 3000)




        // .then(res => {
        //     if (res.data == 'Success') {

        //         navigate('/dashboard');
        //     }
        //     else {
        //         alert("Fail");
        //     }

        // })
        // .catch(err => console.log(err));
    };
    return (
        <>
            <Sidebar />
            <div>
                <h2 style={{ textAlign: 'center' }}>Add Product</h2>
                <form className='addproductform' onSubmit={handleSubmit} encType="multipart/form-data" >
                    <div>
                        <label>Name:</label>
                        <input id='input-field1' type="text" value={prod_name} onChange={handleNameChange} />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea value={prod_description} onChange={handleDescriptionChange} />
                    </div>
                    <div>
                        <label>Price:</label>
                        <input id='input-field2' type="number" value={prod_price} onChange={handlePriceChange} />
                    </div>
                    <div>
                        <label>Image:</label>
                        <IKContext
                            publicKey="public_pZz4S7aul+bPi7qA2PNvCTjKmeQ="
                            urlEndpoint="https://ik.imagekit.io/f4n7cqewp"
                            transformationPosition="path"
                            authenticationEndpoint="http://localhost:8081/auth">

                            {/* // Image component */}
                            {/* <IKImage path="/default-image.jpg" transformation={[{
                             "height": "300",
                             "width": "400"
                             }]} /> */}

                            {/* // Image upload */}
                            <IKUpload fileName="my-upload" onSuccess={(r) => {
                                console.log(r);
                                setRe(r.url)
                                setFlag(!flag);
                            }
                            } />
                        </IKContext>

                    </div>
                    {!flag && <p>Wait for file upload</p>}
                    <Button id='prod-btn' type={!flag ? `button` : `submit`} >Add Product</Button>
                </form>
            </div>

        </>



    );
};

export default AddProduct;
