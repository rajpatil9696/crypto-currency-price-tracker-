import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Price"]]);

  useEffect(() => {
    if (historicalData && historicalData.prices) {
      const formattedData = [["Date", "Price"]];

      historicalData.prices.forEach(([timestamp, price]) => {
        const date = new Date(timestamp).toLocaleDateString(); // fix typo
        formattedData.push([date, price]);
      });

      setData(formattedData);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="400px"
      width="100%"
      options={{
        title: 'Crypto Price Over Time',
        curveType: 'function',
        legend: { position: 'bottom' },
        hAxis: { title: 'Date' },
        vAxis: { title: 'Price' },
      }}
    />
  );
};

export default LineChart;


// import React, { useEffect, useState } from 'react'
// import Chart from 'react-google-charts';

// const LineChart = ({historicalData}) => {

//     const[data,setData]=useState([["Date" , "Prices"]])

//     useEffect(()=>{
//         let dataCopy=[["Date" , "Prices"]];
//         if(historicalData.Prices){
//             historicalData.Prices.map((item)=>{
//                 dataCopy.push([`${new Date(item[0]).toLocalDateString().slice(0,-5) }` ,item[1]])
//             })
//         setData(dataCopy);
//         }
//     },[historicalData])

//   return (
//     <Chart chartType="LineChart"
//      data={data}
//      height="100%"
//      legendToggle ></Chart>
//   )
// }

// export default LineChart

