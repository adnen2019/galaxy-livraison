
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);




export default function DoughnutChart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: props.title ,
      },
    },
   };
  const data = {
    labels: props.labels,
    datasets: [
      {
        title:"Entretiens",
        label: '# of Votes',
        data: props.data,
        backgroundColor: props.colors,
        borderColor: props.colors,
        borderWidth: 1,
      },  
    ],
  };
  return (
    <div><Doughnut options={options} data={data} /></div>
  )
}
