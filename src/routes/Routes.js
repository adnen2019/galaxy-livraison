import React, { Component } from "react";
// import Router from "./Router.js";
import PropTypes from 'prop-types';
import jwt_decode from "jwt-decode";
import CryptoJS from "crypto-js";
import { Route, Switch } from "react-router-dom";
// import NotFoundView from "../views/NotFoundView";
import PublicRouter from "./router/PublicRouter";
// import Navbar from "../components/navbar/Navbar";
import { AppContext } from "./AppContext";
import Logout from "../components/Logout";
import SenderRouter from "./router/SenderRouter";
import SignInForm from "../components/signIn/SignInForm";
import PackageList from "../components/packagesList/PackageList";
import HomeView from "../pages/home/HomeView";
import UploadPackage from "../components/uploadPackage/UploadPackage";
import PackageForm from "../components/packageForm/PackageForm";
import DashboardView from "../pages/DashboardView";
import Dashboard from "../components/dashboard/Dashboard";
import { GetPackages } from "../services/package/GetPackages";
import { GetFinishedPackages } from "../services/package/GetFinishedPackages";
import SenderAdminRouter from "./router/SenderAdminRouter";
import { GetAllPackages } from "../services/package/GetAllPackages";
import BillForm from "../components/billForm/BillForm";
import SenderForm from "../components/senderForm/SenderForm";
import DeliveryMen from "../components/deliveryMen/DeliveryMen";
import DeliveryManForm from "../components/deliveryManForm/DeliveryManForm";
import RunSheets from "../components/runsheets/RunSheets";
import RunSheetForm from "../components/runSheetForm/RunSheetForm";
import { GetDeliveryMen } from "../services/deliveryMan/GetDeliveryMen";
import { GetSenders } from "../services/sender/GetSenders";
import { GetRunSheets } from "../services/runSheet/GetRunSheets";
import Senders from "../components/senders/Senders";
import { GetBills } from "../services/bill/GetBills";
import FinishedPackageList from "../components/packagesList/FinishedPackageList";
import { GetAllBills } from "../services/bill/GetAllBills";
import BillsList from "../components/billsList/BillsList";

export default class Routes extends Component {
  constructor() {
    super();
    this.user = React.createRef({});
    this.user.current = { role: "" };
    if (localStorage.getItem('user')) {
      this.user.current.role = "sender"
      const user = JSON.parse(localStorage.getItem('user'))
      this.user.current = { role: 'sender', ...user }
      this.getPackages(user.idExpiditeur)
      if (user?.expixiteur1 == "admin") {
        this.getAllPackages()
        // this.getBills()
        // this.getSenders()
        // this.getDeliveryMen()
        // this.getRunSheets()

      }
    }

    // this.jwtVerify();
    this.state = {
      load: true,
      load2: true,
      load3: true,

      sendersLoad: true,
      deliveryMenLoad: true,
      billsLoad: true,
      allBillsLoad: true,
      runSheetsLoad: true,

      allPackages: [],
      packages: [],
      finishedPackages: [],

      senders: [],
      deliveryMen: [],
      bills: [],
      allBills: [],
      runSheets: [],

    };

  }
  getAllPackages = async () => {
    await GetAllPackages(this.setAllPackages, this.setLoad3);
  };
  getPackages = async (id) => {
    await GetPackages(id, this.setPackages, this.setLoad);
    this.getFinishedPackages(id)
  };
  getFinishedPackages = async (id) => {
    await GetFinishedPackages(id, this.setFinishedPackages, this.setLoad2);
  };

  getSenders = async (id) => {
    await GetSenders(id, this.setSenders, this.setSendersLoad);
  };
  getDeliveryMen = async (id) => {
    await GetDeliveryMen(id, this.setDeliveryMen, this.setDeliveryMenLoad);
  };
  getBills = async (id) => {
    await GetBills(id, this.setBills, this.setBillsLoad);
  };
  getAllBills = async (id) => {
    await GetAllBills(this.setAllBills, this.setAllBillsLoad);
  };
  getRunSheets = async (id) => {
    await GetRunSheets(id, this.setRunSheets, this.setRunSheetsLoad);
  };

  setLoad = (load) => { this.setState({ load }) }
  setLoad2 = (load2) => { this.setState({ load2 }) }
  setLoad3 = (load3) => { this.setState({ load3 }) }

  setSendersLoad = (sendersLoad) => { this.setState({ sendersLoad }) }
  setDeliveryMenLoad = (deliveryMenLoad) => { this.setState({ deliveryMenLoad }) }
  setBills = (bills) => { this.setState({ bills }) }
  setRunSheets = (runSheets) => { this.setState({ runSheets }) }


  setAllPackages = (allPackages) => { this.setState({ allPackages }) }
  setPackages = (packages) => { this.setState({ packages }) }
  setFinishedPackages = (finishedPackages) => { this.setState({ finishedPackages }) }

  setSenders = (senders) => { this.setState({ senders }) }
  setDeliveryMen = (deliveryMen) => { this.setState({ deliveryMen }) }
  setBills = (bills) => { this.setState({ bills }) }
  setAllBills = (allBills) => { this.setState({ allBills }) }
  setRunSheets = (runSheets) => { this.setState({ runSheets }) }

  setBillsLoad = (billsLoad) => { this.setState({ billsLoad }) }
  setAllBillsLoad = (allBillsLoad) => { this.setState({ allBillsLoad }) }
  setRunSheetsLoad = (runSheetsLoad) => { this.setState({ runSheetsLoad }) }

  
  
  

  setUser = (user) => { this.user.current = user }


  componentDidMount() {

  }

  jwtVerify() {
    try {
      if (localStorage.getItem("token")) {
        const jwt = localStorage.getItem("token");
        // Decrypt
        var bytes = CryptoJS.AES.decrypt(
          jwt,
          process.env.REACT_APP_CRYPTING_KEY
        );
        var token = bytes.toString(CryptoJS.enc.Utf8);
        var decoded = jwt_decode(token);
        // console.log(decoded);
        // log.info('User Role : ', decoded.data.role, "user ID", decoded.data.id);
        const exp = decoded.exp;
        var current_time = new Date().getTime() / 1000;
        if (current_time > exp) {
          /* expired */
          // localStorage.removeItem("token");
        } else {
          if (decoded.data.role) {
            this.user.current = decoded.data;
            if (decoded.data.role == "candidate") {
              // if((decoded.data.address.length==0)){
              //   this.setState({candidateAccess:false})
              // }
            }
          }
        }
      }
    } catch (error) { }
  }

  render() {
    let values = {
      user: this.user.current,
      setUser: this.setUser,
      load: this.state.load,
      setLoad: this.setLoad,
      userId: this.user.current.role == "responsible" ? this.user.current?.idCompany._id : this.user.current.id,
      role: this.user.current.role,
    };
    return (
      <>
        {/* <Navbar user={this.user.current}> */}
        <Switch>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <PublicRouter role={this.user.current.role} exact path="/">
            <HomeView />
          </PublicRouter>
          <PublicRouter
            role={this.user.current.role}
            exact
            path="/signIn"
            component={SignInForm}
          />

          <SenderRouter role={this.user.current.role} exact path="/sender/dashboard">
            <Dashboard finishedPackages={this.state.finishedPackages} packages={this.state.packages} />
          </SenderRouter>
          <SenderRouter role={this.user.current.role} exact path="/sender/packageForm">
            <PackageForm />
          </SenderRouter>
          <SenderRouter role={this.user.current.role} exact path="/sender/upload">
            <UploadPackage />
          </SenderRouter>
          <SenderRouter role={this.user.current.role} exact path="/sender/packages">
            <PackageList loading={this.state.load} packages={this.state.packages} userId={this.user.current.idExpiditeur} />
          </SenderRouter>
          <SenderRouter role={this.user.current.role} exact path="/sender/packages/finished">
            <FinishedPackageList loading={this.state.load2} packages={this.state.finishedPackages} userId={this.user.current.idExpiditeur} />
          </SenderRouter>
          <SenderRouter role={this.user.current.role} exact path="/sender/bills">
            <BillsList getBills={this.getBills} loading={this.state.billsLoad} bills={this.state.bills} userId={this.user.current.idExpiditeur} />
          </SenderRouter>

          <SenderAdminRouter isAdmin={this.user.current.expixiteur1 == "admin"} role={this.user.current.role} exact path="/admin/packages">
            <PackageList loading={this.state.load3} packages={this.state.allPackages} userId={this.user.current.idExpiditeur} />
          </SenderAdminRouter>

          <SenderAdminRouter isAdmin={this.user.current.expixiteur1 == "admin"} role={this.user.current.role} exact path="/admin/bills">
            <BillsList  getBills={this.getAllBills} loading={this.state.allBillsLoad} bills={this.state.allBills} />
          </SenderAdminRouter>
          <SenderAdminRouter isAdmin={this.user.current.expixiteur1 == "admin"} role={this.user.current.role} exact path="/admin/billForm">
            <BillForm packagesLoad={this.state.load3} packages={this.state.allPackages} sendersLoad={this.state.sendersLoad}
              senders={this.state.senders} getSenders={this.getSenders} />
            {/* <PackageList loading={this.state.load3} packages={this.state.allPackages} userId={this.user.current.idExpiditeur} /> */}
          </SenderAdminRouter>

          <SenderAdminRouter isAdmin={this.user.current.expixiteur1 == "admin"} role={this.user.current.role} exact path="/admin/senders">
            <Senders sendersLoad={this.state.sendersLoad}
              senders={this.state.senders} getSenders={this.getSenders} />

            {/* <PackageList loading={this.state.load3} packages={this.state.allPackages} userId={this.user.current.idExpiditeur} /> */}
          </SenderAdminRouter>
          <SenderAdminRouter isAdmin={this.user.current.expixiteur1 == "admin"} role={this.user.current.role} exact path="/admin/senderForm">
            <SenderForm />
            {/* <PackageList loading={this.state.load3} packages={this.state.allPackages} userId={this.user.current.idExpiditeur} /> */}
          </SenderAdminRouter>

          <SenderAdminRouter isAdmin={this.user.current.expixiteur1 == "admin"} role={this.user.current.role} exact path="/admin/deliveryMen">
            <DeliveryMen deliveryMenLoad={this.state.deliveryMenLoad}
              deliveryMen={this.state.deliveryMen} getDeliveryMen={this.getDeliveryMen} />
            {/* <PackageList loading={this.state.load3} packages={this.state.allPackages} userId={this.user.current.idExpiditeur} /> */}
          </SenderAdminRouter>
          <SenderAdminRouter isAdmin={this.user.current.expixiteur1 == "admin"} role={this.user.current.role} exact path="/admin/deliveryManForm">
            <DeliveryManForm />
            {/* <PackageList loading={this.state.load3} packages={this.state.allPackages} userId={this.user.current.idExpiditeur} /> */}
          </SenderAdminRouter>

          <SenderAdminRouter isAdmin={this.user.current.expixiteur1 == "admin"} role={this.user.current.role} exact path="/admin/runSheets">
            <RunSheets
              runSheetsLoad={this.state.runSheetsLoad}
              runSheets={this.state.runSheets} getRunSheets={this.getRunSheets}
            />
            {/* <PackageList loading={this.state.load3} packages={this.state.allPackages} userId={this.user.current.idExpiditeur} /> */}
          </SenderAdminRouter>
          <SenderAdminRouter isAdmin={this.user.current.expixiteur1 == "admin"} role={this.user.current.role} exact path="/admin/runSheetForm">
            <RunSheetForm />
            {/* <PackageList loading={this.state.load3} packages={this.state.allPackages} userId={this.user.current.idExpiditeur} /> */}
          </SenderAdminRouter>



          {/* <Route  component={NotFoundView} /> */}
        </Switch>
        {/* </Navbar> */}
      </>

    );
  }
}
