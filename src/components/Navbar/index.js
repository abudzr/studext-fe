import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavDekstop, NavMobile } from "./styledNav";
import logo from "../../assets/img/logo.png";
import "../../assets/css/navbar.css";

function Navbar() {
    const [state, setState] = useState({
        navbarMobileToggle: false,
        dropdownToggle: false,
        openWindowNavbar: false,
    });

    const toggleOpenNavbarMobile = () => {
        setState({ ...state, navbarMobileToggle: true });
    };
    const toggleCloseNavbarMobile = () => {
        setState({ ...state, navbarMobileToggle: false });
    };


    return (
        <>
            {/* mobile */}
            <div>
                <div
                    className={
                        state.navbarMobileToggle === true
                            ? "navbarMobile navbarMobile-show hide-lg"
                            : "navbarMobile navbarMobile-hide hide-lg"
                    }
                >
                    <div className="d-flex justify-content-end w-100">
                        <button
                            className="material-icons bg-transparent border-0 text-danger my-5"
                            onClick={toggleCloseNavbarMobile}
                        >
                            close
                        </button>
                    </div>
                    <NavMobile>
                        <NavLink
                            className="d-flex"
                            to="/home"
                            activeClassName="current"
                            exact
                        >
                            <span className="material-icons ">home</span>
                            <li>Home</li>
                        </NavLink>
                        <NavLink
                            className="d-flex"
                            to="/mycourse"
                            activeClassName="current"
                            exact
                        >
                            <span className="material-icons ">book</span>
                            <li>My Course</li>
                        </NavLink>
                        <NavLink
                            className="d-flex"
                            to="/"
                            activeClassName="current"
                            exact
                        >
                            <span className="material-icons">assessment</span>
                            <li>Dashboard</li>
                        </NavLink>
                        <NavLink
                            className="d-flex"
                            to="/chat"
                            activeClassName="current"
                            exact
                        >
                            <span className="material-icons ">insert_comment</span>
                            <li>Chat</li>
                        </NavLink>
                        <NavLink
                            className="d-flex"
                            to="/notification"
                            activeClassName="current"
                            exact
                        >
                            <span className="material-icons ">notifications</span>
                            <li>Notification</li>
                        </NavLink>
                        <NavLink
                            className="d-flex"
                            to="/profile"
                            activeClassName="current"
                            exact
                        >
                            <span className="material-icons ">account_circle</span>
                            <li>Profile</li>
                        </NavLink>
                    </NavMobile>
                </div>
            </div>

            {/* dekstop */}
            <div className="square">
                <div className="container-fluid shadow-sm d-flex justify-content-between ">
                    <div className="d-flex">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="rounded-md d-flex input-search">
                        <span className="material-icons icon-search">search</span>
                        <input
                            type="text"
                            className="border-0 mr-2 "
                            style={{ outline: "none" }}
                            placeholder="Search..."
                        />
                    </div>
                    <div className="d-flex hide-mobile hide-sm  ">
                        <div>
                            <NavDekstop>
                                <NavLink
                                    className="d-flex"
                                    to="/home"
                                    activeClassName="current"
                                    exact
                                >
                                    <span className="material-icons ">home</span>
                                    <li>Home</li>
                                </NavLink>
                                <NavLink
                                    className="d-flex"
                                    to="/mycourse"
                                    activeClassName="current"
                                    exact
                                >
                                    <span className="material-icons ">book</span>
                                    <li>My Course</li>
                                </NavLink>
                                <NavLink
                                    className="d-flex"
                                    to="/"
                                    activeClassName="current"
                                    exact
                                >
                                    <span className="material-icons">assessment</span>
                                    <li>Dashboard</li>
                                </NavLink>
                                <NavLink
                                    className="d-flex"
                                    to="/chat"
                                    activeClassName="current"
                                    exact
                                >
                                    <span className="material-icons ">insert_comment</span>
                                    <li>Chat</li>
                                </NavLink>
                                <NavLink
                                    className="d-flex"
                                    to="/notification"
                                    activeClassName="current"
                                    exact
                                >
                                    <span className="material-icons ">notifications</span>
                                    <li>Notification</li>
                                </NavLink>
                                <NavLink
                                    className="d-flex"
                                    to="/profile"
                                    activeClassName="current"
                                    exact
                                >
                                    <span className="material-icons ">account_circle</span>
                                    <li>Profile</li>
                                </NavLink>
                            </NavDekstop>
                        </div>
                    </div>
                    <div className="hide-lg hide-xl hide-md">
                        <div className="d-flex">
                            <button className="icon-mobile border-0" onClick={toggleOpenNavbarMobile}>
                                <span className="material-icons">
                                    more_vert
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* siluet, layar hitam ketika navbar mobile keluar */}
            <div
                className={
                    state.navbarMobileToggle === true ? "position-fixed hide-lg" : "hide"
                }
                style={{
                    width: "100vw",
                    height: "100vh",
                    top: 0,
                    right: 0,
                    zIndex: "999",
                    background: "rgba(0,0,0,.6)",
                }}
                onClick={toggleCloseNavbarMobile}
            ></div>
            {/*  */}
        </>
    );
}
export default Navbar;
