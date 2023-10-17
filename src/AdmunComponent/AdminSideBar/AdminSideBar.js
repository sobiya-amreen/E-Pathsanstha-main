import React, { useState } from "react";
import "./AdminSideBar.css";
import { Link } from "react-router-dom";
import { FcDonate, FcBusinessman, FcMoneyTransfer, FcServices, FcInvite, FcCurrencyExchange, FcDisapprove, FcSettings, FcSurvey, FcViewDetails, FcPieChart } from "react-icons/fc";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaDonate } from "react-icons/fa";
import { TbCoinRupee, TbCurrencyDollarOff } from "react-icons/tb"
import { RiNotification2Line } from "react-icons/ri";
import UserDisplay from "../UserImage/UserDisplay";




// import { AnimatePresence, motion } from "framer-motion"; 

const AdminSideBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [reset, setReset] = useState(isOpen)
    const toggle = () => {
        // setIsOpen(!isOpen)



    }
    // const user = {
    //     username: 'User Name',
    //     image: '', // Replace this with the actual URL or base64 data
    // };



    return (

        <div>
            <section>
                {/* <!-- Left Sidebar --> */}
                <aside id="leftsidebar" className="sidebar">
                    {/* <motion.div animate={{width: isOpen ? "300px" : "57px"}}> */}
                    {/* <motion.div animate={{ isOpen ? { width: "300px"}  {display:"none"}}}> */}
                    {/* <!-- User Info --> */}
                    <div className="user-info">
                        <div><i className="material-icons slideIcon bars" >reorder</i></div>
                        {/* {isOpen && */}
                        <div className="image">
                            <img src="http://esanstha.aviratinfotech.com/logo/sr_logo.jpeg" width="100" height="100" alt="User" />
                           
                            {/* <UserDisplay 
                            username={user.username}
                            image={user.image} /> */}
                          
                            {/* username={user.username} */}
                        </div>
                        {/* } */}
                        {/* <div className="info-container">
                    <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
                    <div className="email">john.doe@example.com</div>
                    <div className="btn-group user-helper-dropdown">
                        <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                        <ul className="dropdown-menu pull-right">
                            <li><p ><i className="material-icons">person</i>Profile</p></li>
                            <li role="seperator" className="divider"></li>
                            <li><p ><i className="material-icons">group</i>Followers</p></li>
                            <li><p ><i className="material-icons">shopping_cart</i>Sales</p></li>
                            <li><p ><i className="material-icons">favorite</i>Likes</p></li>
                            <li role="seperator" className="divider"></li>
                            <li><p ><i className="material-icons">input</i>Sign Out</p></li>
                        </ul>
                    </div>
                </div> */}
                    </div>
                    {/* <!-- #User Info --> */}


                    {/* <!-- Menu -->  */}




                    <div className="menu">
                        <ul className="list">


                            {/* Account dropdown start */}

                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Components">
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#Account" data-parent="#exampleAccordion">
                                    <FcBusinessman style={{ fontSize: '30' }} />
                                    <span className="nav-link-text">Account (खाते) </span> <i className="material-icons dropdown-icons">arrow_drop_down</i>

                                </a>
                                <ul className="sidenav-second-level collapse" id="Account">


                                    <li>
                                        <Link to="/addaccounthead">  Add Account Head  </Link>
                                    </li>
                                    <li>
                                        <Link to="/thirdpartyform">  Third Party Form   </Link>
                                    </li>
                                    <li>
                                        <Link to="/xeroxcurrentaccount">   Xerox Current Account  </Link>
                                    </li>
                                    <li>
                                        <Link to="/addmember">  Add Member  </Link>
                                    </li>
                                    <li>
                                        <Link to="/pathsansthaprofile">   Patsanstha Profile </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Account dropdown end */}


                            {/* Loan dropdown start */}
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Components" aria-describedby="tooltip626290">
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#Loan" data-parent="#exampleAccordion" aria-expanded="false">
                                    <FcDonate style={{ fontSize: '30' }} />
                                    <span className="nav-link-text">Loan Department</span> <i className="material-icons dropdown-icons">arrow_drop_down</i>
                                </a>
                                <ul className="sidenav-second-level collapse" id="Loan">
                                    <li>
                                        <Link to="/newloan"> New Loan </Link>
                                    </li>
                                    <li>
                                        <Link to="/regularloanhistory">   Regular Loan History </Link>
                                    </li>
                                    <li>
                                        <Link to="/loanamountcredit">   Loan Amount Credit </Link>
                                    </li>
                                    <li>
                                        <Link to="/closeloan">   Close Loan </Link>
                                    </li>
                                    <li>
                                        <Link to="/emergencyloan">   Emergency Loan </Link>
                                    </li>
                                    <li>
                                        <Link to="/emergencyloanhistory">   Emergency Loan History </Link>
                                    </li>
                                    <li>
                                        <Link to="/emergencyloancredit">   Emergency Loan Credit </Link>
                                    </li>
                                    <li>
                                        <Link to="/emergencyloanclose">   Emergency Loan Close </Link>
                                    </li>
                                    <li>
                                        <Link to="/monthlyemichange">   Monthly EMI Change </Link>
                                    </li>

                                </ul>
                            </li>
                            {/* Loan dropdown end */}


                            {/* Transaction dropdown Start */}
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Components">
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#transaction" data-parent="#exampleAccordion" aria-expanded="false">
                                    <FcMoneyTransfer style={{ fontSize: '30' }} />

                                    <span className="nav-link-text">Transaction</span>  <i className="material-icons dropdown-icons">arrow_drop_down</i>
                                </a>
                                <ul className="sidenav-second-level collapse" id="transaction" >
                                    <li>
                                        <Link to="/totalmember">Total Members</Link>
                                    </li>
                                    <li>
                                        <Link to="/insurence">Insurence</Link>
                                    </li>
                                    <li>
                                        <Link to="/newshare">New Share (नवीन शेअर)</Link>
                                    </li>
                                    <li>
                                        <Link to="/monthlydeposite">Monthly Deposite</Link>
                                    </li>
                                    <li>
                                        <Link to="/add_noc">Add Noc</Link>
                                    </li>


                                    {/* nested dropdown start */}
                                    <ul>
                                        {/* FD dropdown Start */}


                                        <li className="nav-item " data-toggle="tooltip" data-placement="right" title="" data-original-title="Components">
                                            <a className="nav-link nav-link-collapse collapsed " data-toggle="collapse" href="#FD" data-parent="#exampleAccordion" aria-expanded="false">
                                                {/* <FcMoneyTransfer style={{fontSize:'30'}}/> */}

                                                <span className="nav-link-text FDdropdown">FD (मुदत ठेव)</span>  <i className="material-icons dropdown-icons">arrow_drop_down</i>
                                            </a>
                                            <ul className="sidenav-second-level collapse" id="FD" >
                                                <li>
                                                    <Link to="/addfd">Add FD</Link>
                                                </li>
                                                <li>
                                                    <Link to="/closefd">Close FD</Link>
                                                </li>
                                            </ul>
                                        </li>

                                        {/* FD dropdown end */}



                                        {/* RD dropdown start */}

                                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Components">
                                            <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#RD" data-parent="#exampleAccordion" aria-expanded="false">

                                                {/* <BsCurrencyRupee style={{fontSize:'30', color:'#3F51B5'}}/> */}
                                                <span className="nav-link-text">RD (आवर्ती ठेव)</span> <i className="material-icons dropdown-icons">arrow_drop_down</i>
                                            </a>
                                            <ul className="sidenav-second-level collapse" id="RD" >
                                                <li>
                                                    <Link to="/addrd">Add RD</Link>
                                                </li>
                                                <li>
                                                    <Link to="/closerd">Close RD</Link>
                                                </li>
                                                <li>
                                                    <Link to="/closerddetails">Close RD Details</Link>
                                                </li>
                                            </ul>
                                        </li>

                                        {/* RD dropdown end */}



                                    </ul>
                                    {/* nested dropdown ends */}

                                </ul>
                            </li>

                            {/* Transaction dropdown End */}


                            {/* FD dropdown Start */}

                            {/* <li className="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Components">
                        <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#FD" data-parent="#exampleAccordion" aria-expanded="false">
                        <FcMoneyTransfer style={{fontSize:'30'}}/>

                            <span className="nav-link-text">FD (मुदत ठेव)</span>  <i className="material-icons dropdown-icons">arrow_drop_down</i>
                        </a>
                        <ul className="sidenav-second-level collapse" id="FD" >
                            <li>
                                <Link to="/addfd">Add FD (मुदत ठेव जोडा)</Link>
                            </li>           
                            <li>
                                <Link to="/closefd">Close FD (मुदत ठेव बंद करा)</Link>
                            </li>
                        </ul>
                    </li> */}

                            {/* FD dropdown end */}



                            {/* RD dropdown start */}

                            {/* <li className="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Components">
                        <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#RD" data-parent="#exampleAccordion" aria-expanded="false">
                      
                        <BsCurrencyRupee style={{fontSize:'30', color:'#3F51B5'}}/>
                            <span className="nav-link-text">RD (आवर्ती ठेव)</span> <i className="material-icons dropdown-icons">arrow_drop_down</i>
                        </a>
                        <ul className="sidenav-second-level collapse" id="RD" >
                            <li>
                                <Link to="/addrd">Add RD (आवर्ती ठेव जोडा)</Link>
                            </li>           
                            <li>
                                <Link to="/closerd">Close RD (आवर्ती ठेव बंद करा)</Link>
                            </li>
                            <li>
                                <Link to="/closerddetails">Close RD Details</Link>
                            </li>
                        </ul>
                    </li> */}

                            {/* RD dropdown end */}










                            {" "}
                            {/* <li>
              <Link to="/insurence">
                  <p>
                  <FcInvite style={{fontSize:'30'}}/>
                    <span>Insurence</span>
                  </p>
              </Link> */}
                            {/* </li> */}
                            {/* <li>
              <Link to="/monthlydeposite">
                <p> */}
                            {/* <FcCurrencyExchange style={{fontSize:'30'}}/> */}
                            {/* <FaDonate style={{fontSize:'30', color:'orange'}}/> */}

                            {/* {isOpen && <span>Monthly Deposite</span> } */}
                            {/* <span>Monthly Deposite</span>
                </p>
                </Link>
              </li> */}







                            {/* Cancel Membership start*/}

                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Components">
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#SM" data-parent="#exampleAccordion" aria-expanded="false">
                                    <FcDisapprove style={{ fontSize: '30' }} />
                                    <span className="nav-link-text">Membership Over</span> <i className="material-icons dropdown-icons">arrow_drop_down</i>
                                </a>
                                <ul className="sidenav-second-level collapse" id="SM" >
                                    <li>
                                        <Link to="/deathmember" >Dead Members</Link>
                                    </li>
                                    <li>
                                        <Link to="/terminatedmember">Retired Members</Link>
                                    </li>

                                </ul>
                            </li>
                            {/* Cancel membership ends */}


                            {/* Master Setting start */}

                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Components">
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#MS" data-parent="#exampleAccordion" aria-expanded="false">
                                    <FcServices style={{ fontSize: '30' }} />
                                    <span className="nav-link-text">Master Setting</span><i className="material-icons dropdown-icons">arrow_drop_down</i>
                                </a>
                                <ul className="sidenav-second-level collapse" id="MS" >
                                    <li>
                                        <Link to="/changeinterest">Change Interest</Link>
                                    </li>
                                    <li>
                                        <Link to="/dividendinterest">Dividend Interest</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Master setting end */}



                            {/* Report Start */}

                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Components">
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#Salesman" data-parent="#exampleAccordion" aria-expanded="false">
                                    <FcViewDetails style={{ fontSize: '30' }} />
                                    <span className="nav-link-text">Report (अहवाल )</span> <i className="material-icons dropdown-icons">arrow_drop_down</i>
                                </a>
                                <ul className="sidenav-second-level collapse" id="Salesman">
                                    <li>
                                        <Link to="/sharereport">Share Report</Link>
                                    </li>
                                    <li>
                                        <Link to="/monthlydeposit">Monthly Deposit</Link>
                                    </li>
                                    <li>
                                        <Link to="/insurencereport">Insurance Report</Link>
                                    </li>
                                    <li>
                                        <Link to="/fd_report">FD Report</Link>
                                    </li>
                                    <li>
                                        <Link to="/RD_Report">RD Report</Link>
                                    </li>
                                    <li>
                                        <Link to="/Loan_Report">Loan Report</Link>
                                    </li>
                                    <li>
                                        <Link to="/loan_close_report">Loan Close Report</Link>
                                    </li>
                                    <li>
                                        <Link to="/emergency_loan_report">Emergency Loan Report</Link>
                                    </li>
                                    <li>
                                        <Link to="/emergency_loan_close_report">Emergency Loan Close Report</Link>
                                    </li>
                                    <li>
                                        <Link to="/cancel_member_report">Cancel Member Report</Link>
                                    </li>
                                    <li>
                                        <Link to="/death_member_report">Dead Member Report</Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Report end */}



                            {/* Annual Report Start */}

                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Components">
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#Annual_Report" data-parent="#exampleAccordion">
                                    <FcSurvey style={{ fontSize: '30' }} />
                                    <span className="nav-link-text">पत्रक</span><i className="material-icons dropdown-icons">arrow_drop_down</i>
                                </a>
                                <ul className="sidenav-second-level collapse" id="Annual_Report">
                                    <li>
                                        <Link to="/terij_patrak"> तेरीज पत्रक </Link>
                                    </li>
                                    <li>
                                        <Link to="/nafatota_patrak"> नफा तोटा पत्रक </Link>
                                    </li>
                                    <li>
                                        <Link to="/taleband_patrak"> ताळेबंद पत्रक </Link>
                                    </li>
                                    <li>
                                        <Link to="/andaj_patrak"> अंदाज पत्रक </Link>
                                    </li>
                                    <li>
                                        <Link to="/day_report"> दैनंदिन पत्रक </Link>
                                    </li>
                                    <li>
                                        <Link to="/admin_annual_report"> Annual Report </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Annual Report End */}


                            {/* Deduction start */}
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Components">
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#Deduction" data-parent="#exampleAccordion">
                                    <TbCurrencyDollarOff className="deductionIcon" style={{ fontSize: 30, color: 'D14D72' }} />
                                    <span className="nav-link-text">Deduction</span><i className="material-icons dropdown-icons">arrow_drop_down</i>
                                </a>
                                <ul className="sidenav-second-level collapse" id="Deduction">
                                    <li>
                                        <Link to="/deductionGenerate">Deduction List Generate</Link>
                                    </li>
                                    <li>
                                        <Link to="/deductionCompare">Deduction List Compare</Link>
                                    </li>
                                    <li>
                                        <Link to="/Monthly_Deduction_Edit">Monthly Deduction Edit</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Deduction end */}

                            {/* Graph section Start */}
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Components">
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#analytics" data-parent="#exampleAccordion">
                                    <TbCurrencyDollarOff className="deductionIcon" style={{ fontSize: 30, color: 'D14D72' }} />
                                    <span className="nav-link-text">Analytics</span><i className="material-icons dropdown-icons">arrow_drop_down</i>
                                </a>
                                <ul className="sidenav-second-level collapse" id="analytics">
                                    <li>
                                        <Link to="/loan_graph">Loan Graph</Link>
                                    </li>
                                    <li>
                                        <Link to="/FD_Account_Graph">FD Account</Link>
                                    </li>
                                    <li>
                                        <Link to="/Monthly_Deduction_Edit">RD Account</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Graph section ends */}


                            <li>
                                <Link to="/dividend">
                                    <FcCurrencyExchange style={{ fontSize: '30' }} />
                                    <p>
                                        <span>Dividend</span>
                                    </p>
                                </Link>
                            </li>


                            <li>
                                <Link to="/notification">
                                    <p>
                                        <RiNotification2Line className="notificationIcon" style={{ fontSize: '30', color: '9575DE' }} />
                                        <span>Notification</span>
                                    </p>
                                </Link>
                            </li>


                            <li>
                                <Link to="/login">
                                    <p>
                                        <i className="material-icons">pie_chart</i>
                                        <span>login example</span>
                                    </p>
                                </Link>
                            </li>









                            <div className="btn-group user-helper-dropdown "><div className="graph"><i className="material-icons">equalizer</i>Graph</div>

                                <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                                <ul className="dropdown-menu pull-right">
                                    <Link to="/totalsharechart">   <li><p ><i className="material-icons">pie_chart</i>Total Shares Chart</p></li>  </Link>
                                    <li role="seperator" className="divider"></li>
                                    <Link to="/monthlydepositechart">  <li><p ><i className="material-icons">monetization_on</i>Monthly Deposite Chart</p></li>   </Link>
                                    <Link to="/insurencechart"> <li><p ><i className="material-icons">enhanced_encryption</i>Insurence Chart</p></li>   </Link>
                                    <Link to="/fdchart"> <li><p ><i className="material-icons">payment</i>FD Chart</p></li>   </Link>
                                    <Link to="/rdchart"> <li><p ><i className="material-icons">local_activity</i>RD Chart</p></li>  </Link>
                                    <Link to="/regularloanchart">  <li><p ><i className="material-icons">local_atm</i>Regular Loan Chart</p></li>  </Link>
                                    <Link to="/emergencyloanchart">  <li><p ><i className="material-icons">attach_money</i>Emergency Loan Chart</p></li> </Link>
                                    <Link to="/piechart">  <li><p ><i className="material-icons">pie_chart</i>Pie Chart</p></li> </Link>
                                    <li role="seperator" className="divider"></li>
                                    <li><p ><i className="material-icons">input</i>Sign Out</p></li>
                                </ul>
                            </div>




                        </ul>

                    </div>


                    {/* <!-- #Menu --> */}


                    {/* </motion.div> */}
                </aside>
                {/* <!-- #END# Left Sidebar --> */}
            </section>
        </div>
    );
};

export default AdminSideBar;
