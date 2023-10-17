import React from 'react'
import { Link } from 'react-router-dom'
import AdminSideBar from '../../AdminSideBar/AdminSideBar'
import AdminTopBar from '../../AdminTopBar/AdminTopBar'
import Chart from 'react-apexcharts'
import { useState } from "react";
import './loanGraph.css'

const LoanGraph = () => {
  // const [state, setState] = useState({
  //     options: {},
  //     series: [44, 55, 41, 17, 15],
  //     labels: ['A', 'B', 'C', 'D', 'E']
  //   }).



  const [state, setState] = useState({
    options: {},
    // series: [44, 55, 41, 17, 15,45],
    // labels: ['A', 'B', 'C', 'D', 'E','F']

  })

  const chartData = {
    series: [44, 55, 13, 43, 22, 30, 10], // Replace with your data
    labels: ['All Members', 'Retired Members', 'Dead Members', 'FD Account Members', 'RD Account Members',' Regular Loan Members','Emergency Loan Members'], // Replace with your labels
    colors: ['#FF4560', '#008FFB', '#FEB019', '#00E396', '#775DD0', '#e84393', '#833471'], // Replace with your colors
  };



  const chartOptions = {
    chart: {
      type: 'pie',
    },
    labels: chartData.labels,
    colors: chartData.colors,
  };

  return (
    <div>
      <div className="theme-red">
        {/* <!-- Page Loader --> */}
        {/* <Loader /> */}
        {/* <!-- #END# Page Loader -->
   
   
   
   
   
  <!-- Search Bar --> */}
        <div className="search-bar">
          <div className="search-icon">
            <i className="material-icons">search</i>
          </div>
          <input type="text" placeholder="START TYPING..." />
          <div className="close-search">
            <i className="material-icons">close</i>
          </div>

        </div>
        {/* <!-- #END# Search Bar -->
   
   
   
   
  <!-- Top Bar --> */}
        <AdminTopBar />
        {/* <!-- #Top Bar --> */}



        {/* sideBar */}


        <AdminSideBar />
        {/* end sideBar */}

        <section className="content">
          <Link to="/">  <h4 >DASHBOARD</h4></Link>
          <div className="container-fluid">
            <div className="block-header">
              <h1>Loan Graph</h1>

              {/* <Chart className="loanchart"
                options={state.options}
                series={state.series}
                type="donut"
                width="600" /> */}


                

            <Chart className="loanchart"
                // options={state.options}
                // series={state.series}
                options={chartOptions}
                series={chartData.series}
          
                type="donut"
                width="600" />



            </div>



          </div>
        </section>
      </div>
    </div>
  )
}

export default LoanGraph
