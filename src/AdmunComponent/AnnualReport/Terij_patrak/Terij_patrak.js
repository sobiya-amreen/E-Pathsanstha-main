import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSideBar from '../../AdminSideBar/AdminSideBar'
import AdminTopBar from '../../AdminTopBar/AdminTopBar'
import "./Terij_patrak.css"
import { Button } from 'react-bootstrap'

const Terij_patrak = ({ setIsModalVisible}) => {

 
  

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

          
              {/* form starts */}
            {/* <!-- Masked Input --> */}
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="header">
                    <h2>तेरीज पत्रक</h2>
                  </div>
                  <div className="body">
                    <div className="demo-masked-input">
                      <div className="row clearfix">
                       
                       
                       
                        <div className="col-md-8">
                          <b>Select Start Date</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event_note</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="date"
                                className="form-control time24"
                                
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-8">
                          <b>Select End Date</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event_note</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="date"
                                className="form-control time24"
                                
                              />
                            </div>
                          </div>
                        </div>

                        {/* <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect">Report</button> */}
                       
                        {/* <!-- Button trigger modal --> */}
                        <Button   type="button"  variant='primary' className="btn btn-block btn-lg waves-effect ">Report</Button>





{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">तेरीज पत्रक</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        



         {/* modal form start */}
         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <b>जमा तपशील (Credit)</b> <br/> <br/>
                          <b>आरंभीची शिल्लक </b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i>   <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Current Status Shares"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <b>नावे  तपशील (Debit)</b>  <br/>   <br/>  
                      <b>सभासद भाग खाते </b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */}
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i>   <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Shares"
                              />
                              
                            </div>
                          </div>
                        </div> 






                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>सभासद भाग वसुल </b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Current Monthly Deposite"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <b>सभासद ठेवखाते</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Monthly Deposite"
                              />
                              
                            </div>
                          </div>
                        </div> 





                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>सभासद ठेववसुल</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Current Status Insurence"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <b>सभासद नि . कर्ज वाटप </b>
                          
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Insurence"
                              />
                              
                            </div>
                          </div>
                        </div> 







                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>सभासद बचत खाते</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Current Status Regular Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        
                          <b>सभासद आक कर्ज वाटप </b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Regular Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 





                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>सभासद कल्याण निधी </b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <b>सभासद मुदत ठेव खाते </b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>सभासद मुदत ठेव खाते </b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <b>सभासद कल्याण निधी</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>नियमित कर्ज वसुल </b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <b>झेरॉक्स अनामत </b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="झेरॉक्स अनामत "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>सभासद आलप कर्ज वसुल  </b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <b>बॅक करंट खाते</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>सभासद कर्ज वयाज वसुल</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <b>सभा कल्याण निधी व्याज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>सभासद कर्ज वयाज वसुल</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <b>कर्मचारी पगार खाते</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>व्यवसाय कर खाते</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <b>सभासद बचत ठेव व्याज</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>कर्मचारी भविष्य नि . निधी</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <b>कर्मचारी भविष्य भ . नि . निधी</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>कर्मचारी भविष्य नि . निधी</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <b>कर्मचारी भविष्य भ . नि . निधी</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                       
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>बँक करंट खाते</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <b>बँक कमिशन</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>दिवाळी अग्रीम</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <b>आँडीट फिस</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>गंगाजळी (बँक व्याज)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <b>लाभांष वाटप</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>गंगा जडी खाते २५:</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <b>ठेव व्याज वाटप</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 

                       
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>झेरॉक्स विभाग अनामत</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <b>प्रशिक्षण निधी</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 

                      

                      


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <b>सभासद लांभाष</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */} <br/>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i> 
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Emergency Loan"
                              />
                              
                            </div>
                          </div>
                        </div> 
                       


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>सभासद मुदत ठेव व्याज</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>कर्मचारी अधिलांभाष</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>दिवाळी अग्रीम</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>संशियत बुढित निधी</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>कर्मचारी अधिलांभाष</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>एम . जी . बी लोन</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>किरकोळ खर्च</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputboss">
                          
                          <b>gchdtdt</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>बँक कर्ज एम जी बी</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputboss">
                          
                          <b>gchdtdt</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>नफा तोटा खाते</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputboss">
                          
                          <b>gchdtdt</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>मानधन खर्च</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputboss">
                          
                          <b>gchdtdt</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>गंगाजळी (बँक व्याज)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>

                      
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputboss">
                          
                          <b>gchdtdt</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>सभासद बचत खाते</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputboss">
                          
                          <b>gchdtdt</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>झेरॉक्स अनामत</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputboss">
                          
                          <b>gchdtdt</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>बँक व्याज एम जी बी</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputboss">
                          
                          <b>gchdtdt</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>सभासद कर्ज व्याज</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>

                      

                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputboss">
                          
                          <b>gchdtdt</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>निवडणूक अनामत</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <b>तरतुदी</b> <br/> <br/>
                          <b>स ठेव व्याज खा</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i>   <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Current Status Shares"
                              />
                              
                            </div>
                          </div>
                        </div> 


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <b>तरतुदी</b>  <br/>   <br/>  
                      <b>स ठेव व्याज खा</b>
                          {/* <b>Full Name (पूर्ण नाव)</b> */}
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i>   <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Update Amount Shares"
                              />
                              
                            </div>
                          </div>
                        </div> 



                         
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>मु ठेव व्याज </b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>मु ठेव व्याज </b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                          
                          <b>बचत ठेव व्या</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>बचत ठेव व्या</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>

                      

                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>विघापीठ ठेव व्याज </b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>विघापीठ ठेव व्याज </b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>
                    

                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b> स क निधी</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b> स क निधी</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>ऑडिट फी खाते</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>ऑडिट फी खाते</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>प्रशिक्षण निधी</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>प्रशिक्षण निधी</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                          
                          <b>डेडस्टॉक झिज</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>डेडस्टॉक झिज</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>एकुण</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          
                          <b>एकुण</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">add</i> <i className="material-icons">delete</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="सभासद कल्याण निधी "
                              />
                              
                            </div>
                          </div>
                        </div>







         {/* modal form end */}



      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
{/* Modal End */}



                       

                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- #END# Masked Input --> */}
            {/* form starts */}


   

          </div>
        </section>
      </div>
    </div>
  )
}

export default Terij_patrak
