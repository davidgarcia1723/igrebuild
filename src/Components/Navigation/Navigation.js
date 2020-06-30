import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <div>
            <footer>
                <ul id="main-footer">
                    <li className="icon"><NavLink  exact={true} to="/Home"><img src="./img/Home.png" alt="home" /></NavLink></li>
                    <li className="icon"><NavLink exact={true} to="/Explore"><img src="./img/Explore.png" alt="explore" /></NavLink></li>
                    <li><img src="./img/Upload.png" alt="upload"/></li>
                    <li className="icon"><NavLink exact={true} to="/Notifications"><img src="./img/Heart.png" alt="notifications" /></NavLink></li>
                    <li className="icon"><NavLink exact={true} to="/Profile"><img src="./img/Profile.png" alt="profile" /></NavLink></li>
                </ul>
            </footer>
            </div>
        )
        };
    };

export default Navigation;