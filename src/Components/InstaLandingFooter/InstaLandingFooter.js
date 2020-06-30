import React from 'react';
import './InstaLandingFooter.css';
import { NavLink } from 'react-router-dom';

class InstaLandingFooter extends React.Component {
    render() {
        return (
          
            <footer>
            <div className="footer-container">
                <nav className="footer-nav">
                   <ul>
                       <li>
                           <a href="#">About us</a>
                       </li>
                       <li>
                       <NavLink  exact={true} to="/Contact"><a href="#">Support</a></NavLink>
                       </li>
                       <li>
                           <a href="#">Api</a>
                       </li>
                       <li>
                           <a href="#">Jobs</a>
                       </li>
                       <li>
                           <a href="#">Privacy</a>
                       </li>
                       <li>
                           <a href="#">Terms</a>
                       </li>
                       <li>
                           <a href="#">Directory</a>
                       </li>
                       <li>
                           <a href="#">Profiles</a>
                       </li>
                       <li>
                           <a href="#">Hashtags</a>
                       </li>
                       <li>
                           <a href="#">Languages</a>
                       </li>
                        </ul>
                        <div className="copyright-notice">
                   &copy; 2020 Instagram Group 7
                </div>
                </nav>
            </div>
            </footer>
  
        )
    }
}
export default InstaLandingFooter






