import React from 'react'
import AdminTopBar from '../../AdminTopBar/AdminTopBar'
import AdminSideBar from '../../AdminSideBar/AdminSideBar'
import { Link } from 'react-router-dom'
import './NewLoan.css'
import { useForm } from 'react-hook-form'
import { Submit } from '../../Service';
import { Button, Form } from 'react-bootstrap'


const NewLoan = () => {
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
                    <h2>New Loan</h2>
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
                                placeholder="Enter Account Number"
                              />
                               <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect primaryButton secondaryButton">Search</button>
                            </div>
                          </div>
                        </div>
                        {/* <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect primaryButton">Search</button> */}
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
                                placeholder="Enter Full Name"
                              />
                            </div>
                          </div>
                        </div>
                       


                        <div className="col-md-8">
                          <b>Insurance (विमा)</b>
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
                          <b>Share (भाग)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder='Enter Share (भाग)'
                              />
                            </div>
                          </div>
                        </div>






                        {/* <div className="col-md-8">
                          <b>Gross Salary</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder='Enter Gross Salary (in Rs)'
                                
                              />
                            </div>
                          </div>
                        </div> */}



                        <div className="col-md-8">
                          <b>Net Salary</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder='Enter Net Salary (in Rs)'
                              />
                        {/* <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect primaryButton secondaryButton">Check</button> */}
                            </div>
                          </div>
                        </div>
                       {/* <button type="button" className="btn btn-primary checkButton ">Check</button> */}
                        




                        <div className="col-md-8">
                          <b>ROI (व्याज दर)</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              {/* <input
                                type="number"
                                className="form-control date"
                                placeholder='Enter Loan Amount (कर्जाची रक्कम)'
                              /> */}
                              <div className="col-8">
                                       <select id="roi" name="roi" className="form-control">
                                        
                                            <option value="10">10</option>
                                        
                                            <option value="7">7</option>
                                        
                                            <option value="7">7</option>
                                        
                                            <option value="11">11</option>
                                                
                                        </select>
                                    </div>
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
                            <Form.Group className="mb-3" controlId="newLoanDateField">
                              <Form.Control
                                type="date"
                                className="form-control date"
                                {...register("newloandate",{required: "please enter Date"})}
                              />
                               </Form.Group>
                            </div>
                          </div>
                          <p style={{color:"red"}}>{errors?.newloandate?.message}</p>
                        </div>





                        <div className="col-md-8">
                          <b>User Principal Amount</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter User Principal Amount"
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>EMI</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter EMI"
                                
                              />
                            <button type="button" className="btn bg-indigo btn-block btn-lg waves-effect primaryButton secondaryButton">List</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                                        {/* <button type="button" className="btn btn-primary listButton">List</button> */}
                                    </div>



                        <div className="col-md-8">
                          <b>Total Principal Amount</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Total Principal Amount"
                              />
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Interest Amount</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Interest Amount"
                              />
                            
                            </div>
                          </div>
                        </div>




                        <div className="col-md-8">
                          <b>Guaranteer Name One</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                               <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Guaranteer Name One"
                              /> 
                          
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Guaranteer Name 2</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                               <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Guaranteer Name two"
                              /> 
                              {/* <div className="col-8">
                                        <select id="guranteer2" name="guranteer2" className="form-control">
                                        
                                            <option value="Dr. Gattani">Dr. Gattani</option>
                                        
                                            <option value="MS. DESHPANDE MADHURI S.">MS. DESHPANDE MADHURI S.</option>
                                        
                                            <option value="DR. MRS. PATIL VAIJAYANTA NAGORAO">DR. MRS. PATIL VAIJAYANTA NAGORAO</option>
                                        
                                            <option value="DR. SARODE ARVIND VISHWANATH">DR. SARODE ARVIND VISHWANATH</option>
                                        
                                            <option value="DR. MUDHOLKAR BALAJI SUDHAMRAO">DR. MUDHOLKAR BALAJI SUDHAMRAO</option>
                                        
                                            <option value="DR. PAWAR VITTHAL D.">DR. PAWAR VITTHAL D.</option>
                                        
                                            <option value="DR. GONARKAR RAJENDRA NARAYANRAO">DR. GONARKAR RAJENDRA NARAYANRAO</option>
                                        
                                            <option value="DR. ANMULWAD VAIJANATH SOPANRAO">DR. ANMULWAD VAIJANATH SOPANRAO</option>
                                        
                                            <option value="DR.  PUYAD AVINASH LAXMANRAO">DR.  PUYAD AVINASH LAXMANRAO</option>
                                        
                                            <option value="DR.  G. KRISHNA CHAITNYA">DR.  G. KRISHNA CHAITNYA</option>
                                        
                                            <option value="DR.  WANKHEDE DNYANESHWAR SHYAMRAO">DR.  WANKHEDE DNYANESHWAR SHYAMRAO</option>
                                        
                                            <option value="SHRI. WAGH VASANT MADHAV">SHRI. WAGH VASANT MADHAV</option>
                                        
                                            <option value="SHRI. SINGH SINKU KUMAR">SHRI. SINGH SINKU KUMAR</option>
                                        
                                            <option value="SHRI. KONDEKAR SAGAR SANTOSH">SHRI. KONDEKAR SAGAR SANTOSH</option>
                                        
                                            <option value="SHRI. TEHRA RANJEET VIJAYSINGH">SHRI. TEHRA RANJEET VIJAYSINGH</option>
                                        
                                            <option value="DR. ZORE GAGANAN BALASAHEB">DR. ZORE GAGANAN BALASAHEB</option>
                                        
                                            <option value="SHRI. KADEKAR SHANKAR HARIBHAU">SHRI. KADEKAR SHANKAR HARIBHAU</option>
                                        
                                            <option value="DR. PATHAK SUHAS DURGADASRAO">DR. PATHAK SUHAS DURGADASRAO</option>
                                        
                                            <option value="DR. DEOSARKAR SANTOSH DIGAMBARRAO">DR. DEOSARKAR SANTOSH DIGAMBARRAO</option>
                                        
                                            <option value="DR. BUTLE SANTOSH RAMRAO">DR. BUTLE SANTOSH RAMRAO</option>
                                        
                                            <option value="DR. DESHMUKH NILESH KAILASRAO">DR. DESHMUKH NILESH KAILASRAO</option>
                                        
                                            <option value="SHRI. KSHIRSAGAR RAJESHWAR VISHWANATHRAO">SHRI. KSHIRSAGAR RAJESHWAR VISHWANATHRAO</option>
                                        
                                            <option value=" DR. PATIL SUNITA YADAVRAO"> DR. PATIL SUNITA YADAVRAO</option>
                                        
                                            <option value="DR. MOON RAJKUMAR SUKDEO">DR. MOON RAJKUMAR SUKDEO</option>
                                        
                                            <option value="SHRI. PATWEKAR SHAILESH LAXMANRAO">SHRI. PATWEKAR SHAILESH LAXMANRAO</option>
                                        
                                            <option value="SHRI. JOSHI MAHESH MADHAVRAO">SHRI. JOSHI MAHESH MADHAVRAO</option>
                                        
                                            <option value="DR. PATIL HANUMANT SHRIRAM">DR. PATIL HANUMANT SHRIRAM</option>
                                        
                                            <option value="SHRI. LOKHANDE SAKHARAM NARAYAN">SHRI. LOKHANDE SAKHARAM NARAYAN</option>
                                        
                                            <option value="SHRI. WARBHUVAN NISHIKANT C.">SHRI. WARBHUVAN NISHIKANT C.</option>
                                        
                                            <option value="SHRI PARAG BHALCHANDRA UPENRRAO">SHRI PARAG BHALCHANDRA UPENRRAO</option>
                                        
                                            <option value="DR. HUMBE VIKAS TUKARAM">DR. HUMBE VIKAS TUKARAM</option>
                                        
                                            <option value="MS. SABLE DIPALI NAMDEV">MS. SABLE DIPALI NAMDEV</option>
                                        
                                            <option value="SHRI. MEKEWAD SATISHKUMAR RAGHAVRAO">SHRI. MEKEWAD SATISHKUMAR RAGHAVRAO</option>
                                        
                                            <option value="SHRI KASHINATH ARJUN BOGLE">SHRI KASHINATH ARJUN BOGLE</option>
                                        
                                            <option value="SHRI. KENGALE BHIMRAO DUNGA">SHRI. KENGALE BHIMRAO DUNGA</option>
                                        
                                            <option value="SHRI. DARKUNDE NITIN SHRIDHAR">SHRI. DARKUNDE NITIN SHRIDHAR</option>
                                        
                                            <option value="MS. SABLE ARCHANA HARSING">MS. SABLE ARCHANA HARSING</option>
                                        
                                            <option value="SHRI R. V. PINJARI">SHRI R. V. PINJARI</option>
                                        
                                            <option value="Dr. Kulkarni  Jagdish Narharrao ">Dr. Kulkarni  Jagdish Narharrao </option>
                                        
                                            <option value="DR. SARODE  R. N.">DR. SARODE  R. N.</option>
                                        
                                            <option value="SHRI. TRIBHUWAN M. H.">SHRI. TRIBHUWAN M. H.</option>
                                        
                                            <option value="DR.  ANDHARE S. G.">DR.  ANDHARE S. G.</option>
                                        
                                            <option value="SHRI. SALUNKE M. W.">SHRI. SALUNKE M. W.</option>
                                        
                                            <option value="SHRI.  SABLE H. S.">SHRI.  SABLE H. S.</option>
                                        
                                            <option value="DR. TANGALWAD D. M.">DR. TANGALWAD D. M.</option>
                                        
                                            <option value="SHRI.  RAMTIRTHE V. P.">SHRI.  RAMTIRTHE V. P.</option>
                                        
                                            <option value="SMT.  YENNAWAR S. R.">SMT.  YENNAWAR S. R.</option>
                                        
                                            <option value="SHRI.  KULKARNI P. A.">SHRI.  KULKARNI P. A.</option>
                                        
                                            <option value="SHRI. PEDDEWAD R. D.">SHRI. PEDDEWAD R. D.</option>
                                        
                                            <option value="SHRI. DHAKADE A. M.">SHRI. DHAKADE A. M.</option>
                                        
                                            <option value="SHRI. HUSSEKAR T. S.">SHRI. HUSSEKAR T. S.</option>
                                        
                                            <option value="SHRI.  KADAM  A. S.  (PRO)">SHRI.  KADAM  A. S.  (PRO)</option>
                                        
                                            <option value="SHRI. GAWALE K. M.">SHRI. GAWALE K. M.</option>
                                        
                                            <option value="SHRI.  DARSHANKAR A. A.">SHRI.  DARSHANKAR A. A.</option>
                                        
                                            <option value="SHRI.  PATIL S. S.">SHRI.  PATIL S. S.</option>
                                        
                                            <option value="SHRI.  JADHAV S. S.">SHRI.  JADHAV S. S.</option>
                                        
                                            <option value="SHRI.  NARWADE  S. D.">SHRI.  NARWADE  S. D.</option>
                                        
                                            <option value="SHRI.  KULKARNI M. S.">SHRI.  KULKARNI M. S.</option>
                                        
                                            <option value="SHRI. KALASKAR A. V.">SHRI. KALASKAR A. V.</option>
                                        
                                            <option value="SHRI. SALVE V. P.">SHRI. SALVE V. P.</option>
                                        
                                            <option value="MD. SHAKEEL  ABDUL  KARIM">MD. SHAKEEL  ABDUL  KARIM</option>
                                        
                                            <option value="SMT.  NILAWAR  A.  G.">SMT.  NILAWAR  A.  G.</option>
                                        
                                            <option value="SHRI. PATIL D. W.">SHRI. PATIL D. W.</option>
                                        
                                            <option value="SHRI. MOHARIR  R. B.">SHRI. MOHARIR  R. B.</option>
                                        
                                            <option value="SHRI. BHURKE T.C.">SHRI. BHURKE T.C.</option>
                                        
                                            <option value="SHRI.  GAJARE S. N.">SHRI.  GAJARE S. N.</option>
                                        
                                            <option value="SHRI. RAHEGAONKAR A. M.">SHRI. RAHEGAONKAR A. M.</option>
                                        
                                            <option value="SHRI.  HAMBARDE S. K.">SHRI.  HAMBARDE S. K.</option>
                                        
                                            <option value="SHRI.  DUDHALE D.K.">SHRI.  DUDHALE D.K.</option>
                                        
                                            <option value="SHRI. KONKA D. R.">SHRI. KONKA D. R.</option>
                                        
                                            <option value="SHRI. AGLAVE L. V.">SHRI. AGLAVE L. V.</option>
                                        
                                            <option value="SHRI. PUPALWAD K. B.">SHRI. PUPALWAD K. B.</option>
                                        
                                            <option value="SHRI.  SALUNKE Ramdas Dhondiram">SHRI.  SALUNKE Ramdas Dhondiram</option>
                                        
                                            <option value="SHRI.BORALE R.K.">SHRI.BORALE R.K.</option>
                                        
                                            <option value="SHRI. NINGADALLI D. G.">SHRI. NINGADALLI D. G.</option>
                                        
                                            <option value="SHRI. SHINDE RAVIKIRAN SURYABHAN.">SHRI. SHINDE RAVIKIRAN SURYABHAN.</option>
                                        
                                            <option value="ABDUL BASHEER ABDUL MAJEED">ABDUL BASHEER ABDUL MAJEED</option>
                                        
                                            <option value="PIMPALGAONKAR A.S.">PIMPALGAONKAR A.S.</option>
                                        
                                            <option value="SHRI. DAKORE S.B.">SHRI. DAKORE S.B.</option>
                                        
                                            <option value="SHRI. DHALE  S. T.">SHRI. DHALE  S. T.</option>
                                        
                                            <option value="SHRI. BORWANDKAR B. R.">SHRI. BORWANDKAR B. R.</option>
                                        
                                            <option value="SHRI. SK.SIKANDAR ALI">SHRI. SK.SIKANDAR ALI</option>
                                        
                                            <option value="SHRI. SHIVRATRI  S. B.">SHRI. SHIVRATRI  S. B.</option>
                                        
                                            <option value="KU. PATIL K. D.">KU. PATIL K. D.</option>
                                        
                                            <option value="SHRI. KARHALE R. N.">SHRI. KARHALE R. N.</option>
                                        
                                            <option value="SHAIKH SHAHABUDDIN MD. AMIN">SHAIKH SHAHABUDDIN MD. AMIN</option>
                                        
                                            <option value="SHRI.  KONDEKAR G. M.">SHRI.  KONDEKAR G. M.</option>
                                        
                                            <option value="SMT. TAMBOLI.S.I.">SMT. TAMBOLI.S.I.</option>
                                        
                                            <option value="SHRI. KADAM V. G.">SHRI. KADAM V. G.</option>
                                        
                                            <option value="SHRI. DONGARE H. R.">SHRI. DONGARE H. R.</option>
                                        
                                            <option value="Mr. Pandit Baburao Mane ">Mr. Pandit Baburao Mane </option>
                                        
                                            <option value="SHRI. SHEMBOLE R. P.">SHRI. SHEMBOLE R. P.</option>
                                        
                                            <option value="SHRI. LATHKAR G. N.">SHRI. LATHKAR G. N.</option>
                                        
                                            <option value="SMT. KODGIRE.V.D.">SMT. KODGIRE.V.D.</option>
                                        
                                            <option value="SHRI. SHERE.R.R.">SHRI. SHERE.R.R.</option>
                                        
                                            <option value="SHRI. DYADE R. K.">SHRI. DYADE R. K.</option>
                                        
                                            <option value="SHRI. SURYAWANSHI P. M.">SHRI. SURYAWANSHI P. M.</option>
                                        
                                            <option value="SHRI G.L.LUTE">SHRI G.L.LUTE</option>
                                        
                                            <option value="SHRI KESHAV M. KALYANKAR">SHRI KESHAV M. KALYANKAR</option>
                                        
                                            <option value="SHRI.  NAGARGOJE V. G.">SHRI.  NAGARGOJE V. G.</option>
                                        
                                            <option value="DR. ADUDE R. N.">DR. ADUDE R. N.</option>
                                        
                                            <option value="SHRI.  AINDWAD G. R.">SHRI.  AINDWAD G. R.</option>
                                        
                                            <option value="SHRI. RAPATWAR D.P.">SHRI. RAPATWAR D.P.</option>
                                        
                                            <option value="SHRI. DAHALE ASHISH DHONDIRAM">SHRI. DAHALE ASHISH DHONDIRAM</option>
                                        
                                            <option value="SHRI.  HAMBARDE A. B.">SHRI.  HAMBARDE A. B.</option>
                                        
                                            <option value="SHRI.  NAROD  S. R.">SHRI.  NAROD  S. R.</option>
                                        
                                            <option value="SHRI. HAMBARDE D.M.">SHRI. HAMBARDE D.M.</option>
                                        
                                            <option value="SHRI.  LUTE S. T.">SHRI.  LUTE S. T.</option>
                                        
                                            <option value="SHRI. GAWALI BHARAT EKNATH">SHRI. GAWALI BHARAT EKNATH</option>
                                        
                                            <option value="SHRI. PANCHAL V. P.">SHRI. PANCHAL V. P.</option>
                                        
                                            <option value="SHRI. SAUDAGAR S. B.">SHRI. SAUDAGAR S. B.</option>
                                        
                                            <option value="SHRI.  RAJPUT R. D.">SHRI.  RAJPUT R. D.</option>
                                        
                                            <option value="SHRI. NAVALE V. L.">SHRI. NAVALE V. L.</option>
                                        
                                            <option value="SHRI.  ZANGADE S. G.">SHRI.  ZANGADE S. G.</option>
                                        
                                            <option value="SHRI.  KATE A.  J.">SHRI.  KATE A.  J.</option>
                                        
                                            <option value="SMT.  LOKHANDE R. D.">SMT.  LOKHANDE R. D.</option>
                                        
                                            <option value="SHRI. BOKHARE G. K.">SHRI. BOKHARE G. K.</option>
                                        
                                            <option value="SMT.  KHALSA S. D.">SMT.  KHALSA S. D.</option>
                                        
                                            <option value="SHRI.  RAWALE S. S.">SHRI.  RAWALE S. S.</option>
                                        
                                            <option value="MISS.  PATIL H. P.">MISS.  PATIL H. P.</option>
                                        
                                            <option value="SHRI. BOGAR B. G.">SHRI. BOGAR B. G.</option>
                                        
                                            <option value="SHRI.  SHINDE S. D.">SHRI.  SHINDE S. D.</option>
                                        
                                            <option value="SHRI.  HAMBARDE V. T.">SHRI.  HAMBARDE V. T.</option>
                                        
                                            <option value="SHRI.  BIRADAR  G. S.">SHRI.  BIRADAR  G. S.</option>
                                        
                                            <option value="SMT. DESHMUKH. J.A.">SMT. DESHMUKH. J.A.</option>
                                        
                                            <option value="SMT.  SHINDE S. G.">SMT.  SHINDE S. G.</option>
                                        
                                            <option value="SHRI.  BAWALE S. L.">SHRI.  BAWALE S. L.</option>
                                        
                                            <option value="SHRI.  HATAKAR M. J.">SHRI.  HATAKAR M. J.</option>
                                        
                                            <option value="SHRI. HANWATE  K. S.">SHRI. HANWATE  K. S.</option>
                                        
                                            <option value="SHRI. HAMBARDE D. B.">SHRI. HAMBARDE D. B.</option>
                                        
                                            <option value="SHRI. HAMBARDE U. N.">SHRI. HAMBARDE U. N.</option>
                                        
                                            <option value="SHRI.  CHAVAN  M. D.">SHRI.  CHAVAN  M. D.</option>
                                        
                                            <option value="SHRI.  PAWDE  P.  W.">SHRI.  PAWDE  P.  W.</option>
                                        
                                            <option value="SHRI.  SHIVRATRI S. S.">SHRI.  SHIVRATRI S. S.</option>
                                        
                                            <option value="SHRI. SONKAMBLE  A. S.">SHRI. SONKAMBLE  A. S.</option>
                                        
                                            <option value="SHRI.  SHAIKH R. H.">SHRI.  SHAIKH R. H.</option>
                                        
                                            <option value="SHRI. PATHAN S. M.">SHRI. PATHAN S. M.</option>
                                        
                                            <option value="SHRI.  AWAD T. S.">SHRI.  AWAD T. S.</option>
                                        
                                            <option value="SHAIKH JILANI SHAIKH MAHETAB">SHAIKH JILANI SHAIKH MAHETAB</option>
                                        
                                            <option value="SHRI. PINGLE  N. V.">SHRI. PINGLE  N. V.</option>
                                        
                                            <option value="SMT. KADAM M. T.">SMT. KADAM M. T.</option>
                                        
                                            <option value="SHRI. MUNDHE A. P.">SHRI. MUNDHE A. P.</option>
                                        
                                            <option value="SHRI.  DESHMUKH M. A.">SHRI.  DESHMUKH M. A.</option>
                                        
                                            <option value="SHRI.  CHAUDHARY J. V.">SHRI.  CHAUDHARY J. V.</option>
                                        
                                            <option value="PRAKASH MAROTI MUPADE">PRAKASH MAROTI MUPADE</option>
                                        
                                            <option value="SHRI. CHANDANE SHIVAJI DHONDIBA">SHRI. CHANDANE SHIVAJI DHONDIBA</option>
                                        
                                            <option value="SHRI. PALLEWAD PURUSHOTTAM RAMCHANDRA">SHRI. PALLEWAD PURUSHOTTAM RAMCHANDRA</option>
                                        
                                            <option value="SHRI. KAJBE R. D">SHRI. KAJBE R. D</option>
                                        
                                            <option value="SHRI SHAHJI R. HAMBARDE">SHRI SHAHJI R. HAMBARDE</option>
                                        
                                            <option value="SATPUTE UDHAV VENKATI">SATPUTE UDHAV VENKATI</option>
                                        
                                            <option value="SHRI.  BAGADI J. R.">SHRI.  BAGADI J. R.</option>
                                        
                                            <option value="SHRI HAMBARDE NILESH BHIMRAO ">SHRI HAMBARDE NILESH BHIMRAO </option>
                                        
                                            <option value="SHRI. SILEDAR JITENDARSINGH KUNDANSINGH">SHRI. SILEDAR JITENDARSINGH KUNDANSINGH</option>
                                        
                                            <option value="SHRI. SARKATE M.K.">SHRI. SARKATE M.K.</option>
                                        
                                            <option value="SYED KHAJA M.">SYED KHAJA M.</option>
                                        
                                            <option value="SHRI.  DHANORKAR D. R.">SHRI.  DHANORKAR D. R.</option>
                                        
                                            <option value="SHRI.  WAGHMARE M. D.">SHRI.  WAGHMARE M. D.</option>
                                        
                                            <option value="SHRI. CHITTE JAGDISH MAROTI">SHRI. CHITTE JAGDISH MAROTI</option>
                                        
                                            <option value="SHRI.  KIRDE M. V.">SHRI.  KIRDE M. V.</option>
                                        
                                            <option value="SHRI. HAMBARDE M. D.">SHRI. HAMBARDE M. D.</option>
                                        
                                            <option value="SHRI. JOSHI ABHAY ASHOKRAO">SHRI. JOSHI ABHAY ASHOKRAO</option>
                                        
                                            <option value="SHRI.  BIYABANI M. M.">SHRI.  BIYABANI M. M.</option>
                                        
                                            <option value="SHRI.  PADGHAN D. B.">SHRI.  PADGHAN D. B.</option>
                                        
                                            <option value="SHRI.  RAKHONDE M. P.">SHRI.  RAKHONDE M. P.</option>
                                        
                                            <option value="SHRI.  TIDAKE N. S.">SHRI.  TIDAKE N. S.</option>
                                        
                                            <option value="SHRI.  BHUSARE V. S.">SHRI.  BHUSARE V. S.</option>
                                        
                                            <option value="SHRI. HAMBARDE GOVIND DATTARAM">SHRI. HAMBARDE GOVIND DATTARAM</option>
                                        
                                            <option value="SHRI. LUTE SANDEEP UTTAMRAO">SHRI. LUTE SANDEEP UTTAMRAO</option>
                                        
                                            <option value="SHRI. PATIL HARISHKUMAR PANDURANG ">SHRI. PATIL HARISHKUMAR PANDURANG </option>
                                        
                                            <option value="SHRI. PUYAD DNYANESHWAR R.">SHRI. PUYAD DNYANESHWAR R.</option>
                                        
                                            <option value="SHRI DESHMUKH S.V.">SHRI DESHMUKH S.V.</option>
                                        
                                            <option value="SMT. JADHAV ASHATAI V.">SMT. JADHAV ASHATAI V.</option>
                                        
                                            <option value="Mrs. MHAISEKAR JAYSHREE C.">Mrs. MHAISEKAR JAYSHREE C.</option>
                                        
                                            <option value="DHAGE SUHASINI J.">DHAGE SUHASINI J.</option>
                                        
                                            <option value="SOW. HAMBARDE UJJWALA V.">SOW. HAMBARDE UJJWALA V.</option>
                                        
                                            <option value="SHRI. HAMBARDE LAXMAN M.">SHRI. HAMBARDE LAXMAN M.</option>
                                        
                                            <option value="SHRI. DAPKE S.V.">SHRI. DAPKE S.V.</option>
                                        
                                            <option value="SMT. HATKAT PAVAN N.">SMT. HATKAT PAVAN N.</option>
                                        
                                            <option value="KU. KAWALE SHOBHA KERBA">KU. KAWALE SHOBHA KERBA</option>
                                        
                                            <option value="SHRI. GAIKWAD JALINDAR SAMBHAJI">SHRI. GAIKWAD JALINDAR SAMBHAJI</option>
                                        
                                            <option value="SHRI. GANDLE RAMESH DATTOBA">SHRI. GANDLE RAMESH DATTOBA</option>
                                        
                                            <option value="SHRI. KAMBLE SANDEEP RAJARAM">SHRI. KAMBLE SANDEEP RAJARAM</option>
                                        
                                            <option value="SHRI. ACHALKHAMB VIJAY CHOKHAJI">SHRI. ACHALKHAMB VIJAY CHOKHAJI</option>
                                        
                                            <option value="SHRI. KAMBLE BALASAHEB RAMRAO">SHRI. KAMBLE BALASAHEB RAMRAO</option>
                                        
                                            <option value="SHRI. PANJOL ARJUN RAMCHANDRA">SHRI. PANJOL ARJUN RAMCHANDRA</option>
                                        
                                            <option value="SATPUTE SAVITA UDHAV">SATPUTE SAVITA UDHAV</option>
                                        
                                            <option value="MRS. KAUTHAKAR ANITA GOPINATHRAO">MRS. KAUTHAKAR ANITA GOPINATHRAO</option>
                                        
                                            <option value="SHRI. GORE NARAYAN LAXMANRAO">SHRI. GORE NARAYAN LAXMANRAO</option>
                                        
                                            <option value="SHRI. YELGATE SURESH NAMDEORAO">SHRI. YELGATE SURESH NAMDEORAO</option>
                                        
                                            <option value="SYYED AYYUB SYED ABDUL QUADER">SYYED AYYUB SYED ABDUL QUADER</option>
                                        
                                            <option value="SHRI. DAKE SANJAY HARIBHAU">SHRI. DAKE SANJAY HARIBHAU</option>
                                        
                                            <option value="KU. DAHALE RUPALI DILIPRAO">KU. DAHALE RUPALI DILIPRAO</option>
                                        
                                            <option value="KU. MALEGAONKAR AKANKSHA ANANT">KU. MALEGAONKAR AKANKSHA ANANT</option>
                                        
                                            <option value="SHRI. GONDHALKAR D.S.">SHRI. GONDHALKAR D.S.</option>
                                        
                                            <option value="SHRI VAIJWADE PANDURANG">SHRI VAIJWADE PANDURANG</option>
                                        
                                            <option value="Madhukar Uttamrao Alse">Madhukar Uttamrao Alse</option>
                                        
                                            <option value="SHRI. TAHADE R.S.">SHRI. TAHADE R.S.</option>
                                        
                                            <option value="SHRI. PAWAR D. G.">SHRI. PAWAR D. G.</option>
                                        
                                            <option value="SHRI.  KOLSHIKWAR DHARMRAJ SHRINIWAS">SHRI.  KOLSHIKWAR DHARMRAJ SHRINIWAS</option>
                                        
                                            <option value="SHRI. PATHAN S. S.">SHRI. PATHAN S. S.</option>
                                        
                                            <option value="SHRI. RAUT U. M.">SHRI. RAUT U. M.</option>
                                        
                                            <option value="SHRI. KANDHARE P. M.">SHRI. KANDHARE P. M.</option>
                                        
                                            <option value="SHRI. HUNDE S. M.">SHRI. HUNDE S. M.</option>
                                        
                                            <option value="SHRI. KALYANKAR R.B.">SHRI. KALYANKAR R.B.</option>
                                        
                                            <option value="SHRI. HAMBARDE B.M">SHRI. HAMBARDE B.M</option>
                                        
                                            <option value="SHRI. KAMBLE B.R. BANDU">SHRI. KAMBLE B.R. BANDU</option>
                                        
                                            <option value="SHRI. GANJEWAR R. N.">SHRI. GANJEWAR R. N.</option>
                                        
                                            <option value="SHRI. HAMBARDE DEEPAK .BABURAO">SHRI. HAMBARDE DEEPAK .BABURAO</option>
                                        
                                            <option value="SHRI. GUNDERAO G.N.">SHRI. GUNDERAO G.N.</option>
                                        
                                            <option value="SHRI.HAMBARDE KALESHWAR D.">SHRI.HAMBARDE KALESHWAR D.</option>
                                        
                                            <option value="SHRI. PAWAR R.P.">SHRI. PAWAR R.P.</option>
                                        
                                            <option value="SMT. BHISE SAVITA MAROTRAO">SMT. BHISE SAVITA MAROTRAO</option>
                                        
                                            <option value="SHRI. LOHABANDE SHASHIKANT PANDURANG">SHRI. LOHABANDE SHASHIKANT PANDURANG</option>
                                        
                                            <option value="SHRI. DAHALE SANDEEP ASHOKRAO">SHRI. DAHALE SANDEEP ASHOKRAO</option>
                                        
                                            <option value="SHAIKH AHMED NISAR SHAIKH MISKIN">SHAIKH AHMED NISAR SHAIKH MISKIN</option>
                                        
                                            <option value="SHRI. SAVANE U.M.">SHRI. SAVANE U.M.</option>
                                        
                                            <option value="SHRI. DHANMANE S. N.">SHRI. DHANMANE S. N.</option>
                                        
                                            <option value="SMT.  GAIKWAD T. P.">SMT.  GAIKWAD T. P.</option>
                                        
                                            <option value="SHRI. MANDUMLE .A. B.">SHRI. MANDUMLE .A. B.</option>
                                        
                                            <option value="SHRI. PATEL J. B.">SHRI. PATEL J. B.</option>
                                        
                                            <option value=" SHRI. HAMBARDE S. S."> SHRI. HAMBARDE S. S.</option>
                                        
                                            <option value="SHRI  KAMBLE  M. R.">SHRI  KAMBLE  M. R.</option>
                                        
                                            <option value="SHRI. PATHAN A. H.">SHRI. PATHAN A. H.</option>
                                        
                                            <option value="SHRI. PANCHAL B. N.">SHRI. PANCHAL B. N.</option>
                                        
                                            <option value="MRS. GURDHALKAR KAVITA GOVINDRAO">MRS. GURDHALKAR KAVITA GOVINDRAO</option>
                                        
                                            <option value="SHRI. SHAIKH A.I.">SHRI. SHAIKH A.I.</option>
                                        
                                            <option value="SHRI. PATHAN  A. M.">SHRI. PATHAN  A. M.</option>
                                        
                                            <option value="SHRI.  BARASE B. B.">SHRI.  BARASE B. B.</option>
                                        
                                            <option value="SHRI. HAMBARDE SANTOSH B.">SHRI. HAMBARDE SANTOSH B.</option>
                                        
                                            <option value="SHRI. HAMBARDE SHIVAJI M.">SHRI. HAMBARDE SHIVAJI M.</option>
                                        
                                            <option value="SHRI.KHOKLE RAMDAS .G..">SHRI.KHOKLE RAMDAS .G..</option>
                                        
                                            <option value="SHRI. TAKANKHAR SANDEEP RADHAKISHANRAO">SHRI. TAKANKHAR SANDEEP RADHAKISHANRAO</option>
                                        
                                            <option value="SHRI. JADHAV M.C.">SHRI. JADHAV M.C.</option>
                                        
                                            <option value="SHRI. HAMBARDE GULAB V.">SHRI. HAMBARDE GULAB V.</option>
                                        
                                            <option value="SHRI. PAWAR P.D.">SHRI. PAWAR P.D.</option>
                                        
                                            <option value="SHRI. BARSE TUKARAM BHAURAO">SHRI. BARSE TUKARAM BHAURAO</option>
                                        
                                            <option value="SHRI. MORE BALAJI GANGADHARRAO">SHRI. MORE BALAJI GANGADHARRAO</option>
                                        
                                            <option value="SHRI. GHOLAK B.V.">SHRI. GHOLAK B.V.</option>
                                        
                                            <option value="SHRI. ITEWAD PANDURANG GANGADHAR">SHRI. ITEWAD PANDURANG GANGADHAR</option>
                                        
                                            <option value="SHRI. JOGDAND SANTOSH TANAJI">SHRI. JOGDAND SANTOSH TANAJI</option>
                                        
                                            <option value="SHRI. HAMBARDE KISHOR GOVINDRAO">SHRI. HAMBARDE KISHOR GOVINDRAO</option>
                                        
                                            <option value="SHRI. TIDKE SURENDAR BHAGURAM*">SHRI. TIDKE SURENDAR BHAGURAM*</option>
                                        
                                            <option value="SHRI. HAMBARDE DIGAMBAR MUNJAJI">SHRI. HAMBARDE DIGAMBAR MUNJAJI</option>
                                        
                                            <option value="SHRI. HAMBARDE SHANKAR NAMDEVRAO">SHRI. HAMBARDE SHANKAR NAMDEVRAO</option>
                                        
                                            <option value="SHRI. CHITTE DILIP MAROTI">SHRI. CHITTE DILIP MAROTI</option>
                                        
                                            <option value="SHRI. EDKE SANDEEP NIVRUTTI ">SHRI. EDKE SANDEEP NIVRUTTI </option>
                                        
                                            <option value="MRS. RAHATIKAR SIMANTINI SHAILESH">MRS. RAHATIKAR SIMANTINI SHAILESH</option>
                                        
                                            <option value="SHRI. NAIK RAJESH SHIVAJIRAO">SHRI. NAIK RAJESH SHIVAJIRAO</option>
                                        
                                            <option value="MS. GHOGRE VARSHATAI HANMANTRAO">MS. GHOGRE VARSHATAI HANMANTRAO</option>
                                        
                                            <option value="SHRI. MAID RAVINDRA KASHINATH">SHRI. MAID RAVINDRA KASHINATH</option>
                                        
                                            <option value="SHRI. SHINDE BALAJI UTTAMRAO">SHRI. SHINDE BALAJI UTTAMRAO</option>
                                        
                                            <option value="MRS. LOKADE JIJABAI MANIKA">MRS. LOKADE JIJABAI MANIKA</option>
                                        
                                            <option value="RAWANGAONKAR RAMESH C.">RAWANGAONKAR RAMESH C.</option>
                                        
                                            <option value="SHRI. DHAMNE SANTOSH SAHEBRAO">SHRI. DHAMNE SANTOSH SAHEBRAO</option>
                                        
                                            <option value="SHRI. CHOUDHARI SAMBHAJI PANDURANG">SHRI. CHOUDHARI SAMBHAJI PANDURANG</option>
                                        
                                            <option value="SHRI. BHOSLE SANDIP PURBHAJI">SHRI. BHOSLE SANDIP PURBHAJI</option>
                                        
                                            <option value="SMT. CHITTARE JYOTI PRAKASH">SMT. CHITTARE JYOTI PRAKASH</option>
                                        
                                            <option value="MRS. TOTALWAR SANGITA RAJARAM">MRS. TOTALWAR SANGITA RAJARAM</option>
                                        
                                            <option value="MS. SARPATE SHILPA SHANKERRAO">MS. SARPATE SHILPA SHANKERRAO</option>
                                        
                                            <option value="MS. DVSHATWAR ANUTAI BALAJI">MS. DVSHATWAR ANUTAI BALAJI</option>
                                        
                                            <option value="SHRI. POPALE DAYANAND SHIVAJIRAO">SHRI. POPALE DAYANAND SHIVAJIRAO</option>
                                        
                                            <option value="SHRI. PAWAR GANESH HARI">SHRI. PAWAR GANESH HARI</option>
                                        
                                            <option value="MRS. DHOND MADHURI SHIVAJIRAO">MRS. DHOND MADHURI SHIVAJIRAO</option>
                                        
                                            <option value="MRS. TIDKE SANGITA BALAJIRAO">MRS. TIDKE SANGITA BALAJIRAO</option>
                                        
                                            <option value="SHRI. SATHE GAJANAN KERBA">SHRI. SATHE GAJANAN KERBA</option>
                                        
                                            <option value="KU. KURUDE PALLAVI G.">KU. KURUDE PALLAVI G.</option>
                                        
                                            <option value="SHRI. NAGRE SUDHAKAR DAGDIBA">SHRI. NAGRE SUDHAKAR DAGDIBA</option>
                                        
                                            <option value="SHRI. KIRKAN RAM BABARAO">SHRI. KIRKAN RAM BABARAO</option>
                                        
                                            <option value="SHRI. HAMBARDE GANGADHAR DEVIDASRAO">SHRI. HAMBARDE GANGADHAR DEVIDASRAO</option>
                                        
                                            <option value="SHRI. JADHAV VINAYAK SAMBHAJI">SHRI. JADHAV VINAYAK SAMBHAJI</option>
                                        
                                            <option value="SHRI. ROKADE BHAGWAN DEVRAO">SHRI. ROKADE BHAGWAN DEVRAO</option>
                                        
                                            <option value="SHRI. HAMBARDE KAPIL ANANDRAO">SHRI. HAMBARDE KAPIL ANANDRAO</option>
                                        
                                            <option value="SHRI. BHAMTA SHANKARSINGH KESHARSINGH">SHRI. BHAMTA SHANKARSINGH KESHARSINGH</option>
                                        
                                            <option value="SHRI. PUJARI KHEMSINGH REKHASINGH">SHRI. PUJARI KHEMSINGH REKHASINGH</option>
                                        
                                            <option value="SHRI. HAMBARDE JAIRAM MADHAVRAO">SHRI. HAMBARDE JAIRAM MADHAVRAO</option>
                                        
                                            <option value="SHRI. JAYBHAYE MADHAV BALAJI">SHRI. JAYBHAYE MADHAV BALAJI</option>
                                        
                                            <option value="SHRI. WANJE SUBHASH DNYANOBA">SHRI. WANJE SUBHASH DNYANOBA</option>
                                        
                                            <option value="SHRI. KAMBLE SUNIL DIGAMBAR">SHRI. KAMBLE SUNIL DIGAMBAR</option>
                                        
                                            <option value="SHRI. CHOUDANTE SANJAY NAGORAO">SHRI. CHOUDANTE SANJAY NAGORAO</option>
                                        
                                            <option value="SHRI. PANCHAL A.B.">SHRI. PANCHAL A.B.</option>
                                        
                                            <option value="SHRI. BOYANE R.T.">SHRI. BOYANE R.T.</option>
                                        
                                            <option value="SHRI.  KATKAR A. B.">SHRI.  KATKAR A. B.</option>
                                        
                                            <option value="SHRI. PERUKA  L. N.">SHRI. PERUKA  L. N.</option>
                                        
                                            <option value="SHRI. BHUMAK R.B.">SHRI. BHUMAK R.B.</option>
                                        
                                            <option value="SHRI.  HAMBARDE T. K.">SHRI.  HAMBARDE T. K.</option>
                                        
                                            <option value="SMT. INGLE C. L.">SMT. INGLE C. L.</option>
                                        
                                            <option value="SHRI.  GOVANDE P. J.">SHRI.  GOVANDE P. J.</option>
                                        
                                            <option value="SHRI. SONTAKKE GOVIND PARASRAM">SHRI. SONTAKKE GOVIND PARASRAM</option>
                                        
                                            <option value="MRS. PATIL S.S.">MRS. PATIL S.S.</option>
                                        
                                            <option value="SHRI HANVATE KALABA NAMADEV">SHRI HANVATE KALABA NAMADEV</option>
                                        
                                            <option value="SHRI RAGADE PRAKASH ARJUN">SHRI RAGADE PRAKASH ARJUN</option>
                                        
                                            <option value="SHRI. KAMBLE AKSHYKUMAR KASHINATHRAO">SHRI. KAMBLE AKSHYKUMAR KASHINATHRAO</option>
                                        
                                            <option value="Mrs. SHINDE BEBI VITTHALRAO">Mrs. SHINDE BEBI VITTHALRAO</option>
                                        
                                            <option value="Dr.B. SURENDRANATH  REDDY">Dr.B. SURENDRANATH  REDDY</option>
                                        
                                            <option value="JAIN RUPALI SHIKHARCHAND">JAIN RUPALI SHIKHARCHAND</option>
                                        
                                            <option value="JADHAV BABURAO SAMBHAJI">JADHAV BABURAO SAMBHAJI</option>
                                        
                                            <option value="JADHAV SANJAY DASHRATH">JADHAV SANJAY DASHRATH</option>
                                        
                                            <option value="CHAVAN SANTOSH KISHANRAO">CHAVAN SANTOSH KISHANRAO</option>
                                        
                                            <option value="BOAINWAD DILIP L.">BOAINWAD DILIP L.</option>
                                        
                                            <option value="SHRIKHANDE SANTOSH PRABHAKAR">SHRIKHANDE SANTOSH PRABHAKAR</option>
                                        
                                            <option value="DESHMANE SHIVAJI GANPATRAO">DESHMANE SHIVAJI GANPATRAO</option>
                                        
                                            <option value="HAMBARDE GOVIND BHAURAO">HAMBARDE GOVIND BHAURAO</option>
                                        
                                            <option value="DESHMUKH RAMRAO NARAYANRAO">DESHMUKH RAMRAO NARAYANRAO</option>
                                        
                                            <option value="KAMBLE DEEPAK NAGORAO">KAMBLE DEEPAK NAGORAO</option>
                                        
                                            <option value="HAMBARDE VYANKATI BABARAO">HAMBARDE VYANKATI BABARAO</option>
                                        
                                            <option value="MEHATRE KALBA NAGORAO">MEHATRE KALBA NAGORAO</option>
                                        
                                            <option value="HUNDE GAJANAN MADHAVRAO">HUNDE GAJANAN MADHAVRAO</option>
                                        
                                            <option value="CHITTE BALIRAM NARAYAN">CHITTE BALIRAM NARAYAN</option>
                                        
                                            <option value="KAMBLE SAMBHA MARIBA">KAMBLE SAMBHA MARIBA</option>
                                        
                                            <option value="HAMBARDE VITHAL TANAJI">HAMBARDE VITHAL TANAJI</option>
                                        
                                            <option value="KHONDE SHIWAJI GOVIND">KHONDE SHIWAJI GOVIND</option>
                                        
                                            <option value="SIDDIQUI MD. KHAJAMIYA MD. SARWAR">SIDDIQUI MD. KHAJAMIYA MD. SARWAR</option>
                                        
                                            <option value="HASSEKAR RAJKUMAR VASANTRAO">HASSEKAR RAJKUMAR VASANTRAO</option>
                                        
                                            <option value="DOIPHODE MADHAV GANGADHAR">DOIPHODE MADHAV GANGADHAR</option>
                                        
                                            <option value="KURESHI MUJIBUL HASAN RIYAJUL H.">KURESHI MUJIBUL HASAN RIYAJUL H.</option>
                                        
                                            <option value="KALYANKAR KALINDA KONDIBA">KALYANKAR KALINDA KONDIBA</option>
                                        
                                            <option value="VISHWANATH TUKARAM HANWATE">VISHWANATH TUKARAM HANWATE</option>
                                        
                                            <option value="SHENDGE NAGORAO VITHALRAO">SHENDGE NAGORAO VITHALRAO</option>
                                        
                                            <option value="HAMBARDE TUKARAM VYANKATI">HAMBARDE TUKARAM VYANKATI</option>
                                        
                                            <option value="GAIKWAD DILIP VITTHALRAO">GAIKWAD DILIP VITTHALRAO</option>
                                        
                                            <option value="LUTE RAMESH RANGNATH">LUTE RAMESH RANGNATH</option>
                                        
                                            <option value="LUTE VINAYAK  BALAJI">LUTE VINAYAK  BALAJI</option>
                                        
                                            <option value="HAMBARDE SHIVDAS BABURAO">HAMBARDE SHIVDAS BABURAO</option>
                                        
                                            <option value="SHAIKH RASHID SHAIKH MEHATAB">SHAIKH RASHID SHAIKH MEHATAB</option>
                                        
                                            <option value="PUJARI RATANSINGH DARSHANSINGH">PUJARI RATANSINGH DARSHANSINGH</option>
                                        
                                            <option value="HAMBARDE VIJAY SHANKARRAO">HAMBARDE VIJAY SHANKARRAO</option>
                                        
                                            <option value="JOGDAND RAM BALAJI">JOGDAND RAM BALAJI</option>
                                        
                                            <option value="HAMBARDE SAMBHAJI LAXMANRAO">HAMBARDE SAMBHAJI LAXMANRAO</option>
                                        
                                            <option value="KOMATWAR ATUL VITHALRAO">KOMATWAR ATUL VITHALRAO</option>
                                        
                                            <option value="LUTE SAHEB DNYANOBA">LUTE SAHEB DNYANOBA</option>
                                        
                                            <option value="HAMBARDE DATTATRAYA MAROTRAO">HAMBARDE DATTATRAYA MAROTRAO</option>
                                        
                                            <option value="HINGE GANGADHAR BAPURAO">HINGE GANGADHAR BAPURAO</option>
                                        
                                            <option value="HAMBARDE VITHAL GOVINDRAO">HAMBARDE VITHAL GOVINDRAO</option>
                                        
                                            <option value="JOGDAND VENKATI TANAJIRAO">JOGDAND VENKATI TANAJIRAO</option>
                                        
                                            <option value="HAMBARDE SAMBHAJI DIGAMBAR">HAMBARDE SAMBHAJI DIGAMBAR</option>
                                        
                                            <option value="DUKRE BALASAHEB KISHANRAO">DUKRE BALASAHEB KISHANRAO</option>
                                        
                                            <option value="DESHMUKH BHAGVAN BABARAO">DESHMUKH BHAGVAN BABARAO</option>
                                        
                                            <option value="KATTEWAR ASHOK DASHARATH">KATTEWAR ASHOK DASHARATH</option>
                                        
                                            <option value="GAVANDE JANARDAN RAMRAO">GAVANDE JANARDAN RAMRAO</option>
                                        
                                            <option value="HAMBARDE SANTOSH TUKARAM">HAMBARDE SANTOSH TUKARAM</option>
                                        
                                            <option value="HAMBARDE TRIPATI GOVINDRAO">HAMBARDE TRIPATI GOVINDRAO</option>
                                        
                                            <option value="KANDHARE BALAJI DIGAMBAR">KANDHARE BALAJI DIGAMBAR</option>
                                        
                                            <option value="NANDEDKAR NITIN KISHANRAO">NANDEDKAR NITIN KISHANRAO</option>
                                        
                                            <option value="TELANG MOHAN GOVINDRAO">TELANG MOHAN GOVINDRAO</option>
                                        
                                            <option value="SHINDE ZELAN RUKHMAJI">SHINDE ZELAN RUKHMAJI</option>
                                        
                                            <option value="SHAME DHONDIBA KERBA">SHAME DHONDIBA KERBA</option>
                                        
                                            <option value="SHIRALE VITHAL MAROTRAO">SHIRALE VITHAL MAROTRAO</option>
                                        
                                            <option value="THAKUR BANKATSING KHUSHALSING">THAKUR BANKATSING KHUSHALSING</option>
                                        
                                            <option value="THAKUR SHANKAR GANUSING">THAKUR SHANKAR GANUSING</option>
                                        
                                            <option value="KADAM MARUTI DATTATRAYA">KADAM MARUTI DATTATRAYA</option>
                                        
                                            <option value="WAGHMARE DIGAMBAR SHANKAR">WAGHMARE DIGAMBAR SHANKAR</option>
                                        
                                            <option value="DULGACH ANITA KASHMIR">DULGACH ANITA KASHMIR</option>
                                        
                                            <option value="BIDLA AJAMER RAMVILAS">BIDLA AJAMER RAMVILAS</option>
                                        
                                            <option value="DULGACH MINDAR BHUPSING">DULGACH MINDAR BHUPSING</option>
                                        
                                            <option value="DULGACH SANGITA MINDAR">DULGACH SANGITA MINDAR</option>
                                        
                                            <option value="HATHAWAL RAVINDRAKUMAR KISHANCHAND">HATHAWAL RAVINDRAKUMAR KISHANCHAND</option>
                                        
                                            <option value="CHINDALIYA SANJAY RAGHUVIR">CHINDALIYA SANJAY RAGHUVIR</option>
                                        
                                            <option value="CHINDALIYA MAYA RAJU">CHINDALIYA MAYA RAJU</option>
                                        
                                            <option value="KAGDA NARSI RAMVILAS">KAGDA NARSI RAMVILAS</option>
                                        
                                            <option value=" BIDLA PRADIP OMPRAKASH"> BIDLA PRADIP OMPRAKASH</option>
                                        
                                            <option value="BHUMAK SANTOSHI RAJU">BHUMAK SANTOSHI RAJU</option>
                                        
                                            <option value="TAK MANOJ RAMHER">TAK MANOJ RAMHER</option>
                                        
                                            <option value="WAGHMARE LAXMIBAI NARAYAN">WAGHMARE LAXMIBAI NARAYAN</option>
                                        
                                            <option value="BARSE JIVAN SAMBHAJI">BARSE JIVAN SAMBHAJI</option>
                                        
                                            <option value="PARADKAR CHOUTRABAI SAHEBRAO">PARADKAR CHOUTRABAI SAHEBRAO</option>
                                        
                                            <option value="LUTE GANGABAI GOVINDRAO">LUTE GANGABAI GOVINDRAO</option>
                                        
                                            <option value="PANDANWAD ANANDA GANPATRAO">PANDANWAD ANANDA GANPATRAO</option>
                                        
                                            <option value="ANCHEWAR SANGITA VIJAYKUMAR">ANCHEWAR SANGITA VIJAYKUMAR</option>
                                        
                                            <option value="HANWATE KALINDA BHIMRAO">HANWATE KALINDA BHIMRAO</option>
                                        
                                            <option value="SHAIKH SHAHENAZ DASTFIR">SHAIKH SHAHENAZ DASTFIR</option>
                                        
                                            <option value="SMT. MUNDHE  PARUBAI RAOSAHEB">SMT. MUNDHE  PARUBAI RAOSAHEB</option>
                                        
                                            <option value="HOLKAR VITHAL DEVRAO">HOLKAR VITHAL DEVRAO</option>
                                        
                                            <option value="DESHMUKH PRAMOD MADHAVRAO">DESHMUKH PRAMOD MADHAVRAO</option>
                                        
                                            <option value="POTPHODE SHOBHA BABARAO">POTPHODE SHOBHA BABARAO</option>
                                        
                                            <option value="PATANGE RAMRAO VINAYAKRAO">PATANGE RAMRAO VINAYAKRAO</option>
                                        
                                            <option value="HAMBARDE BABARAO MAROTRAO">HAMBARDE BABARAO MAROTRAO</option>
                                        
                                            <option value="KOMATWAR NAMDEO YESHWANTRAO">KOMATWAR NAMDEO YESHWANTRAO</option>
                                        
                                            <option value="PATIL DATTATREY GOVINDRAO">PATIL DATTATREY GOVINDRAO</option>
                                        
                                            <option value="BHIGANIYA KIRAN MAHINDRA">BHIGANIYA KIRAN MAHINDRA</option>
                                        
                                            <option value="BARSE SHANTABAI MADHAV">BARSE SHANTABAI MADHAV</option>
                                        
                                            <option value="HANWATE CHANDRAKALA NAGORAO">HANWATE CHANDRAKALA NAGORAO</option>
                                        
                                            <option value="LANDGE SHIVKANTA MADHAV">LANDGE SHIVKANTA MADHAV</option>
                                        
                                            <option value="HAMBARDE VYANKATI BHAURAO">HAMBARDE VYANKATI BHAURAO</option>
                                        
                                            <option value="GABHANE SUBHASH DATTATRAYA">GABHANE SUBHASH DATTATRAYA</option>
                                        
                                            <option value="HAMBARDE CHAMPAT GHANSHYAM">HAMBARDE CHAMPAT GHANSHYAM</option>
                                        
                                            <option value="MORE VITTHAL NAGORAO">MORE VITTHAL NAGORAO</option>
                                        
                                            <option value="LUTE SHIVAM DATTARAM">LUTE SHIVAM DATTARAM</option>
                                        
                                            <option value="HAMBARDE SANJAY DEVIDAS">HAMBARDE SANJAY DEVIDAS</option>
                                        
                                            <option value="SMT. SRAVAN PRAMILA ASHOK">SMT. SRAVAN PRAMILA ASHOK</option>
                                        
                                            <option value="SAWAISONKAMBLE DHARMENDRA BHIKAJI">SAWAISONKAMBLE DHARMENDRA BHIKAJI</option>
                                        
                                            <option value="BARSE GANESH LAXMANRAO">BARSE GANESH LAXMANRAO</option>
                                        
                                            <option value="SALEEM KHAN SHER KHAN PATHAN">SALEEM KHAN SHER KHAN PATHAN</option>
                                        
                                            <option value="PUJARI  MOHANSINGH GURUBACCHANSINGH">PUJARI  MOHANSINGH GURUBACCHANSINGH</option>
                                        
                                            <option value="SHEMBOLE BABAN BHAURAO">SHEMBOLE BABAN BHAURAO</option>
                                        
                                            <option value="LUTE ANANDA SHANKAR">LUTE ANANDA SHANKAR</option>
                                        
                                            <option value="HAMBARDE SANTOSH NAMDEVRAO">HAMBARDE SANTOSH NAMDEVRAO</option>
                                        
                                            <option value="KALYANKAR SHIVAJI NAMDEORAO">KALYANKAR SHIVAJI NAMDEORAO</option>
                                        
                                            <option value="HAMBARDE DADARAO DATTARAM">HAMBARDE DADARAO DATTARAM</option>
                                        
                                            <option value="HINGE BABAN RAMJI">HINGE BABAN RAMJI</option>
                                        
                                            <option value="SHAIKH SALIM SHAIKH ALI">SHAIKH SALIM SHAIKH ALI</option>
                                        
                                            <option value="MORE BALAJI KASHINATH">MORE BALAJI KASHINATH</option>
                                        
                                            <option value="LUTE BALAJI BHUJANGRAO">LUTE BALAJI BHUJANGRAO</option>
                                        
                                            <option value="HANWATE VISHWAMBHAR BALIRAM">HANWATE VISHWAMBHAR BALIRAM</option>
                                        
                                            <option value="LUTE GANGADHAR DHONDIBA">LUTE GANGADHAR DHONDIBA</option>
                                        
                                            <option value="VAIDYA DADARAO NARAYANRAO">VAIDYA DADARAO NARAYANRAO</option>
                                        
                                            <option value="SHINDE GAJANAN">SHINDE GAJANAN</option>
                                        
                                            <option value="TELANGE GANESH DATTA">TELANGE GANESH DATTA</option>
                                        
                                            <option value="MOHITE RAKHMA PRALHAD">MOHITE RAKHMA PRALHAD</option>
                                        
                                            <option value="YUSUF KHAN MUSTAFA KHAN PATHAN">YUSUF KHAN MUSTAFA KHAN PATHAN</option>
                                        
                                            <option value="SHAIKH HABIB SHAIKH ISMAIL">SHAIKH HABIB SHAIKH ISMAIL</option>
                                        
                                            <option value="INDRAJITSINGH DARSHANSINGH BAL">INDRAJITSINGH DARSHANSINGH BAL</option>
                                        
                                            <option value="GULWE ASHISH BHIWAJIRAO">GULWE ASHISH BHIWAJIRAO</option>
                                        
                                            <option value="GAULKAR SUDHIR NIVRATIRAO">GAULKAR SUDHIR NIVRATIRAO</option>
                                        
                                            <option value="ROKADE DURGADAS BABNRAO">ROKADE DURGADAS BABNRAO</option>
                                        
                                            <option value="CHOUDHARY GIRISH V.">CHOUDHARY GIRISH V.</option>
                                        
                                            <option value="HANMANT S. FADEWAR">HANMANT S. FADEWAR</option>
                                        
                                            <option value="PADME SANTOSH LAXMANRAO">PADME SANTOSH LAXMANRAO</option>
                                        
                                            <option value="PAWAR DNYANESHWAR DADAJI">PAWAR DNYANESHWAR DADAJI</option>
                                        
                                            <option value="GAIKWAD Santosh Gundoba">GAIKWAD Santosh Gundoba</option>
                                        
                                            <option value="INGOLE ARUN BAPURAO">INGOLE ARUN BAPURAO</option>
                                        
                                            <option value="PATIL PRAMOD HANMANTRAO">PATIL PRAMOD HANMANTRAO</option>
                                        
                                            <option value="DR. LATURKAR VANI NIKHIL">DR. LATURKAR VANI NIKHIL</option>
                                        
                                            <option value="SHRI. SHINDE ATUL SHIVAJIRAO">SHRI. SHINDE ATUL SHIVAJIRAO</option>
                                        
                                            <option value="SHAIKH KAYUM USMAN">SHAIKH KAYUM USMAN</option>
                                        
                                            <option value="KAMBLE SHAILESH DEVIDASRAO">KAMBLE SHAILESH DEVIDASRAO</option>
                                        
                                            <option value="KAMBLE LEENA MANISH">KAMBLE LEENA MANISH</option>
                                        
                                            <option value="BADGIRE JYOTI ANGADRAO">BADGIRE JYOTI ANGADRAO</option>
                                        
                                            <option value="DESHMUKH RUPALI MADHAVRAO">DESHMUKH RUPALI MADHAVRAO</option>
                                        
                                            <option value="BAN SHITAL ACHYUT">BAN SHITAL ACHYUT</option>
                                        
                                            <option value="KUBDE JYOTI BALAJI">KUBDE JYOTI BALAJI</option>
                                        
                                            <option value="MANE SAMBHAJI VISHNU">MANE SAMBHAJI VISHNU</option>
                                        
                                            <option value="MANE RAJARAM SAKHARAM">MANE RAJARAM SAKHARAM</option>
                                        
                                            <option value="DR.SUREKHA S. MUNGAL">DR.SUREKHA S. MUNGAL</option>
                                        
                                            <option value="NAGESH RANGNATHRAO KHADKEKAR">NAGESH RANGNATHRAO KHADKEKAR</option>
                                        
                                            <option value="ANANDKUMAR SHIVAJIRAO BHOSALE">ANANDKUMAR SHIVAJIRAO BHOSALE</option>
                                        
                                            <option value="LONARKAR PRAMOD">LONARKAR PRAMOD</option>
                                        
                                            <option value="KADAM SHALINI">KADAM SHALINI</option>
                                        
                                            <option value="BODHGIRE NANDKUMAR BABURAO">BODHGIRE NANDKUMAR BABURAO</option>
                                        
                                            <option value="CHITTE PRAKASH GOPALRAO">CHITTE PRAKASH GOPALRAO</option>
                                        
                                            <option value="HAMBARDE GOPIRAJ BABURAO">HAMBARDE GOPIRAJ BABURAO</option>
                                        
                                            <option value="BHOSLE VIVEK DAJISAHEB">BHOSLE VIVEK DAJISAHEB</option>
                                        
                                            <option value=" HAMBARDE KAILAS MURLIDHAR"> HAMBARDE KAILAS MURLIDHAR</option>
                                        
                                            <option value="PIMPLE RAMRAO GYANOBA">PIMPLE RAMRAO GYANOBA</option>
                                        
                                            <option value="SHINDE BALAJI LAXMANRAO">SHINDE BALAJI LAXMANRAO</option>
                                        
                                            <option value="SYED GAFFAR SYED SATTAR">SYED GAFFAR SYED SATTAR</option>
                                        
                                            <option value="JADHAV LAXMAN ANANDRAO">JADHAV LAXMAN ANANDRAO</option>
                                        
                                            <option value="SHINDE DEEPAK MOHANRAO">SHINDE DEEPAK MOHANRAO</option>
                                        
                                            <option value="Jadhav Gajanan Ravan">Jadhav Gajanan Ravan</option>
                                        
                                            <option value="Rokade Balaji Kalba">Rokade Balaji Kalba</option>
                                        
                                            <option value="Barse Vishwambhar Sadashiv">Barse Vishwambhar Sadashiv</option>
                                        
                                            <option value="Jadhav Haridas Ramrao">Jadhav Haridas Ramrao</option>
                                        
                                            <option value="Lute Madhav Sambhaji">Lute Madhav Sambhaji</option>
                                        
                                            <option value="Gawate Kavita Santosh">Gawate Kavita Santosh</option>
                                        
                                            <option value="Deshmukh Rajesh Sadashivrao">Deshmukh Rajesh Sadashivrao</option>
                                        
                                            <option value="Hambarde Santosh Nagorao">Hambarde Santosh Nagorao</option>
                                                
                                        </select>
                                    </div> */}
                            
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Cheque Number</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                            <Form.Group className="mb-3" controlId="newLoanChequeNumberField">
                              <Form.Control
                                type="number"
                                className="form-control date"
                                placeholder="Enter Cheque Number"
                                {...register("newLoanChequeNumber",{required: "please enter Cheque Number"})}
                              />
                             </Form.Group>
                            </div>
                          </div>
                          <p style={{color:"red"}}>{errors?.newLoanChequeNumber?.message}</p>
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



                        <div className="col-md-8">
                          <b>Loan Balance</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Loan Balance"
                              />
                            
                            </div>
                          </div>
                        </div>



                     


                       

                        <Button type="submit" variant='primary' className="btn bg-indigo btn-block btn-lg waves-effect">Apply Loan</Button>
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

export default NewLoan
