import React from 'react'
import AdminTopBar from '../../AdminTopBar/AdminTopBar'
import AdminSideBar from '../../AdminSideBar/AdminSideBar'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'



const PathsansthaProfile = () => {
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
                    <h2>Patsanstha Profile (पतसंस्था माहिती)</h2>
                  </div>
                  <div className="body">
                    <div className="demo-masked-input">
                      <div className="row clearfix">
                       
                       
                       
                        <div className="col-md-8">
                          <b>Patsanstha Name (पूर्ण नाव)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event_note</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control time24"
                                placeholder="Enter Pathsanstha Name"
                              />
                            </div>
                          </div>
                        </div>


                        <div className="col-md-8">
                          <b>Registration Noumber</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event_note</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control time24"
                                placeholder="Enter Registration Noumber"
                              />
                            </div>
                          </div>
                        </div>


                        <div className="col-md-8">
                          <b>Patsanstha Address (पत्ता)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event_note</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control time24"
                                placeholder="Enter Patsanstha Address (पत्ता)"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-8">
                          <b>City</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event_note</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control time24"
                                placeholder="Enter City Name"
                              />
                            </div>
                          </div>
                        </div>


                        <div className="col-md-8">
                          <b>State</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event_note</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control time24"
                                placeholder="Enter State"
                              />
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Pincode</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event_note</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control time24"
                                placeholder="Enter Pincode"
                              />
                            </div>
                          </div>
                        </div>


                        <div className="col-md-8">
                          <b>Year of Establishment</b>
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
                          <b>Mobile Number</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event_note</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control time24"
                                placeholder="Enter Mobile"
                              />
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>email id</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event_note</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="email"
                                className="form-control time24"
                                placeholder="Enter email id"
                              />
                            </div>
                          </div>
                        </div>


                        <div className="col-md-8">
                          <b>GST Number</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event_note</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control time24"
                                placeholder="Enter GST Number"
                              />
                            </div>
                          </div>
                        </div>


                        <div className="col-md-8">
                          <b>Pan Noumber</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event_note</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control time24"
                                placeholder="Enter Pan Noumber"
                              />
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Website</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event_note</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control time24"
                                placeholder="Enter Website URL"
                              />
                            </div>
                          </div>
                        </div>

                       

                        <Button type="submit"  variant='primary' className="btn btn-block btn-lg waves-effect">Report</Button>

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

export default PathsansthaProfile
