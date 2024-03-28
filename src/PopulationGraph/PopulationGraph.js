import React, { useState, useEffect } from 'react';
import Chart from "chart.js/auto";
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from "chart.js";
import './PopulationGraph.css'

Chart.register(CategoryScale);

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState(null);

  useEffect(() => {
    const fetchPopulationData = async () => {
      try {
        const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        setPopulationData(response.data.data);
        console.log(response.data.data)
        
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchPopulationData();
  }, []);

  if (!populationData) {
    return <div>Loading...</div>;
  }

  
  const years = populationData.map(item => item.Year);
  const populations = populationData.map(item => item.Population);


  const data = {
    labels: years,
    datasets: [
      {
        label: 'Population',
        data: populations,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  

 
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Population',
          
        },
        max: 350000000,
        min: 300000000
        
      },
      x: {
        beginAtZero: true, 
        title: {
          display: true,
          text: 'year'
        }
      }
    }
  };
  

  return (
    <div className='graph-container'>
      <p>US Population Data by Year</p>
      
      <div className='chart'>
      <Bar data={data} options={options}/>
      </div>
      
      
    </div>
  );
};

export default PopulationGraph;
