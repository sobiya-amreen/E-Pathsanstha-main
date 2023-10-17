import React from 'react'
import { Button } from 'react-bootstrap'

const NotificationModal = () => {
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
                <h2>Add Third Party Payment Form</h2>
              </div>
              <div className="body">
                <div className="demo-masked-input">
                  <div className="row clearfix">
                   
                 
                  <div className="col-md-8">
                          <b>Interest Type</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Interest Type"
                              />
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Rate of Interest</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder='Enter Rate of Interest'
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-8">
                          <b>Discription</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder='Enter Rate of Interest'
                              />
                            </div>
                          </div>
                        </div>

                 

                   

                        <Button type="submit"  variant='primary' className="btn btn-block btn-lg waves-effect ">Report</Button>

                        <Button type="submit"  variant='primary' className="btn btn-block btn-lg waves-effect ">Close</Button>

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

export default NotificationModal
