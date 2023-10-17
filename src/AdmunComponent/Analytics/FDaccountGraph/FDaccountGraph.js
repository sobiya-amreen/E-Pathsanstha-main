import React from 'react'
import AdminTopBar from '../../AdminTopBar/AdminTopBar';
import AdminSideBar from '../../AdminSideBar/AdminSideBar';
import { Link } from 'react-router-dom';
import Chart from "react-apexcharts";
import { useState } from "react";


const FDaccountGraph = () => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          },
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
        ],
      });
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
           
           <h1>FD Account Graph</h1>
            <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="80%"
                  />

                
          
          
          
            </div>



          </div>
        </section>
      </div>
    </div>
  )
}

export default FDaccountGraph
