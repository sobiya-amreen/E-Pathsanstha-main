import React from "react";
// import Loader from "../Loader/Loader";
import { FcDebt,FcDonate,FcConferenceCall,FcCancel,FcBusinessman,FcMoneyTransfer,FcServices,FcInvite,FcCurrencyExchange,FcDisapprove,FcSettings,FcSurvey,FcViewDetails,FcPieChart,FcSimCardChip } from "react-icons/fc";
import { BsCurrencyRupee } from "react-icons/bs";
import { RiHandCoinLine } from "react-icons/ri";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import { Link } from "react-router-dom";
import  "./AdminDashBoard.css"
import AdminTopBar from "../AdminTopBar/AdminTopBar";
import Chart from 'react-apexcharts'
import { useState } from "react";
import PiChart from "../Graphs/PiChart";
import StaticGraph from "../Graphs/StaticGraph";

const AdminDashBoard = () => {
  // const [state, setState] = useState({
  //   options: {},
  //   series: [44, 55, 41, 17, 15],
  //   labels: ['A', 'B', 'C', 'D', 'E']
  // })



  



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
       <AdminTopBar/>
        {/* <!-- #Top Bar --> */}


        
{/* sideBar */}


<AdminSideBar  />
{/* end sideBar */}

        <section className="content">
             <Link to="/">  <h4 >DASHBOARD</h4></Link>
          <div className="container-fluid">
            <div className="block-header">
            
            </div>

            {/* <!-- Widgets --> */}
            <div className="row clearfix">
            
            <Link to="/newshare">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-pink hover-expand-effect">
                  <div className="icon">
            <FcPieChart style={{fontSize:'70'}}/>
                   
                  </div>
                  <div className="content">
                    <div className="text">Total Share Amount(सभासद भाग) : 64434.0</div>
                   <p>View Detail</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="125"
                      data-speed="15"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
              </Link>



              <Link to="/monthlydeposit">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-cyan hover-expand-effect">
                  <div className="icon">
                    <FcDebt style={{fontSize:'70'}}/>
                    <i className="material-icons">monetization_on</i>
                  </div>
                  <div className="content">
                    <div className="text">Total Monthly Balance (सभासद कायम ठेव) : 19800.0</div>
                    <p>View Detail</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="257"
                      data-speed="1000"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
              </Link>

              <Link to="/insurence">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-light-green hover-expand-effect">
                  <div className="icon">
                  <FcInvite style={{fontSize:'70'}}/>
                    {/* <i className="material-icons">enhanced_encryption</i> */}
                  </div>
                  <div className="content">
                    <div className="text">Insurance(सभासद कल्याण निधी) : 27600.0</div>
                    <p>View Detail</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="243"
                      data-speed="1000"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
              </Link>

              <Link to="/addfd">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-orange hover-expand-effect">
                  <div className="icon">
                  <FcMoneyTransfer style={{fontSize:'70'}}/>
                    {/* <i className="material-icons">person_add</i> */}
                  </div>
                  <div className="content">
                    <div className="text">FD Amount(कायम मुदत ठेव) : 195000.0</div>
                    <p>View Detail</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="1225"
                      data-speed="1000"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
              </Link>



              <Link to="/addrd">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-blue hover-expand-effect">
                  <div className="icon">
                  <BsCurrencyRupee style={{fontSize:'70', color:'#3F51B5'}}/>
                    {/* <i className="material-icons">local_activity</i> */}
                  </div>
                  <div className="content">
                    <div className="text">RD Amount(सभासद बचत ठेव) : 175000.0</div>
                    <p>View Detail</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="1225"
                      data-speed="1000"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
              </Link>



              <Link to="/newloan">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-red hover-expand-effect">
                  <div className="icon">
                  <FcDonate style={{fontSize:'70'}}/>
                    {/* <i className="material-icons">local_atm</i> */}
                  </div>
                  <div className="content">
                    <div className="text">Regular Loan Balance Amount(नियमित कर्ज) :</div>
                    <p>View Detail</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="1225"
                      data-speed="1000"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
              </Link>


              <Link to="/newloan">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-purple hover-expand-effect">
                  <div className="icon">
                    <RiHandCoinLine style={{fontSize:'70'}}/>
                    {/* <i className="material-icons">attach_money</i> */}
                  </div>
                  <div className="content">
                    <div className="text">Emergency Loan Balance Amount(आकस्मिक कर्ज) : 15000.0</div>
                    <p>View Detail</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="1225"
                      data-speed="1000"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
              </Link>




              <Link to="/emergencyloan">
               <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-brown hover-expand-effect">
                  <div className="icon">
                   
                    <i className="material-icons">attach_money</i>
                  </div>
                  <div className="content">
                    <div className="text">Total Emergency Loan : Rs.483,500.00</div>
                    <p>View Detail</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="1225"
                      data-speed="1000"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
              </Link> 




              <Link to="/emergencyloan">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-deep-purple hover-expand-effect">
                  <div className="icon">
                  <FcSimCardChip style={{fontSize:'70'}}/>
                    {/* <i className="material-icons">attach_money</i> */}
                  </div>
                  <div className="content">
                    <div className="text">Total Emergency Debt outstanding : Rs.868,850.00</div>
                    <p>View Detail</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="1225"
                      data-speed="1000"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
              </Link> 





                 <Link to="/addmember"> 
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-yellow hover-expand-effect">
                  <div className="icon">
                   <FcConferenceCall style={{fontSize:'70'}}/>
                    {/* <i className="material-icons">attach_money</i> */}
                  </div>
                  <div className="content">
                    <div className="text">Total Members : 475</div>
                    <p>View Detail</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="1225"
                      data-speed="1000"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
            </Link> 





                 <Link to="/deathmember"> 
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-teal hover-expand-effect">
                  <div className="icon">
                  <FcDisapprove style={{fontSize:'70'}}/>
                    {/* <i className="material-icons">attach_money</i> */}
                  </div>
                  <div className="content">
                    <div className="text">Total Retired Members : 14</div>
                    <p>View Detail</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="1225"
                      data-speed="1000"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
              </Link> 






                 <Link to="/terminatedmember"> 
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-indigo hover-expand-effect">
                  <div className="icon">
                   <FcCancel style={{fontSize:'70'}}/>
                   {/* <i className="material-icons">attach_money</i> */}
                  </div>
                  <div className="content">
                    <div className="text">Total Dead Members : 28</div>
                    <p>View Detail</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="1225"
                      data-speed="1000"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
               </Link> 



    <div className="graph">
{/* Loan Graph start */}
    {/* <Chart  className="loanchart"
                   options={state.options} 
                   series={state.series}
                    type="donut"
                     width="500" /> */}
          
    <div>

    <h3    className="fontclr"> FD Account Graph</h3>
     <PiChart/>
    </div>

    <div>
   <h3     className="fontclr">Loan Graph</h3>
   <StaticGraph/>

   </div>













  {/* Loan Graph end */}
    </div>



            </div>



            
            {/* <!-- #END# Widgets --> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashBoard;
