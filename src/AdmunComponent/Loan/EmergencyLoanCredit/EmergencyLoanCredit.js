import React from 'react'
import AdminTopBar from '../../AdminTopBar/AdminTopBar'
import AdminSideBar from '../../AdminSideBar/AdminSideBar'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Submit } from '../../Service';
import { Button, Form } from 'react-bootstrap'


const EmergencyLoanCredit = () => {
  const {handleSubmit,register,formState:{errors}}=useForm();
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
                    <h2>Emergency Loan Credit</h2>
                  </div>
                  <div className="body">
                    <div className="demo-masked-input">
                      <div className="row clearfix">
                      <Form onSubmit={handleSubmit(Submit)}>
                       
                     

                         <div className="col-md-8">
                          <b>Account Number (खाते क्रमांक)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Account Number (खाते क्रमांक)"
                              />
                               <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect primaryButton secondaryButton">Search</button>
                            </div>
                          </div>
                        </div> 


                        {/* <button type="button" class="btn btn-primary ">Search</button> */}



                        <div className="col-md-8">
                          <b>Full Name (पूर्ण नाव)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Full Name (पूर्ण नाव)"
                              />
                            </div>
                          </div>
                        </div> 


                        <div className="col-md-8">
                          <b>Date</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                            <Form.Group className="mb-3" controlId="emergencyLoanCreditField">
                              <Form.Control
                                type="date"
                                className="form-control date"
                                {...register("emergencyLoanCredit",{required: "please enter Date"})}
                              />
                              </Form.Group>
                            </div>
                          </div>
                          <p style={{color:"red"}}>{errors?.emergencyLoanCredit?.message}</p>
                        </div> 



                        <div className="col-md-8">
                          <b>Prev. Balance</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Prev. Balance"
                              />
                            </div>
                          </div>
                        </div> 


                        <div className="col-md-8">
                          <b>Loan Amount</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                            <Form.Group className="mb-3" controlId="emergencyLoanAmountField">
                              <Form.Control
                                type="number"
                                className="form-control date"
                                placeholder='Enter Loan Amount'
                                {...register("emergencyLoanAmount",{required: "please enter Loan Amount"})}

                              />
                                 </Form.Group>
                            </div>
                          </div>
                          <p style={{color:"red"}}>{errors?.emergencyLoanAmount?.message}</p>
                        </div> 





                        <div className="col-md-8">
                          <b>Loan Balance After Deduction</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Loan Balance After Deduction"
                              />
                               <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect primaryButton secondaryButton">Check</button>
                            </div>
                          </div>
                        </div> 

                        {/* <button type="button" className="btn btn-primary loanAfterDeduction_btn">Check</button> */}



                        <div className="col-md-8">
                          <b>Cheque Number</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Cheque Number"
                              />
                            </div>
                          </div>
                        </div> 



                        <div className="col-md-8">
                          <b>Receipt Number</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Receipt Number"
                              />
                            </div>
                          </div>
                        </div> 



                        

                                  
                        <Button type="submit" variant='primary' className="btn bg-indigo btn-block btn-lg waves-effect">Submit</Button>
                        </Form>
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

export default EmergencyLoanCredit
