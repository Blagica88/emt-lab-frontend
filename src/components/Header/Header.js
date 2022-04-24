import React from "react";
import {Link, NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <div className={"container"}>
                    <a className="navbar-brand" >Books Application</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink to={"/books"} className="nav-link">Books</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink to={"/author"} className="nav-link">Authors</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink to={"/country"} className={"nav-link"}>Countries</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink to={"/categories"} className={"nav-link"}>Categories</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>

            </nav>
        </header>
    )


}
export default Header;