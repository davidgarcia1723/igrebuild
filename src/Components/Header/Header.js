import React from "react";
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <div>
            <div>
                {/* <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link> */}
                {/* Contains animation in header */}
                <div id="header">
                    <h1>
                        <div className="headWrapper">
                            <img className="logo" src="./img/Logo-Home.png" alt="logo" />
                            <img className="insta" src="./img/InstagramHeader.png" alt="instagram" />

                            {/* MAKE INTO A COMPONENT AND IMPORT HERE */}
                            {/* SEARCH BAR */}
                            <div id="searchContainer">
                                <div className="searchWrapper">
                                    <span className="searchIcon"></span>
                                    <input type="search" id="search" placeholder="Search..." />
                                </div>
                            </div>
                        </div>
                    </h1>
                </div>
            </div>
            </div>
        );
    }
}


export default Header;

