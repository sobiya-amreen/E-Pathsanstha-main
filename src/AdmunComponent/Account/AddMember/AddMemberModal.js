import React from 'react'

const AddMemberModal = () => {
  return (
    <div>
      <i  type="button" className='material-icons edit-icon' data-toggle="modal" data-target="#exampleModal">border_color</i>



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
                                placeholder="Enter Full Name"
                              />
                            </div>
                          </div>
                        </div>


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
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Department (विभाग)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Department"
                              />
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Designation (पदनाम)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder='Enter Designation'
                              />
                            </div>
                          </div>
                        </div>






                        <div className="col-md-8">
                          <b>Date Of Birth</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="date"
                                className="form-control date"
                                
                              />
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Date Of Joining</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="date"
                                className="form-control date"
                                
                              />
                            </div>
                          </div>
                        </div>




                        <div className="col-md-8">
                          <b>DOR (Date of Retirement) निवृत्तीची तारीख</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="date"
                                className="form-control date"
                                
                              />
                            </div>
                          </div>
                        </div>




                        <div className="col-md-8">
                          <b>Mobile Number</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Mobile Number"
                              />
                            </div>
                          </div>
                        </div>





                        <div className="col-md-8">
                          <b>email id</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="email"
                                className="form-control date"
                                placeholder="Enter email id"
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Address (पत्ता)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Address"
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Shares (भाग )</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Shares"
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Monthly Deposit (मासिक ठेव )</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Monthly Deposit"
                              />
                            
                            </div>
                          </div>
                        </div>




                        <div className="col-md-8">
                          <b>Insurance (सभासद कल्याण निधी)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Insurance"
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Bank Account Number (बँक खाते क्रमांक)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter bank Account Number"
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Bank Name (बँकेचे नाव)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Bank Name"
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Branch Code (शाखा कोड)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Branch Code"
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Branch Name (शाखा नाव)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Branch Name"
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Nominee's Name (नामनिर्देशित व्यक्तीचे नाव)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Nominee's Name"
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Nominee's Relation (नामनिर्देशित व्यक्तीचे नाते)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Nominee's Relation"
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Registration Fee</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Registration Fee"
                              />
                            
                            </div>
                          </div>
                        </div>


                       

                        <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect">Submit</button>
        <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect closeButton" data-dismiss="modal">Close</button>
    
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

export default AddMemberModal
