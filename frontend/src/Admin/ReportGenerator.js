import React from 'react';
import './styles/ReportGenerator.css';
import logo from "../images/logo.png"
import Sidebar from "../components/Sidebar"

const ReportGenerator = () => {


    const dailyProductSellingReport = [
        { product: 'Product A', quantitySold: 10, revenue: 100 },
        { product: 'Product B', quantitySold: 5, revenue: 50 },
        // Add more objects for each product in the daily selling report
    ];

    const productWiseSellingReport = [
        { product: 'Product A', quantitySold: 100, revenue: 1000 },
        { product: 'Product B', quantitySold: 50, revenue: 500 },
        // Add more objects for each product in the product-wise selling report
    ];

    const productWiseStockAvailabilityReport = [
        { product: 'Product A', stockAvailability: 200 },
        { product: 'Product B', stockAvailability: 100 },
        // Add more objects for each product in the stock availability report
    ];

    const monthlySellingReport = [
        { month: 'January', quantitySold: 1000, revenue: 10000 },
        { month: 'February', quantitySold: 500, revenue: 5000 },
        // Add more objects for each month in the monthly selling report
    ];


    return (
        <>
        <Sidebar />
        <div className="report-generator-page">
            <header className='report-header'>
                <img id='img' src={logo} alt="Company Logo" />
            </header>
            <section>
                <h1>Daily Product Selling Report</h1>
                {/* Render daily product selling report */}
                {/* Example: */}
                <table className='report-table'>
                    {/* Render table headers */}
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity Sold</th>
                            <th>Revenue</th>
                        </tr>
                    </thead>
                    {/* Render table rows */}
                    <tbody>
                        {dailyProductSellingReport.map((item, index) => (
                            <tr key={index}>
                                <td>{item.product}</td>
                                <td>{item.quantitySold}</td>
                                <td>{item.revenue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            {/* ... Rest of the sections */}
            <section>
                <h1>Product Wise Selling Report</h1>
                {/* Render daily product selling report */}
                {/* Example: */}
                <table>
                    {/* Render table headers */}
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity Sold</th>
                            <th>Revenue</th>
                        </tr>
                    </thead>
                    {/* Render table rows */}
                    <tbody>
                        {productWiseSellingReport.map((item, index) => (
                            <tr key={index}>
                                <td>{item.product}</td>
                                <td>{item.quantitySold}</td>
                                <td>{item.revenue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section>
                <h1>Product Wise Stock Availability Report</h1>
                {/* Render daily product selling report */}
                {/* Example: */}
                <table>
                    {/* Render table headers */}
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity Sold</th>
                            <th>Revenue</th>
                        </tr>
                    </thead>
                    {/* Render table rows */}
                    <tbody>
                        {productWiseStockAvailabilityReport.map((item, index) => (
                            <tr key={index}>
                                <td>{item.product}</td>
                                <td>{item.quantitySold}</td>
                                <td>{item.revenue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section>
                <h1>Monthly Selling Report</h1>
                {/* Render daily product selling report */}
                {/* Example: */}
                <table>
                    {/* Render table headers */}
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity Sold</th>
                            <th>Revenue</th>
                        </tr>
                    </thead>
                    {/* Render table rows */}
                    <tbody>
                        {monthlySellingReport.map((item, index) => (
                            <tr key={index}>
                                <td>{item.product}</td>
                                <td>{item.quantitySold}</td>
                                <td>{item.revenue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

        </div>
        </>
    );
};

export default ReportGenerator;
