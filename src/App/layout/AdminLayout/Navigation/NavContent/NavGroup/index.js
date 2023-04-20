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
        url: '/sender/admin',
        icon: 'feather icon-list',
    },
    
    {
        id: 'admin',
        title: 'Liste des factures',
        type: 'item',
        url: '/sender/bills',
        icon: 'feather icon-list',
    },{
        id: 'admin',
        title: 'Ajouter facture',
        type: 'item',
        url: '/sender/billForm',
        icon: 'feather icon-plus-square',
    },

    {
        id: 'admin',
        title: 'Liste des expiditieurs',
        type: 'item',
        url: '/sender/senders',
        icon: 'feather icon-list',
    },{
        id: 'admin',
        title: 'Ajouter expiditeur',
        type: 'item',
        url: '/sender/senderForm',
        icon: 'feather icon-plus-square',
    },

    {
        id: 'admin',
        title: 'Liste des livreurs',
        type: 'item',
        url: '/sender/deliveryMen',
        icon: 'feather icon-list',
    },{
        id: 'admin',
        title: 'Ajouter livreur',
        type: 'item',
        url: '/sender/deliveryManForm',
        icon: 'feather icon-plus-square',
    },

    {
        id: 'admin',
        title: 'Liste des runsheet',
        type: 'item',
        url: '/sender/runSheets',
        icon: 'feather icon-list',
    },{
        id: 'admin',
        title: 'Ajouter runsheet',
        type: 'item',
        url: '/sender/runSheetForm',
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