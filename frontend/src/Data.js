import axios from "axios";

let products = [
    {
        id: "1001",
        Name: "Nike Turns Iconic Air Jordans Into Golf Shoes",
        description: "Sole: Rubber,Width: Medium, Closure:Lace-up",
        category: "Shoes",
        price: "90000",
        img: "https://images.solecollector.com/complex/image/upload/f_auto,fl_lossy,q_auto/qmk8loy7wyv4see0c0uj.jpg",
        review: 5.0,
        amount: 1
    },
    {
        id: "1002",
        Name: "Mens Air Jordan 1 Mid Se Running Shoe",
        description: "Sole: Rubber, Closure: Lace-Up,Shoe Width: Medium, Warranty not applicable for this product",
        category: "Shoes",
        price: "25905",
        img: "https://m.media-amazon.com/images/I/61XqKiKiHIL._UY575_.jpg",
        review: 4.0,
        amount: 1
    },
    {
        id: "1003",
        Name: "Nike Mens Air Jordan 1 Mid Se Running Shoe",
        description: "Sole: Rubber,Closure: Lace-Up ,Fit Type: Regular,Shoe Width: Medium",
        category: "Shoes",
        price: "62122",
        img: "https://m.media-amazon.com/images/I/51PdiF8O0VS._UY695_.jpg",
        review: 4.5,

        amount: 1
    },
    {
        id: "1004",
        Name: "Marvel: MCU Heroes",
        description: "100% Cotton,Machine Wash",
        category: "Clothing",
        price: "699",
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1681493841_7651026.jpg?format=webp&w=360&dpr=1.5",
        review: 3.0,

        amount: 1
    },
    {
        id: "1005",
        Name: "Peanuts: Chillin",
        description: "Premium Heavy Gauge Fabric,80% Cotton 20% Polyester,Machine Wash",
        category: "Clothing",
        price: "699",
        img: "https://m.media-amazon.com/images/I/51xY43UizoL._UY606_.jpg",
        review: 3.0,
        amount: 1
    },
    {
        id: "1006",
        Name: "F.R.I.E.N.D.S: T-shirt",
        description: "100% Cotton, Machine Wash",
        category: "Clothing",
        price: "499",
        img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1670086208_5935713.jpg?format=webp&w=360&dpr=1.5",
        review: 4.0,
        amount: 1
    },

];



const fetchData = async () => {
    const { data } = await axios.get("http://localhost:8081/products")
    console.log(data, "DATA CONTEXT")
    products = data.data
}

fetchData();
export default products;
