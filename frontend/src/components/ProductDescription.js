// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { CartState } from '../context/Context';
// import './ProductDescription.css';


// const ProductDescription = () => {
//     const { dispatch } = CartState();
//     const { id } = useParams();

//     // Find the product with the matching ID
//     const { product_id, product_name, product_description, product_price, image } = product;


//     if (!product) {
//         return <div>Product not found</div>;
//     }

//     return (
//         // <div className="product-description">
//         //     <h1 className="product-name">{product.productName}</h1>
//         //     <img src={product.image} alt={product.productName} />
//         //     <p className="product-description-text">{product.description}</p>
//         //     <p>Category: {product.category}</p>
//         //     <p className="product-price">Price: ${product.price}</p>
//         // </div>

//         <div className="product-description">
//             <div className="product-image">
//                 <img src={product.img} alt={product.Name} />
//             </div>
//             <div className="product-details">
//                 <h1 className="product-name">{product.Name}</h1>
//                 <p className="product-description-text">
//                     {product.desc}
//                 </p>

//                 <div className="product-price">
//                     <h2>{product.price}</h2>
//                 </div>
//                 <div className="product-actions">
//                     <button className="add-to-cart-btn" to="/cart">Add to Cart</button>

//                 </div>
//             </div>
//         </div>

//     );
// };

// export default ProductDescription;

import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDescriptionPage = () => {
    const { productId } = useParams();

    // You can fetch the product details for the given productId using an API or any other data source

    return (
        <div>
            <h1>Product Description Page</h1>
            <p>Product ID: {productId}</p>
            {/* Render the product details */}
        </div>
    );
};

export default ProductDescriptionPage;
