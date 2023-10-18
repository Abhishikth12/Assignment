import { useState } from "react";
import React from "react";
import "../Styles/FourthSection.css";
const FourthSection = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("Last Three Days");
  
    const handlePeriodChange = (e) => {
      setSelectedPeriod(e.target.value);
      // You can handle logic here based on the selected period (e.g., fetch data from an API).
    };
  
    const tableData = [
      { productName: "Product A",description: "Description of Product A", stock:"Instock",Price: "$50", totalSales: 200 },
      { productName: "Product B",description: "Description of Product B", stock: "Instock",Price: "$30", totalSales: 150 },
      // Add more dummy data as needed
    ];
  
    return (
      <div className="fourth-section">
        <div className="header">
          <h4>Product Sell</h4>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <label>
              <select value={selectedPeriod} onChange={handlePeriodChange}>
                <option value="Last Three Days">Last Three Days</option>
                <option value="Last 30 Days">Last 30 Days</option>
              </select>
            </label>
          </div>
        </div>
        <table className="product-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Total Sales</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                 <td>
                  <div className="product-name">{item.productName}</div>
                  <div className="product-description">{item.description}</div>
                 </td>
                <td>{item.stock}</td>
                <td>{item.Price}</td>
                <td>{item.totalSales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default FourthSection;