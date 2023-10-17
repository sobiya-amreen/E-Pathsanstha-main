import React from 'react'

const TotalMembersEdit = () => {
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
                <h2>Member Account Detail</h2>
              </div>
              <div className="body">
                <div className="demo-masked-input">
                  <div className="row clearfix">
                   
                 
                 
            
                  <div className="col-md-8">
                      <b>Search</b>
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
                    

                   

                    <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect">report</button>
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

export default TotalMembersEdit
