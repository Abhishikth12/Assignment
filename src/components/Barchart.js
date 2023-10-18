
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";


import { Bar } from "react-chartjs-2";

import React from "react";

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
const BarChart = () => {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Monthly Sales',
          data: [5, 15, 18, 12, 21, 10, 8, 16, 6, 17, 18, 9],
          backgroundColor: ['lightblue', 'lightblue', 'lightblue', 'lightblue', 'lightblue', 'lightblue', 'lightblue', 'darkblue', 'lightblue', 'lightblue', 'lightblue', 'lightblue'],
          borderRadius: 10,
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      indexAxis: 'x', // Display month labels on the x-axis (horizontal)
      plugins: {
        legend: {
          display: false, // Hide legend
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          display: false, // Hide y-axis grid lines and labels
        },
        x: {
          display: true, // Show x-axis grid lines and labels
          grid: {
            display: false, // Hide x-axis grid lines
          },
        },
      },
    };
  
    return (
      <div className="chart-container" style={{ height: '400px', width: '100%' }}>
      <div style={{display: "flex",justifyContent: "space-between"}}> 
        <h4 style={{display: "flex",marginTop:"0%",marginBottom:"0%"}}>Overview</h4>
       <select  style={{display: "flex",marginTop:"0%",marginBottom:"0%"}}>
            <option value="quarter1">Quarter 1</option>
            <option value="quarter2">Quarter 2</option>
            <option value="quarter3">Quarter 3</option>
            <option value="quarter4">Quarter 4</option>
          </select></div>
        <Bar data={data} options={options} />
      </div>
    );
  };
  
  export default BarChart;