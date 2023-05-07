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
const adminRoutes=[{
        id: 'admin',
        title: 'Liste des colis admin',
        type: 'item',
        url: '/admin/packages',
        icon: 'feather icon-list',
    },
    
    {
        id: 'admin',
        title: 'Liste des factures admin',
        type: 'item',
        url: '/admin/bills',
        icon: 'feather icon-list',
    },{
        id: 'admin',
        title: 'Ajouter facture',
        type: 'item',
        url: '/admin/billForm',
        icon: 'feather icon-plus-square',
    },

    {
        id: 'admin',
        title: 'Liste des expiditieurs',
        type: 'item',
        url: '/admin/senders',
        icon: 'feather icon-list',
    },{
        id: 'admin',
        title: 'Ajouter expiditeur',
        type: 'item',
        url: '/admin/senderForm',
        icon: 'feather icon-plus-square',
    },

    {
        id: 'admin',
        title: 'Liste des livreurs',
        type: 'item',
        url: '/admin/deliveryMen',
        icon: 'feather icon-list',
    },{
        id: 'admin',
        title: 'Ajouter livreur',
        type: 'item',
        url: '/admin/deliveryManForm',
        icon: 'feather icon-plus-square',
    },

    {
        id: 'admin',
        title: 'Liste des runsheet',
        type: 'item',
        url: '/admin/runSheets',
        icon: 'feather icon-list',
    },{
        id: 'admin',
        title: 'Ajouter runsheet',
        type: 'item',
        url: '/admin/runSheetForm',
        icon: 'feather icon-plus-square',
    },

]
    return (
        <Aux>
            <li key={props.group.id} className="nav-item pcoded-menu-caption"><label>{props.group.title}</label></li>
            {navItems}
            {props.user.user.expixiteur1=="admin" && adminRoutes.map((route)=><NavItem layout={props.layout} key={route.id} item={route} />)}
        </Aux>
    );
};

const mapStateToProps = state => {
    return { 
        user: state.user,
    }
  };
  export default connect(mapStateToProps)(withRouter(navGroup))