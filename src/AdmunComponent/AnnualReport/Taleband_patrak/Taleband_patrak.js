import React from 'react'
import { Link } from 'react-router-dom'
import AdminSideBar from '../../AdminSideBar/AdminSideBar'
import AdminTopBar from '../../AdminTopBar/AdminTopBar'
import { Button } from 'react-bootstrap'

const Taleband_patrak = () => {
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
                    <h2>ताळेबंद पत्रक</h2>
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
                        <Button type="submit"  variant='primary' className="btn btn-block btn-lg waves-effect ">Report</Button>


{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel"> नफा तोटा पत्रक </h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        



         {/* modal form start */}
         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <b>कर्ज व येणे</b> <br/> <br/>
                          <b>स भाग खाते</b>
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
                      <b>जिंदगी व येणे</b>  <br/>   <br/>  
                      <b>नि कर्ज खाते </b>
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
                          
                          <b>सभासद ठेव</b>
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
                          <b>अकस्मिक कर्ज खाते</b>
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
                          
                          <b>स बचत ठेव</b>
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
                          <b>बँक शे खाते</b>
                          
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
                          
                          <b>स मुद्दत ठेव</b>
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
                        
                          <b>रिझर्व फंड खाते</b>
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
                          
                          <b>स कल्याण निधी</b>
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
                        <b>डेड स्टॉक खाते</b>
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
                          
                          <b>गंगाजळी खाते</b>
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
                        <b>झे. म. खरेदी </b>
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
                          
                          <b>स बुडीत निधी</b>
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
                        <b>एस बी आय बँक</b>
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
                          
                          <b>क. अधिलाभांश</b>
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
                        <b>एमजीबी बँक</b>
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
                          
                          <b>क. भ. नि. निधी</b>
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
                          
                          <b>झे खरेदी निधी</b>
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
                          
                          <b>डेड स्टॉक झिज</b>
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
                        <b>बॅक क्लि कॅश</b>
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
                          
                          <b>बँक कर्ज</b>
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
                        <b>बँक मुदत ठेव</b>
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
                          
                          <b>अनामत खाते</b>
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
                        <b>झेरॉक्स बँक खाते</b>
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
                          
                          <b>लांभाश खाते</b>
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
                        <b>सॉफ्टवेअर ॲडवान्स येणे</b>
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
                          
                          <b>क व्यवसाय कर</b>
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
                        <b>बँक मु. ठेव व्याज येणे</b>
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
                          
                          <b>झेरॉक्स वि. अ.</b>
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
                        <b>दि. अ. शिल्लक</b>
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
                        <b>चालु नफा</b>
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

                           {/* start tartidi */}
                          
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


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                      <b></b>  <br/>   <br/>  
                      <b></b>
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

                        
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>मु ठेव व्याज</b>
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



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
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


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>बचत ठेव व्या</b>
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


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
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


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>विद्यापीठ ठेव व्याज</b>
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


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
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


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>स क. निधी</b>
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


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
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


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>ऑडिट फी खाते</b>
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


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
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


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
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



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
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


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>डेड स्टॉक झिज</b>
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


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
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


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>झेरॉक्स झिज</b>
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


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 inputhide">
                        <b></b>
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


                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                        <b>एकुण बेरीज</b>
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


                  

         {/* modal form end */}



      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>




                       

                        
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

export default Taleband_patrak
