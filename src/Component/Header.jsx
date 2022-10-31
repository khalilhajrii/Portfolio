/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import headerdata from '../data/HeaderData.json'
function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top " id="nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#a">
                        {headerdata.navbar.logo}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            {headerdata.navbar.items.map((item, i) => {
                                return (
                                        <li className="nav-item" key={i}>
                                            <a className="nav-link" id='navlink' href={"#" + item.url}>
                                                {item.nav_item}
                                            </a>
                                        </li>
                                )
                            })}
                        </ul>
                        <a href={"mailto:" + headerdata.navbar.email} className=" btn3"
                        >
                            {headerdata.navbar.talk_button}
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
