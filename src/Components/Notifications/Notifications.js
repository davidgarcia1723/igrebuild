import React from 'react';
import '../Notifications/Notifications.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
// import { NavLink } from 'react-router-dom';

class Notification extends React.Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" rel="stylesheet" />
                <Header />
                <h1 className="notifications">Notifications</h1>
                <div class="notifs-container">
        <ul class="notifs">
            <li>
                <i class="fas fa-heart"></i>
                <div>vleezy liked your photo</div>
            </li>
            <li>
                <i class="fas fa-paper-plane"></i>
                <div>lamfitness2020 sent you a message</div>
            </li>
            <li>
                <i class="fas fa-comment-alt"></i>
                <div>jarontoogreene commented on your photo</div>
            </li>
            <li>
                <i class="fas fa-plus"></i>
                <div>hokagesam has started following you</div>
            </li>
            <li>
                <i class="fas fa-heart"></i>
                <div>hokagesam liked your photo</div>
            </li>
            <li>
                <i class="fas fa-heart"></i>
                <div>jarontoogreene liked your photo</div>
            </li>
            <li>
                <i class="fas fa-comment-alt"></i>
                <div>quintonthegoat commented on your photo</div>
            </li>
            <li>
                <i class="fas fa-heart"></i>
                <div>ssgarcia liked your photo</div>
            </li>
            <li>
                <i class="fas fa-plus"></i>
                <div>ssgarcia has started following you</div>
            </li>
            <li>
                <i class="fas fa-plus"></i>
                <div>isacc_talley20 has started following you</div>
            </li>
        </ul>
        
        </div>
              <Navigation />  
            </div>
        )
    };
};
        
export default Notification;