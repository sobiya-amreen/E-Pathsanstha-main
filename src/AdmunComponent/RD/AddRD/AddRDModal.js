import React from 'react'
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import { Submit } from '../../Service';

const AddRDModal = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  return (
    <div>
    <i  type="button" className='material-icons delete-icon' data-toggle="modal" data-target="#exampleModal">delete_sweep</i>



{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
<div className="modal-content">
  <div className="modal-header">
    <h5 className="modal-title" id="exampleModalLabel">ADD MEMBER (सदस्य जोडा)</h5>
    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div className="modal-body">
    



     {/* modal form start */}
     
     <Form onSubmit={handleSubmit(Submit)}>
              <Form.Group className="mb-3" controlId="DedictionForm">


     <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card modalFormCard">
              <div className="header">
                <h2>ADD RD</h2>
              </div>
              <div className="body">
                <div className="demo-masked-input">
                  <div className="row clearfix">
                   
                 
                 
            
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
                                placeholder="Enter Account Number"
                              />
                              <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect primaryButton secondaryButton">Search</button>
                            </div>
                          </div>
                        </div>
                        {/* <button type="button" className="btn btn-primary ">Search</button> */}



                       


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
                          <b>RD Number</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder='Enter RD Number'
                              />
                            </div>
                          </div>
                        </div>






                        <div className="col-md-8">
                          <b>RD Amount Monthly(RD रक्कम)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              {/* <input
                                type="number"
                                className="form-control date"
                                placeholder='Enter RD Amount (in Rs)'
                                
                              /> */}
                                <Form.Control
                                    type="number"
                                    className="form-control date"
                                    {...register("number", { required: "please enter RD Amount" })}
                                  />
                            </div>
                          </div>
                          <p style={{ color: "red" }}>{errors?.number?.message}</p>

                        </div>



                        <div className="col-md-8">
                          <b>RD Date (RD तारीख)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              {/* <input
                                type="date"
                                className="form-control date"
                                
                              /> */}
                                  <Form.Control
                                    type="date"
                                    className="form-control date"
                                    {...register("date", { required: "please enter RD Date" })}
                                  />
                            </div>
                          </div>
                          <p style={{ color: "red" }}>{errors?.date?.message}</p>

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
                                placeholder='Enter Receipt Number'
                              />
                            </div>
                          </div>
                        </div> 



                     



                        <div className="col-md-8">
                          <b>Select files</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              {/* <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Branch Code"
                              /> */}
                              <div className="col-8">
                                        <input className="form-control" type="file" id="photo" name="photo" multiple=""/>
                                    </div>
                            
                            </div>
                          </div>
                        </div>

                    

                   

                        <Button type="submit" variant='primary' className="btn btn-block btn-lg waves-effect"   >Submit </Button>

                    <Button type="button" variant='primary' className="btn bg-indigo btn-block btn-lg waves-effect closeButton" data-dismiss="modal">Close</Button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Form.Group>
            </Form>
   {/* Modal form ends */}


  </div>
</div>
</div>
</div>
{/* Modal End */}
</div>
  )
}

export default AddRDModal
