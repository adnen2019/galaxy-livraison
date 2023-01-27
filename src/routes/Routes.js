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

export default class Routes extends Component {
  constructor() {
    super();
    this.user = React.createRef({});
    this.user.current = { role: "" };
    if(localStorage.getItem('user')){
      this.user.current.role="sender"}

    // this.jwtVerify();
    this.state = {
      load:true
    };
  }
  setLoad=(load)=>{this.setState({load})}
  setUser=(user)=>{this.user.current=user}
  

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
            if(decoded.data.role=="candidate"){
              // if((decoded.data.address.length==0)){
              //   this.setState({candidateAccess:false})
              // }
            }
          }
        }
      }
    } catch (error) {}
  }

  render() {
    let values = {
      user: this.user.current ,
      setUser:this.setUser,
      load: this.state.load,
      setLoad:this.setLoad,
      userId:this.user.current.role=="responsible"?this.user.current?.idCompany._id: this.user.current.id,
      role:this.user.current.role,
    };
    return (
            <>
              {/* <Navbar user={this.user.current}> */}
        <Switch>
              <Route exact path="/logout">
                <Logout />
              </Route>
                <PublicRouter  role={this.user.current.role} exact path="/">
                  <HomeView/>
                </PublicRouter>
                <PublicRouter
                 role={this.user.current.role}
                  exact
                  path="/signIn"
                  component={SignInForm}
                />
              
                <SenderRouter role={this.user.current.role} exact path="/sender/packages">
                  <PackageList/>
                </SenderRouter>
                <SenderRouter  role={this.user.current.role} exact path="/sender/dashboard">
                  {/* <ManageJobPostsView userId={this.user.current.id} /> */}
                </SenderRouter>
                <SenderRouter  role={this.user.current.role} exact path="/sender/packageForm">
                  <PackageForm/>
                </SenderRouter>
                <SenderRouter  role={this.user.current.role} exact path="/sender/upload">
                <UploadPackage/>
                </SenderRouter>
                
                {/* <Route  component={NotFoundView} /> */}
          </Switch>
          {/* </Navbar> */}
              </>
     
    );
  }
}
