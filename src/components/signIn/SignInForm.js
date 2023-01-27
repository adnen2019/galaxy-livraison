import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import Breadcrumb from '../../App/layout/AdminLayout/Breadcrumb';
import Aux from '../../hoc/_Aux';
import { SignIn } from '../../services/signIn/SignIn';

import './../../assets/scss/style.scss';

class SignInForm extends React.Component {
    state={email:"",password:""}

    handleChange=(event)=> {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        });
      }

      handleSubmit=(e)=> {
        e.preventDefault()
        const {email,password}=this.state
        SignIn(email,password)
      }
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <form onSubmit={this.handleSubmit} >
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <h3 className="mb-4">Login</h3>
                                <div className="input-group mb-3">
                                    <input value={this.state.email} onChange={this.handleChange} name="email" type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input value={this.state.password} onChange={this.handleChange}  name="password" type="password" className="form-control" placeholder="password"/>
                                </div>
                                {/* <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div> */}
                                <button  className="btn btn-primary shadow-2 mb-4">Login</button>
                                {/* <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p> */}
                                {/* <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignInForm;