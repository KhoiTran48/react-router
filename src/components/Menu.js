import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


const menus=[
    {
        label: 'Home',
        to: '/',
        exact: true
    },
    {
        label: 'About',
        to: '/about',
        exact: true
    },
    {
        label: 'Redirect to About',
        to: '/redirect',
        exact: true
    },
    {
        label: 'Not Found',
        to: '/not-fount',
        exact: true
    },
    {
        label: 'Danh Sách Sản Phẩm',
        to: '/products',
        exact: true
    }
]
function MenuLink({ label, to, activeOnlyWhenExact }) {
    return (
        <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {

            var active = match ? 'my-active' :'';
            return (
                <li className={`${active} xxx yyy`}>
                    <Link className={active} to={to}> {label}</Link>
                </li>
            )
        }}
        />
    );
}

class Menu extends Component {

    showMenu= (menus) => {
        var res=null;
        res= menus.map((menu, key)=>{
            return (
                <MenuLink key={key} to={menu.to} label={menu.label} activeOnlyWhenExact={menu.exact}></MenuLink>
            )
        })
        return res;
    }
    render() {
        return (
            <nav className="navbar navbar-default">
                <a className="navbar-brand">React Router</a>
                <ul className="nav navbar-nav">
                        {this.showMenu(menus)}
                </ul>
            </nav>
        );
    }
}

export default Menu;
