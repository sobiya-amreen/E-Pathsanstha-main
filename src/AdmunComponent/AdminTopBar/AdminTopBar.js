import React from "react";
import "./AdminTopBar.css";
import { Link } from "react-router-dom";

const AdminTopBar = () => {
  return (
    <div>
      {/* <!-- Top Bar --> */}

      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <a
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-collapse"
              aria-expanded="true"
            ></a>

            <a className="navbar-brand">
              <span className="logo">ADMINBSB -</span> MATERIAL DESIGN
            </a>
          </div>
          <div
            className="navbar-collapse collapse in"
            id="navbar-collapse"
            aria-expanded="true"
          >
            <ul className="nav navbar-nav navbar-right">
              {/* <!-- Notifications --> */}
              <li className="dropdown notification">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                >
                  <i className="material-icons">notifications</i>
                  <span className="label-count">7</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">NOTIFICATIONS</li>
                  <li className="body">
                    <div className="slimScrollDiv t2">
                      <ul className="menu t3">
                        <li>
                          <a className=" waves-effect waves-block">
                            <div className="icon-circle bg-light-green">
                              <i className="material-icons">person_add</i>
                            </div>
                            <div className="menu-info">
                              <h4>12 new members joined</h4>
                              <p>
                                <i className="material-icons">access_time</i> 14
                                mins ago
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className=" waves-effect waves-block">
                            <div className="icon-circle bg-cyan">
                              <i className="material-icons">
                                add_shopping_cart
                              </i>
                            </div>
                            <div className="menu-info">
                              <h4>4 sales made</h4>
                              <p>
                                <i className="material-icons">access_time</i> 22
                                mins ago
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className=" waves-effect waves-block">
                            <div className="icon-circle bg-red">
                              <i className="material-icons">delete_forever</i>
                            </div>
                            <div className="menu-info">
                              <h4>
                                <b>Nancy Doe</b> deleted account
                              </h4>
                              <p>
                                <i className="material-icons">access_time</i> 3
                                hours ago
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className=" waves-effect waves-block">
                            <div className="icon-circle bg-orange">
                              <i className="material-icons">mode_edit</i>
                            </div>
                            <div className="menu-info">
                              <h4>
                                <b>Nancy</b> changed name
                              </h4>
                              <p>
                                <i className="material-icons">access_time</i> 2
                                hours ago
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className=" waves-effect waves-block">
                            <div className="icon-circle bg-blue-grey">
                              <i className="material-icons">comment</i>
                            </div>
                            <div className="menu-info">
                              <h4>
                                <b>John</b> commented your post
                              </h4>
                              <p>
                                <i className="material-icons">access_time</i> 4
                                hours ago
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className=" waves-effect waves-block">
                            <div className="icon-circle bg-light-green">
                              <i className="material-icons">cached</i>
                            </div>
                            <div className="menu-info">
                              <h4>
                                <b>John</b> updated status
                              </h4>
                              <p>
                                <i className="material-icons">access_time</i> 3
                                hours ago
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className=" waves-effect waves-block">
                            <div className="icon-circle bg-purple">
                              <i className="material-icons">settings</i>
                            </div>
                            <div className="menu-info">
                              <h4>Settings updated</h4>
                              <p>
                                <i className="material-icons">access_time</i>{" "}
                                Yesterday
                              </p>
                            </div>
                          </a>
                        </li>
                      </ul>
                      <div className="slimScrollBar t4"></div>
                      <div className="slimScrollRail t5"></div>
                    </div>
                  </li>
                  <li className="footer">
                    <a className=" waves-effect waves-block">
                      View All Notifications
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!-- #END# Notifications --> */}

              {/* <!-- Tasks --> */}
              <li className="dropdown notification">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                >
                  <i className="material-icons">flag</i>
                  <span className="label-count">9</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">TASKS</li>
                  <li className="body">
                    <div className="slimScrollDiv t6">
                      <ul className="menu tasks t7">
                        <li>
                          <a className=" waves-effect waves-block">
                            <h4>
                              Footer display issue
                              <small>32%</small>
                            </h4>
                            <div className="progress">
                              <div
                                className="progress-bar bg-pink t8"
                                role="progressbar"
                              ></div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className=" waves-effect waves-block">
                            <h4>
                              Make new buttons
                              <small>45%</small>
                            </h4>
                            <div className="progress">
                              <div
                                className="progress-bar bg-cyan t14"
                                role="progressbar"
                              ></div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className=" waves-effect waves-block">
                            <h4>
                              Create new dashboard
                              <small>54%</small>
                            </h4>
                            <div className="progress">
                              <div
                                className="progress-bar bg-teal t9"
                                role="progressbar"
                              ></div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className=" waves-effect waves-block">
                            <h4>
                              Solve transition issue
                              <small>65%</small>
                            </h4>
                            <div className="progress">
                              <div
                                className="progress-bar bg-orange t10"
                                role="progressbar"
                              ></div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className=" waves-effect waves-block">
                            <h4>
                              Answer GitHub questions
                              <small>92%</small>
                            </h4>
                            <div className="progress">
                              <div
                                className="progress-bar bg-purple t11"
                                role="progressbar"
                              ></div>
                            </div>
                          </a>
                        </li>
                      </ul>
                      <div className="slimScrollBar t12"></div>
                      <div className="slimScrollRail t13"></div>
                    </div>
                  </li>
                  <li className="footer">
                    <a className=" waves-effect waves-block">View All Tasks</a>
                  </li>
                </ul>
              </li>
              {/* <!-- #END# Tasks --> */}

              <li className="signOutButton">
                <i className="material-icons">input</i>Sign Out
              </li>


              {/* <!-- Left Sidebar --> */}
              <div className="hidedesktop">
                {/* <!-- Menu -->  */}
                <div className="menu">
                  <ul className="list">
                    <li className="active">
                    <ul>



                      {/* Account start */}
                      <li className="menu-item-has-children dropdown ">
                        <a
                          className="dropdown-toggle "
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          Account (खाते){" "}
                          <i className="material-icons dropIcon">
                            arrow_drop_down
                          </i>
                        </a>
                        <ul className="sub-menu children dropdown-menu ">
                          <li>
                            <Link to="/addaccounthead"> Add Account Head </Link>
                          </li>
                          <li>
                            <Link to="/thirdpartyform"> Third Party Form </Link>
                          </li>
                          <li>
                            <Link to="/xeroxcurrentaccount">
                              {" "}
                              Xerox Current Account{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="/addmember"> Add Member </Link>
                          </li>
                          <li>
                            <Link to="/pathsansthaprofile">
                              {" "}
                              Patsanstha Profile{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* Account end */}





                      {/* Loan start */}
                      <li className="menu-item-has-children dropdown">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Loan Department{" "}
                          <i className="material-icons dropIcon">
                            arrow_drop_down
                          </i>
                        </a>
                        <ul className="sub-menu children dropdown-menu">
                          <li>
                            <Link to="/newloan"> New Loan </Link>
                          </li>
                          <li>
                            <Link to="/regularloanhistory">
                              {" "}
                              Regular Loan History{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="/loanamountcredit">
                              {" "}
                              Loan Amount Credit{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="/closeloan"> Close Loan </Link>
                          </li>
                          <li>
                            <Link to="/emergencyloan"> Emergency Loan </Link>
                          </li>
                          <li>
                            <Link to="/emergencyloanhistory">
                              {" "}
                              Emergency Loan History{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="/emergencyloancredit">
                              {" "}
                              Emergency Loan Credit{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="/emergencyloanclose">
                              {" "}
                              Emergency Loan Close{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="/monthlyemichange">
                              {" "}
                              Monthly EMI Change{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* Loan end */}


                       {/* Transaction Starts */}

                       <li className="menu-item-has-children dropdown">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Transaction
                          <i className="material-icons dropIcon">
                            arrow_drop_down
                          </i>
                        </a>
                        <ul className="sub-menu children dropdown-menu">
                          <li>
                            <Link to="/totalmember">Total Members</Link>
                          </li>
                          <li>
                            <Link to="/insurence">
                              insurence
                            </Link>
                          </li>
                          <li>
                                <Link to="/add_noc">Add Noc</Link>
                            </li>
                         
                            <li>
                                <Link to="/newshare"> New Share (नवीन शेअर)</Link>
                            </li>
                            <li>
                                <Link to="/monthlydeposite">Monthly Deposite</Link>
                            </li>
                        </ul>
                      </li>

                         {/* Transaction ends */}


                      {/* FD start */}
                      <li className="menu-item-has-children dropdown">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          FD (मुदत ठेव){" "}
                          <i className="material-icons dropIcon">
                            arrow_drop_down
                          </i>
                        </a>
                        <ul className="sub-menu children dropdown-menu">
                          <li>
                            <Link to="/addfd">Add FD (मुदत ठेव जोडा)</Link>
                          </li>
                          <li>
                            <Link to="/closefd">
                              Close FD (मुदत ठेव बंद करा)
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* FD end */}





                      {/* RD start */}
                      <li className="menu-item-has-children dropdown">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          RD (आवर्ती ठेव){" "}
                          <i className="material-icons dropIcon">
                            arrow_drop_down
                          </i>
                        </a>
                        <ul className="sub-menu children dropdown-menu">
                          <li>
                            <Link to="/addrd">Add RD (आवर्ती ठेव जोडा)</Link>
                          </li>
                          <li>
                            <Link to="/closerd">
                              Close RD (आवर्ती ठेव बंद करा)
                            </Link>
                          </li>
                          <li>
                            <Link to="/closerddetails">Close RD Details</Link>
                          </li>
                        </ul>
                      </li>
                      {/* RD end */}





                      {/* new share start */}
                      {/* <li>
                        <Link to="/newshare">
                          <p>
                        
                            <span className="singleLink">
                              New Share (नवीन शेअर)
                            </span>
                          </p>
                        </Link>
                      </li> */}
                      {/* new share end */}





                      {/* insurence start */}

                      {/* insurence end */}



                      {/* monthly Deposit start */}
                      {/* <li>
                        <Link to="/monthlydeposite">
                          <p>
                            <span className="singleLink">Monthly Deposite</span>
                          </p>
                        </Link>
                      </li> */}
                      {/* monthly deposit end */}




                      {/* Cancel Membership start */}
                      <li className="menu-item-has-children dropdown">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Membership Over
                          <i className="material-icons dropIcon">
                            arrow_drop_down
                          </i>
                        </a>
                        <ul className="sub-menu children dropdown-menu">
                          <li>
                            <Link to="/deathmember">
                              Dead Members
                            </Link>
                          </li>
                          <li>
                            <Link to="/terminatedmember">
                              Retired Members
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* Cancel Membership start */}





                      {/* Master Setting start */}
                      <li className="menu-item-has-children dropdown">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Master Setting
                          <i className="material-icons dropIcon">
                            arrow_drop_down
                          </i>
                        </a>
                        <ul className="sub-menu children dropdown-menu">
                          <li>
                            <Link to="/changeinterest">Change Interest</Link>
                          </li>
                          <li>
                            <Link to="/dividendinterest">
                              Dividend Interest
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* Master Setting start */}




                      {/* Report Start */}
                      <li className="menu-item-has-children dropdown">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Report (अहवाल )
                          <i className="material-icons dropIcon">
                            arrow_drop_down
                          </i>
                        </a>
                        <ul className="sub-menu children dropdown-menu">
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
                            <Link to="/loan_close_report">
                              Loan Close Report
                            </Link>
                          </li>
                          <li>
                            <Link to="/emergency_loan_report">
                              Emergency Loan Report
                            </Link>
                          </li>
                          <li>
                            <Link to="/emergency_loan_close_report">
                              Emergency Loan Close Report
                            </Link>
                          </li>
                          <li>
                            <Link to="/cancel_member_report">
                              Cancel Member Report
                            </Link>
                          </li>
                          <li>
                            <Link to="/death_member_report">
                              Dead Member Report
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* Report end */}





                      {/* Annual Report Start */}
                      <li className="menu-item-has-children dropdown">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          पत्रक
                          <i className="material-icons dropIcon">
                            arrow_drop_down
                          </i>
                        </a>
                        <ul className="sub-menu children dropdown-menu">
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
                            <Link to="/admin_annual_report">
                              {" "}
                              Annual Report{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* Annual Report Start */}




                      {/* Deduction start */}
                      <li className="menu-item-has-children dropdown">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Deduction
                          <i className="material-icons dropIcon">
                            arrow_drop_down
                          </i>
                        </a>
                        <ul className="sub-menu children dropdown-menu">
                          <li>
                            <Link to="/deductionGenerate">
                              Deduction List Generate
                            </Link>
                          </li>
                          <li>
                            <Link to="/deductionCompare">
                              Deduction List Compare
                            </Link>
                          </li>
                          <li>
                            <Link to="/Monthly_Deduction_Edit">
                              Monthly Deduction Edit
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* Deduction ends */}


                      {/* Analytics start */}


                      <li className="menu-item-has-children dropdown">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Analytics
                          <i className="material-icons dropIcon">
                            arrow_drop_down
                          </i>
                        </a>
                        <ul className="sub-menu children dropdown-menu">
                          <li>
                            <Link to="/loan_graph">
                            Loan Graph
                            </Link>
                          </li>
                          <li>
                            <Link to="/FD_Account_Graph">
                            FD Account
                            </Link>
                          </li>
                          <li>
                            <Link to="/RD_Account_Graph">
                            RD Account
                            </Link>
                          </li>
                        </ul>
                      </li>

                      {/* Analytics ends */}



                      <li>
                        <Link to="/dividend">
                          <p>
                            <span className="singleLink">Dividend</span>
                          </p>
                        </Link>
                      </li>



                      <li>
                        <Link to="/notification">
                          <p>
                            <span className="singleLink">Notification</span>
                          </p>
                        </Link>
                      </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- #Top Bar --> */}
    </div>
  );
};

export default AdminTopBar;
