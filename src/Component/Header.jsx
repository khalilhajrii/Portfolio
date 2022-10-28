/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import headerdata from '../data/HeaderData.json'
import Scrollspy from 'react-scrollspy'
function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top " id="nav">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#a">
                        {headerdata.navbar.logo}
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            {headerdata.navbar.items.map((item) => {
                                return (
                                    <Scrollspy
                                        items={["who", 'education', 'experience','projects']}
                                        currentClassName="active" >
                                        <li className="nav-item">
                                            <a className="nav-link" id='navlink' href={"#"+item.url}>
                                                {item.nav_item}
                                            </a>
                                        </li>
                                    </Scrollspy>

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
