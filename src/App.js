import logo from './logo.svg';
import './App.css';
// import AdminDashboard from './AdmunComponent/AdminDashboard/AdminDashboard';
import AdminDashBoard from './AdmunComponent/AdminDashboard/AdminDashboard';
import { Route, Routes } from 'react-router';
import Addmember from './AdmunComponent/Account/AddMember/Addmember';
import PathsansthaProfile from './AdmunComponent/Account/PathsansthaProfile/PathsansthaProfile';
import ThirdPartyForm from './AdmunComponent/Account/ThirdPartyForm/ThirdPartyForm';
import AddAccountHead from './AdmunComponent/Account/AddAccountHead/AddAccountHead';
import XeroxCurrentAccount from './AdmunComponent/Account/XeroxCurrentAccount/XeroxCurrentAccount';
import NewLoan from './AdmunComponent/Loan/NewLoan/NewLoan';
import RegularLoanHistory from './AdmunComponent/Loan/RegularLoanHistory/RegularLoanHistory';
import LoanAmountCredit from './AdmunComponent/Loan/LoanAmountCredit/LoanAmountCredit';
import CloseLoan from './AdmunComponent/Loan/CloseLoan/CloseLoan';
import EmergencyLoan from './AdmunComponent/Loan/EmergencyLoan/EmergencyLoan';
import EmergencyLoanHistory from './AdmunComponent/Loan/EmergencyLoanHistory/EmergencyLoanHistory';
import EmergencyLoanCredit from './AdmunComponent/Loan/EmergencyLoanCredit/EmergencyLoanCredit';
import EmergencyLoanClose from './AdmunComponent/Loan/EmergencyLoanClose/EmergencyLoanClose';
import MonthlyEMIChange from './AdmunComponent/Loan/MonthlyEMIChange/MonthlyEMIChange';
import AddFD from './AdmunComponent/FD/AddFD/AddFD';
import CloseFD from './AdmunComponent/FD/CloseFD/CloseFD';
import AddRD from './AdmunComponent/RD/AddRD/AddRD';
import CloseRD from './AdmunComponent/RD/CloseRD/CloseRD';
import CloseRD_Details from './AdmunComponent/RD/CloseRD_Details/CloseRD_Details';


// import MonthlyDeposite from './AdmunComponent/MonthlyDeposite/MonthlyDeposite';
import DeathMember from './AdmunComponent/CancelMemberShip/DeathMember/DeathMember';
import TerminatedMember from './AdmunComponent/CancelMemberShip/TerminatedMember/TerminatedMember';
import ChangeInterest from './AdmunComponent/MasterSetting/ChangeInterest/ChangeInterest';
import DividendInterest from './AdmunComponent/MasterSetting/DividendInterst/DividendInterest';
import ShareReport from './AdmunComponent/Report/ShareReport/ShareReport';
import MonthlyDeposit from './AdmunComponent/Report/MonthlyDeposit/MonthlyDeposit';
import InsurenceReport from './AdmunComponent/Report/InsurenceReport/InsurenceReport';
import FDReport from './AdmunComponent/Report/FDReport/FDReport';
import RDReport from './AdmunComponent/Report/RDReport/RDReport';
import LoanReport from './AdmunComponent/Report/LoanReport/LoanReport';
import LoanCloseReport from './AdmunComponent/Report/LoanCloseReport/LoanCloseReport';
import EmergencyLoanReport from './AdmunComponent/Report/EmergencyLoanReport/EmergencyLoanReport';
import EmergencyLoanCloseReport from './AdmunComponent/Report/EmergencyLoanCloseReport/EmergencyLoanCloseReport';
import CancelMemberReport from './AdmunComponent/Report/CancelMemberReport/CancelMemberReport';
import DeathMemberReport from './AdmunComponent/Report/DeathMemberReport/DeathMemberReport';
import Terij_patrak from './AdmunComponent/AnnualReport/Terij_patrak/Terij_patrak';
import Nafatota_patrak from './AdmunComponent/AnnualReport/Nafatota_patrak/Nafatota_patrak';
import Taleband_patrak from './AdmunComponent/AnnualReport/Taleband_patrak/Taleband_patrak';
import Andaj_patrak from './AdmunComponent/AnnualReport/Andaj_patrak/Andaj_patrak';
import Day_Report from './AdmunComponent/AnnualReport/Day_Report/Day_Report';
import Admin_Annual_Report from './AdmunComponent/AnnualReport/Admin_Annual_Report/Admin_Annual_Report';
import DeductionListGenerate from './AdmunComponent/Deduction/DeductionListGenerate/DeductionListGenerate';
import DeductionListCompare from './AdmunComponent/Deduction/DeductionListCompare/DeductionListCompare';
import MonthlyDeductionEdit from './AdmunComponent/Deduction/MonthlyDeductionEdit/MonthlyDeductionEdit';
import Dividend from './AdmunComponent/Dividend/Dividend';
import Notification from './AdmunComponent/Notification/Notification';
import LoginPage from './AdmunComponent/Loginpage/LoginPage';
import TotalMembers from './AdmunComponent/Transactions/TotalMembers/TotalMembers';
import Insurence from './AdmunComponent/Transactions/Insurence/Insurence';
import NewShare from './AdmunComponent/Transactions/NewShare/NewShare';
import MonthlyDeposite from './AdmunComponent/Transactions/MonthlyDeposite/MonthlyDeposite';
import AddNoc from './AdmunComponent/Transactions/AddNoc/AddNoc';
import LoanGraph from './AdmunComponent/Analytics/LoanGrapg/LoanGraph';
import FDaccountGraph from './AdmunComponent/Analytics/FDaccountGraph/FDaccountGraph';




function App() {
  return (
    <div className="App">
     {/* <AdminDashBoard/> */}



     <Routes>
     <Route path='/' element={<AdminDashBoard/>}/>
     <Route path='/addaccounthead' element={<AddAccountHead/>}/>
     <Route path='/thirdpartyform' element={<ThirdPartyForm/>}/>
     <Route path='/xeroxcurrentaccount' element={<XeroxCurrentAccount/>}/>
     <Route path='/addmember' element={<Addmember/>}/>
     <Route path='/pathsansthaprofile' element={<PathsansthaProfile/>}/>
     <Route path='/newloan' element={<NewLoan/>}/>
     <Route path='/regularloanhistory' element={<RegularLoanHistory/>}/>
     <Route path='/loanamountcredit' element={<LoanAmountCredit/>}/>
     <Route path='/closeloan' element={<CloseLoan/>}/>
     <Route path='/emergencyloan' element={<EmergencyLoan/>}/>
     <Route path='/emergencyloanhistory' element={<EmergencyLoanHistory/>}/>
     <Route path='/emergencyloancredit' element={<EmergencyLoanCredit/>}/>
     <Route path='/emergencyloanclose' element={<EmergencyLoanClose/>}/>
     <Route path='/monthlyemichange' element={<MonthlyEMIChange/>}/>
     <Route path='/addfd' element={<AddFD/>}/>
     <Route path='/closefd' element={<CloseFD/>}/>
     <Route path='/addrd' element={<AddRD/>}/>
     <Route path='/closerd' element={<CloseRD/>}/>
     <Route path='/closerddetails' element={<CloseRD_Details/>}/>
     <Route path='/newshare' element={<NewShare/>}/>
     <Route path='/insurence' element={<Insurence/>}/>
     <Route path='/monthlydeposite' element={<MonthlyDeposite/>}/>
     <Route path='/deathmember' element={<DeathMember/>}/>
     <Route path='/terminatedmember' element={<TerminatedMember/>}/>
     <Route path='/changeinterest' element={<ChangeInterest/>}/>
     <Route path='/dividendinterest' element={<DividendInterest/>}/>
     <Route path='/sharereport' element={<ShareReport/>}/>
     <Route path='/monthlydeposit' element={<MonthlyDeposite/>}/>
     <Route path='/insurencereport' element={<InsurenceReport/>}/>
     <Route path='/fd_report' element={<FDReport/>}/>
     <Route path='/RD_Report' element={<RDReport/>}/>
     <Route path='/Loan_Report' element={<LoanReport/>}/>
     <Route path='/loan_close_report' element={<LoanCloseReport/>}/>
     <Route path='/emergency_loan_report' element={<EmergencyLoanReport/>}/>
     <Route path='/emergency_loan_close_report' element={<EmergencyLoanCloseReport/>}/>
     <Route path='/cancel_member_report' element={<CancelMemberReport/>}/>
     <Route path='/death_member_report' element={<DeathMemberReport/>}/>
     <Route path='/terij_patrak' element={<Terij_patrak/>}/>
     <Route path='/nafatota_patrak' element={<Nafatota_patrak/>}/>
     <Route path='/taleband_patrak' element={<Taleband_patrak/>}/>
     <Route path='/andaj_patrak' element={<Andaj_patrak/>}/>
     <Route path='/day_report' element={<Day_Report/>}/>
     <Route path='/admin_annual_report' element={<Admin_Annual_Report/>}/>
     <Route path='/deductionGenerate' element={<DeductionListGenerate/>}/>
     <Route path='/deductionCompare' element={<DeductionListCompare/>}/>
     <Route path='/Monthly_Deduction_Edit' element={<MonthlyDeductionEdit/>}/>
     <Route path='/dividend' element={<Dividend/>}/>
     <Route path='/notification' element={<Notification/>}/>
     <Route path='/login' element={<LoginPage/>}/>
     <Route path='/totalmember' element={<TotalMembers/>}/>
     <Route path='/add_noc' element={<AddNoc/>}/>
     <Route path='/loan_graph' element={<LoanGraph/>}/>
     <Route path='/FD_Account_Graph' element={<FDaccountGraph/>}/>
     

     </Routes>
    </div>
  );
}

export default App;
