import React from "react";
import "./styles/Dashboard.css"
import { Chart, ArcElement } from 'chart.js'
import { registerables } from 'chart.js';
import { FaDollarSign } from 'react-icons/fa'
import { RiShoppingCartFill } from 'react-icons/ri'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import Sidebar from '../components/Sidebar';
Chart.register(...registerables);
Chart.register(ArcElement);

function Dashboard() {

    const data1 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [100, 50, 40, 210, 30, 170],
                backgroundColor: 'purple',
                borderColor: 'red',
                borderWidth: 1,
            },
        ],
    };

    // Options for the bar graph
    const options1 = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const data = {
        labels: ['Clothing', 'Shoes', 'Devices'],
        datasets: [
            {
                data: [300, 200, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };
    const options = {
        labels: ['Jeans', 'Tshirt', 'Pant'],

    }


    return (
        <>
            <Sidebar />
            <div className="main-board">
                <div className="container">
                    <div className="contmain">
                        <div className="sales">
                            <div className="dol">
                                <h4> <FaDollarSign /></h4>
                            </div>
                            <h3>Total Sales</h3>
                            <h5>$54290</h5>
                        </div>
                        <div className="orders">
                            <h4><RiShoppingCartFill /></h4>
                            <h3>Total Orders</h3>
                            <h5>6543</h5>
                        </div>
                        <div className="products">
                            <h4><BsFillBagCheckFill /></h4>
                            <h3>Total Products</h3>
                            <h5>6</h5>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="contmain">

                        <div className="cont2">
                            <Bar data={data} options={options1} style={{ width: "80%", height: "100%", marginLeft: "10%" }} />
                        </div>


                        <div className="cont1">
                            <h4>Overall stats</h4>
                            <Pie data={data} options={options} style={{ width: "75%", height: "80%", marginLeft: "10%" }} />
                        </div>
                    </div>
                </div>


            </div>





        </>
    )

}

export default Dashboard
