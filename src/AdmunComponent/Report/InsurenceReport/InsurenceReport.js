import React from 'react'
import AdminSideBar from '../../AdminSideBar/AdminSideBar'
import AdminTopBar from '../../AdminTopBar/AdminTopBar'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Form } from 'react-bootstrap'
import { Submit } from '../../Service';

const InsurenceReport = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

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

            </div>


            {/* form starts */}
            {/* <!-- Masked Input --> */}

            <Form onSubmit={handleSubmit(Submit)}>
              <Form.Group className="mb-3" controlId="DedictionForm">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="card">
                      <div className="header">
                        <h2>Insurance Report</h2>
                      </div>
                      <div className="body">
                        <div className="demo-masked-input">
                          <div className="row clearfix">


                            <div className="col-md-8">
                              <b>Account Number</b>
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="material-icons">event_note</i>
                                </span>
                                <div className="form-line">
                                  <input
                                    type="number"
                                    className="form-control time24"
                                    placeholder="Enter Account Number"
                                  />
                                </div>
                              </div>
                            </div>


                            <div className="col-md-8">
                              <b>Select Start Date</b>
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="material-icons">event_note</i>
                                </span>
                                <div className="form-line">
                                 
                                  <Form.Control
                                    type="date"
                                    className="form-control time24"


                                    {...register("startDate", { required: "please enter Start Date" })}
                                  />
                                </div>
                              </div>
                              <p style={{ color: "red" }}>{errors?.startDate?.message}</p>

                            </div>


                            <div className="col-md-8">
                              <b>Select End Date</b>
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
                                    {...register("endDate", { required: "please enter End Date" })}
                                  />

                                </div>
                              </div>
                              <p style={{ color: "red" }}>{errors?.endDate?.message}</p>

                            </div>



                            <Button type="submit" variant='primary' className="btn btn-block btn-lg waves-effect"   >Report            </Button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </Form>
            {/* <!-- #END# Masked Input --> */}
            {/* form starts */}












          </div>
        </section>
      </div>
    </div>
  )
}

export default InsurenceReport
