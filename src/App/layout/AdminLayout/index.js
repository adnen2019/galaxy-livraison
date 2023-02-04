import React, { Component, Suspense } from 'react';
import {connect} from 'react-redux';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';
import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import Loader from "../Loader";
import Aux from "../../../hoc/_Aux";
import * as actionTypes from "../../../store/actions";
import { updateUser } from '../../../store/user/user'
import './app.scss';
import Routes from '../../../routes/Routes';

class AdminLayout extends Component {
    constructor(props){
        super(props)
        this.checkUser()
    }
    fullScreenExitHandler = () => {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            this.props.onFullScreenExit();
        }
    };

    componentWillMount() {
        // this.checkUser()
        if (this.props.windowWidth > 992 && this.props.windowWidth <= 1024 && this.props.layout !== 'horizontal') {
            this.props.onComponentWillMount();
        }
    }

    mobileOutClickHandler() {
        if (this.props.windowWidth < 992 && this.props.collapseMenu) {
            this.props.onComponentWillMount();
        }
    }
    checkUser=()=>{
        if(localStorage.getItem('user')){
            //set role
            // this.props.onLoggedIn({role:"sender"})
            let user = JSON.parse(localStorage.getItem('user'))
            user.role="sender"
            this.props.onLoggedIn(user)
            // this.props.dispatch(updateUser({role:"sender"}))
            //set user
        }
    }
    render() {

        /* full screen exit call */
        document.addEventListener('fullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('webkitfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('mozfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('MSFullscreenChange', this.fullScreenExitHandler);

        const {role}=this.props.user.user
        return (
            <Aux>
                <Fullscreen enabled={this.props.isFullScreen}>
                    {role=="sender"&&<Navigation />}
                    <NavBar />
                    <div className={role=="sender"&&"pcoded-main-container"} onClick={() => this.mobileOutClickHandler}>
                        <div className={role=="sender"&&"pcoded-wrapper"}>
                            <div className={role=="sender"&&"pcoded-content"}>
                                <div className={role=="sender"&&"pcoded-inner-content"}>
                                    <Breadcrumb />
                                    <div className={role=="sender"&&"main-body"}>
                                        <div className={role=="sender"&&"page-wrapper"}>
                                            <Suspense fallback={<Loader/>}>
                                                <Routes/> 
                                            </Suspense>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fullscreen>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return { 
        defaultPath: state.app.defaultPath,
        isFullScreen: state.app.isFullScreen,
        collapseMenu: state.app.collapseMenu,
        configBlock: state.app.configBlock,
        layout: state.app.layout,
        user: state.user,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFullScreenExit: () => dispatch({type: actionTypes.FULL_SCREEN_EXIT}),
        onLoggedIn: (user) => dispatch(updateUser(user)),
            // this.props.dispatch(updateUser({role:"sender"}))

        onComponentWillMount: () => {
            dispatch({type: actionTypes.COLLAPSE_MENU})
            // dispatch(updateUser({role:"sender"}))

            // this.checkUser(dispatch)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (windowSize(AdminLayout));