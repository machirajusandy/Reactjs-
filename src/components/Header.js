import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <nav id="navbar" className="navbar navbar-toggleable-md navbar-expand-lg scrolling-navbar navbar-dark info-color fix-nav">

                <div className="nav-item waves-effect home">
                    <NavLink to="/">
                        <i className="fa fa-home fa-2x"></i>
                    </NavLink>
                </div>

                <div className="my-2 my-lg-0 ml-auto">
                    <ul className="navbar-nav mr-auto">
                        <li className="li-nav nav-item waves-effect active">
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className="li-nav nav-item waves-effect active">
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </li>

                        <li className="li-nav nav-item waves-effect active">
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                        </li>

                        <li className="li-nav nav-item waves-effect active">
                            <NavLink to="/tracking">
                                Tracking
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
