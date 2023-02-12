import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Aux from "../../../../../../hoc/_Aux";
import NavCollapse from './../NavCollapse';
import NavItem from './../NavItem';

const navGroup = (props) => {
    let navItems = '';
    if (props.group.children) {
        const groups = props.group.children;
        navItems = Object.keys(groups).map(item => {
            item = groups[item];
            switch (item.type) {
                case 'collapse':
                    return <NavCollapse key={item.id} collapse={item} type="main" />;
                case 'item':
                    return <NavItem layout={props.layout} key={item.id} item={item} />;
                default:
                    return false;
            }
        });
    }
const adminRoute={
        id: 'admin',
        title: 'Liste des colis admin',
        type: 'item',
        url: '/sender/admin',
        icon: 'feather icon-list',
    }
    return (
        <Aux>
            <li key={props.group.id} className="nav-item pcoded-menu-caption"><label>{props.group.title}</label></li>
            {navItems}
            {props.user.user.expixiteur1=="admin" && <NavItem layout={props.layout} key={adminRoute.id} item={adminRoute} />}
        </Aux>
    );
};

const mapStateToProps = state => {
    return { 
        user: state.user,
    }
  };
  export default connect(mapStateToProps)(withRouter(navGroup))