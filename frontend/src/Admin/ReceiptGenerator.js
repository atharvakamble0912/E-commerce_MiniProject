import React, { useState } from 'react';
import '../Admin/styles/Receipt.css'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Sidebar from "../components/Sidebar"


const ReceiptGenerator = () => {
    const [customerName, setCustomerName] = useState('John Doe');
    const [orderDate, setOrderDate] = useState('2023-06-19');
    const [orderID, setOrderID] = useState('123456');
    const [paymentStatus, setPaymentStatus] = useState('Paid');
    const [receiptItems, setReceiptItems] = useState([
        { product: 'Product 1', quantity: 2, price: 10 },
        { product: 'Product 2', quantity: 1, price: 5 },
        { product: 'Product 3', quantity: 3, price: 15 },
    ]);

    const generatePDF = () => {
        // Create a new jsPDF instance
        const doc = new jsPDF();

        // Set the receipt title
        doc.setFontSize(18);
        doc.text('Receipt', 10, 10);

        // Set customer details
        doc.setFontSize(12);
        doc.text(`Customer: ${customerName}`, 10, 20);
        doc.text(`Order Date: ${orderDate}`, 10, 27);
        doc.text(`Order ID: ${orderID}`, 10, 34);
        doc.text(`Payment Status: ${paymentStatus}`, 10, 41);

        // Set the receipt content using autoTable plugin
        const tableData = [
            ['Product', 'Quantity', 'Price'],
            ...receiptItems.map(item => [item.product, item.quantity, `$${item.price}`]),
        ];

        // Set the receipt table
        doc.autoTable({
            startY: 50,
            head: [tableData[0]],
            body: tableData.slice(1),
        });

        // Calculate totals
        const subtotal = receiptItems.reduce((total, item) => total + item.quantity * item.price, 0);
        const discount = 10;
        const totalDiscount = (subtotal * discount) / 100;
        const tax = 10;
        const totalTax = (subtotal * tax) / 100;
        const totalAmount = subtotal - totalDiscount + totalTax;

        // Set totals
        doc.setFontSize(12);
        doc.text(`Subtotal: $${subtotal.toFixed(2)}`, 10, doc.autoTable.previous.finalY + 10);
        doc.text(`Discount: ${discount}% - $${totalDiscount.toFixed(2)}`, 10, doc.autoTable.previous.finalY + 17);
        doc.text(`Tax: ${tax}% - $${totalTax.toFixed(2)}`, 10, doc.autoTable.previous.finalY + 24);
        doc.text(`Total: $${totalAmount.toFixed(2)}`, 10, doc.autoTable.previous.finalY + 31);

        // Save the PDF file
        doc.save('receipt.pdf');
    };

    return (
    <>
        <Sidebar />

        <div className="receipt-container">
            <h1 className='receipt-title'>Receipt Generator</h1>
            <div className="customer-details">
                <label>Customer Name:</label>
                <input
                    type="text"
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                />
                <label>Order Date:</label>
                <input
                    type="date"
                    value={orderDate}
                    onChange={e => setOrderDate(e.target.value)}
                />
                <label>Order ID:</label>
                <input
                    type="text"
                    value={orderID}
                    onChange={e => setOrderID(e.target.value)}
                />
                <label>Payment Status:</label>
                <select
                    value={paymentStatus}
                    onChange={e => setPaymentStatus(e.target.value)}
                >
                    <option value="Paid">Paid</option>
                    {/* <option value="Pending">Pending</option> */}
                    <option value="Cancelled">Cancelled</option>
                </select>
            </div>
            <table className="receipt-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {receiptItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.product}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="receipt-btn"  onClick={generatePDF}>Print Receipt</button>
        </div>
        </>
    );
};


export default ReceiptGenerator;
