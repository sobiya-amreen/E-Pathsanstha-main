import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Submit } from '../../Service';

const XeroxCurrentAccountModal = () => {
   const {handleSubmit,register,formState:{errors}}=useForm();
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
         <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card modalFormCard">
                  <div className="header">
                    <h2>ADD MEMBER (सदस्य जोडा)</h2>
                  </div>
                  <div className="body">
                    <div className="demo-masked-input">
                      <div className="row clearfix">
                       <Form onSubmit={handleSubmit(Submit)}>
                     
                     
                
                      <div className="col-md-8">
                          <b>Select Party Name</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event_note</i>
                            </span>
                            <div className="form-line">
                               {/* dropdown form start */}
                               <div className="col-4">
                                        <select id="partyname" name="partyname" className="form-control">
           
                                            <option value="ज़ीरॉक्स खर्च">ज़ीरॉक्स खर्च</option>
                                             <option value="बॅंक करंट ज़ीरॉक्स">बॅंक करंट ज़ीरॉक्स</option>
                                              <option value="जी.एस.टी. खर्च">जी.एस.टी. खर्च</option>
                                               <option value="ज़ीरॉक्स विभाग निव्वल ऩफा">ज़ीरॉक्स विभाग निव्वल ऩफा</option>
                                                <option value="जी.एस.टी. शुल्क">जी.एस.टी. शुल्क</option>
                                                 <option value="XEROX PROFIT">XEROX PROFIT</option>
                                                  <option value="स्टेशनरी खर्च">स्टेशनरी खर्च</option>
                                              
                                        </select>
                                    </div>
                            {/* dropdown form ends */}
                          </div>
                          </div>
                        </div>
                        {/* input */}


                        <div className="col-md-8">
                          <b>Account Number</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter the number"
                              />
                            </div>
                          </div>
                        </div>






                        <div className="col-md-8">
                          <b>Amount</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                             <Form.Group className="mb-3" controlId="xeroxAmountField">
                              <Form.Control
                                type="number"
                                className="form-control date"
                                placeholder="Enter Amount"
                                {...register("xerox",{required: "please enter Amount"})}
                              />
                              </Form.Group>
                            </div>
                          </div>
                           <p style={{color:"red"}}>{errors?.xerox?.message}</p>
                        </div>




                        <div className="col-md-8">
                          <b>Date</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                            <Form.Group className="mb-3" controlId="xeroxDateField">
                              <Form.Control
                                type="date"
                                className="form-control date"
                                {...register("xeroxdate",{required: "please enter date"})}
                              />
                              </Form.Group>
                            </div>
                          </div>
                          <p style={{color:"red"}}>{errors?.xeroxdate?.message}</p>
                        </div>




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



                       <div className="col-md-8">
                          <b>Transaction</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                           
                            <div className="col-4">
                                        <select id="partyname" name="debitcredit" className="form-control">
           
                                            <option value="debit">Debit</option>
                                             <option value="credit">Credit</option>
                                              
                                              
                                        </select>
                                    </div>
                            
                            </div>
                          </div>
                        </div>
                       
                      





                        <div className="col-md-8">
                          <b>Notes</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              {/* <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Receipt Number"
                              /> */}
                              <div className="col-4">
                              <textarea className="form-control" id="notes" name="notes" rows="2" spellCheck="false"></textarea>
                                    </div>
                            </div>
                          </div>
                        </div>

                        

                       

                        <Button type="submit"  variant='primary' className="btn btn-block btn-lg waves-effect">Report</Button>
                        <Button type="button" variant='primary' className="btn bg-indigo btn-block btn-lg waves-effect closeButton" data-dismiss="modal">Close</Button>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       {/* Modal form ends */}


      </div>
    </div>
  </div>
</div>
{/* Modal End */}
    </div>
  )
}

export default XeroxCurrentAccountModal
