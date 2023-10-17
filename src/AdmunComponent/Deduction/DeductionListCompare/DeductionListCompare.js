import React from 'react'
import AdminTopBar from '../../AdminTopBar/AdminTopBar'
import AdminSideBar from '../../AdminSideBar/AdminSideBar'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// import { Submit } from '../../../Service'
import { Submit } from '../../Service';
import { Button, Form } from 'react-bootstrap'

const DeductionListCompare = () => {
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


<AdminSideBar/>
{/* end sideBar */}

        <section className="content">
             <Link to="/">  <h4 >DASHBOARD</h4></Link>
          <div className="container-fluid">
            <div className="block-header">
            
            </div>

                          <Form onSubmit={handleSubmit(Submit)}>
                          <Form.Group className="mb-3" controlId="DedictionForm">
          
              {/* form starts */}
            {/* <!-- Masked Input --> */}
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="header">
                    <h2>Deduction List Compare</h2>
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
                              {/* <input
                                type="date"
                                className="form-control time24"
                                
                                
                              /> */}

                              <Form.Control
                                type="date"
                                className="form-control time24"
                                // placeholder="Enter Date"

                                {...register("date",{required: "please enter Start Date"})}
                              />

                            </div>
                          </div>
                          <p style={{color:"red"}}>{errors?.date?.message}</p>
                        <Button type="submit"  variant='primary' className="btn btn-block btn-lg waves-effect"   >Report            </Button>
                        {/* <Button type="submit"  variant='primary' className="btn btn-block btn-lg waves-effect">Print</Button> */}
                        </div>

                       

                        {/* <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect">Report</button> */}
                       
                        {/* <!-- Button trigger modal --> */}
                        
                   {/* <button onSubmit={handleSubmit(Submit)} type="button" className="btn bg-indigo btn-block btn-lg waves-effect" data-toggle="modal" data-target="#exampleModal">
                    Report
                   </button> */}
                   {/* <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect" data-toggle="modal" data-target="#exampleModal">
                    Print
                   </button> */}


                       
                 

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- #END# Masked Input --> */}
            {/* form starts */}


                          </Form.Group>
                          </Form>

   

          </div>
        </section>
      </div>
    </div>
  )
}

export default DeductionListCompare
