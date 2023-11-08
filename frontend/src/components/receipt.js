import React, { useEffect, useState } from "react";
import './style.css'


function Receipt() {

    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8081/checkout');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div>
                <h6 className="text-center" style={{ padding: '30px', fontSize: '30px' }}><i>Thanks For Shopping with GetFly</i></h6>
                {data ? (
                    <div className=" receipt-table text-center">
                        <h6 style={{ padding: '30px', fontSize: '25px' }}>Here is your Receipt</h6>
                        <table id="receipt-main">
                            <tr style={{ width: '15px' }}>
                                <th style={{ width: '100px' }}>Products</th>
                                <th>Price</th>
                            </tr>

                        </table>

                    </div>
                ) : (
                    <div>Loading data...</div>
                )}
            </div>
        </>
    )
}
export default Receipt;