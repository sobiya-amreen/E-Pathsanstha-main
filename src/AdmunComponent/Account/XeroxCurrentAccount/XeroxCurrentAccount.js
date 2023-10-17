import React from 'react'

import { Link } from 'react-router-dom'
import AdminTopBar from '../../AdminTopBar/AdminTopBar'
import AdminSideBar from '../../AdminSideBar/AdminSideBar'
import { RiFolderOpenLine } from "react-icons/ri";
import { FcSimCardChip,FcCancel } from "react-icons/fc";
import XeroxCurrentAccountModal from './XeroxCurrentAccountModal';
import { useForm } from 'react-hook-form'
import { Submit } from '../../Service';
import { Button, Form } from 'react-bootstrap'



const XeroxCurrentAccount = () => {
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






{/* <!-- Widgets --> */}
<div className="row clearfix">
            
            <Link to="totalshareamount">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-pink hover-expand-effect">
                  <div className="icon">
                   <RiFolderOpenLine style={{fontSize:'70'}}/>
                    {/* <i className="material-icons">playlist_add_check</i> */}
                  </div>
                  <div className="content">
                    <div className="text">Opening Balance : 405000</div>
                   <p>View Detail</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="125"
                      data-speed="15"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
              </Link>



              <Link to="monthlybalance">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-cyan hover-expand-effect">
                  <div className="icon">
                    <FcSimCardChip style={{fontSize:'70'}}/>
                    {/* <i className="material-icons">monetization_on</i> */}
                  </div>
                  <div className="content">
                    <div className="text">Credit Amount : 0.0</div>
                    <p>Debit Aamount: 0.0</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="257"
                      data-speed="1000"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
              </Link>

              <Link to="dashboardinsurence">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-light-green hover-expand-effect">
                  <div className="icon">
                   <FcCancel style={{fontSize:'70'}}/>
                    {/* <i className="material-icons">enhanced_encryption</i> */}
                  </div>
                  <div className="content">
                    <div className="text">Closing Balance : 405000</div>
                    <p>View Detail</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="243"
                      data-speed="1000"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
              </Link>

              


            </div>            
            {/* <!-- #END# Widgets --> */}





          
              {/* form starts */}
            {/* <!-- Masked Input --> */}


            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="header">
                    <h2>Other Third Party Payment Form</h2>
                  </div>
                  <div className="body">
                    <div className="demo-masked-input">
                      <div className="row clearfix">
                      <Form onSubmit={handleSubmit(Submit)}>
                        
                       
                       {/* input */}
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
                                className="form-control time24"
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

                       

                        {/* <Button type="button" className="btn bg-indigo btn-block btn-lg waves-effect">Submit</Button> */}
                        <Button type="submit"  variant='primary' className="btn btn-block btn-lg waves-effect">Report</Button>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- #END# Masked Input --> */}
            {/* form starts */}








          {/* Table start */}

          <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="header">
                    <h2>VIEW PARTY DATA</h2>
                    {/* <ul className="header-dropdown m-r--5">
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">more_vert</i>
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);" className=" waves-effect waves-block">Action</a></li>
                                        <li><a href="javascript:void(0);" className=" waves-effect waves-block">Another action</a></li>
                                        <li><a href="javascript:void(0);" className=" waves-effect waves-block">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul> */}
                  </div>
                  <div className="body">
                    <div className="table-responsive">
                      <div
                        id="DataTables_Table_1_wrapper"
                        className="dataTables_wrapper form-inline dt-bootstrap"
                      >
                        <div className="dt-buttons">
                          <a
                            className="dt-button buttons-copy buttons-html5"
                            tabIndex="0"
                            aria-controls="DataTables_Table_1"
                            href="#"
                          >
                            <span>Copy</span>
                          </a>
                          <a
                            className="dt-button buttons-csv buttons-html5"
                            tabIndex="0"
                            aria-controls="DataTables_Table_1"
                            href="#"
                          >
                            <span>CSV</span>
                          </a>
                          <a
                            className="dt-button buttons-excel buttons-html5"
                            tabIndex="0"
                            aria-controls="DataTables_Table_1"
                            href="#"
                          >
                            <span>Excel</span>
                          </a>
                          <a
                            className="dt-button buttons-pdf buttons-html5"
                            tabIndex="0"
                            aria-controls="DataTables_Table_1"
                            href="#"
                          >
                            <span>PDF</span>
                          </a>
                          <a
                            className="dt-button buttons-print"
                            tabIndex="0"
                            aria-controls="DataTables_Table_1"
                            href="#"
                          >
                            <span>Print</span>
                          </a>
                        </div>
                        <div
                          id="DataTables_Table_1_filter"
                          className="dataTables_filter"
                        >
                          <label>
                            Search:
                            <input
                              type="search"
                              className="form-control input-sm"
                              placeholder=""
                              aria-controls="DataTables_Table_1"
                            />
                          </label>
                        </div>







                        <label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label>








                        <table
                          className="table table-bordered table-striped table-hover dataTable js-exportable"
                          id="DataTables_Table_1"
                          role="grid"
                          aria-describedby="DataTables_Table_1_info"
                        >
                          <thead>
                            <tr role="row">
                              <th
                                className="sorting_asc a1"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-sort="ascending"
                                aria-label="Name: activate to sort column descending"
                                
                              >
                                Id
                              </th>
                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"
                                
                              >
                                Party Name
                              </th>


                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"
                                
                              >
                                Account Number
                              </th>


                             


                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"
                                
                              >
                                Amount
                              </th>


                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"
                                
                              >
                                Date
                              </th>
                              

                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"
                                
                              >
                                Chaque Number
                              </th>


                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"
                                
                              >
                                Receipt Number
                              </th>


                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"
                                
                              >
                                Credit Amount
                              </th>


                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"
                                
                              >
                                Dabit Amount
                              </th>

                              <th
                                className="sorting a3"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Office: activate to sort column ascending"
                                
                              >
                                Delete
                              </th>
                              
                              
                              
                            
                            </tr>
                          </thead>
                          {/* <tfoot>
                            <tr>
                              <th rowSpan="1" colSpan="1">
                                Id
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Account Number
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Full Name
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Date
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Share Allot
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Total Share Amount
                              </th>
                            </tr>
                          </tfoot> */}
                          <tbody>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Airi Satou</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><XeroxCurrentAccountModal/></td>
                             
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Angelica Ramos</td>
                              <td>Chief Executive Officer (CEO)</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><XeroxCurrentAccountModal/></td>
                             
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Ashton Cox</td>
                              <td>Junior Technical Author</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><XeroxCurrentAccountModal/></td>
                             
                            </tr>
                            
                            <tr role="row" className="odd">
                              <td className="sorting_1">Brenden Wagner</td>
                              <td>Software Engineer</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><XeroxCurrentAccountModal/></td>
                            
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Brielle Williamson</td>
                              <td>Integration Specialist</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><XeroxCurrentAccountModal/></td>
                              
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Bruno Nash</td>
                              <td>Software Engineer</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><XeroxCurrentAccountModal/></td>
                             
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Caesar Vance</td>
                              <td>Pre-Sales Support</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><XeroxCurrentAccountModal/></td>
                              
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Cara Stevens</td>
                              <td>Sales Assistant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><XeroxCurrentAccountModal/></td>


                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Cedric Kelly</td>
                              <td>Senior Javascript Developer</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td>Accountant</td>
                              <td><XeroxCurrentAccountModal/></td>
                             
                            </tr>
                          </tbody>
                        </table>
                        <div
                          className="dataTables_info"
                          id="DataTables_Table_1_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 10 of 57 entries
                        </div>
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="DataTables_Table_1_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button previous disabled"
                              id="DataTables_Table_1_previous"
                            >
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="0"
                                tabIndex="0"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="paginate_button active">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="1"
                                tabIndex="0"
                              >
                                1
                              </a>
                            </li>
                            <li className="paginate_button ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="2"
                                tabIndex="0"
                              >
                                2
                              </a>
                            </li>
                            <li className="paginate_button ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="3"
                                tabIndex="0"
                              >
                                3
                              </a>
                            </li>
                            <li className="paginate_button ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="4"
                                tabIndex="0"
                              >
                                4
                              </a>
                            </li>
                            <li className="paginate_button ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="5"
                                tabIndex="0"
                              >
                                5
                              </a>
                            </li>
                            <li className="paginate_button ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="6"
                                tabIndex="0"
                              >
                                6
                              </a>
                            </li>
                            <li
                              className="paginate_button next"
                              id="DataTables_Table_1_next"
                            >
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="7"
                                tabIndex="0"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         {/*  Table end */}















          </div>
        </section>
      </div>

    </div>
  )
}

export default XeroxCurrentAccount
