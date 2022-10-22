/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#a">
                        خليل
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
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="b">
                                    WHO AM I ?
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="c">
                                    EDUCATION
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="h"
                                    tabIndex={-1}
                                    aria-disabled="true"
                                >
                                    EXPERIENCE
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="h"
                                    tabIndex={-1}
                                    aria-disabled="true"
                                >
                                    PROJECTS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="h"
                                    tabIndex={-1}
                                    aria-disabled="true"
                                >
                                    SKILLS
                                </a>
                            </li>
                        </ul>
                        <a
                            href='mailto:khalil.hajri@esen.tn'
                            className="btn3"
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
