import React from 'react';

import Home from './Components/Home/Home';
import Explore from './Components/Explore/Explore';
import Notifications from './Components/Notifications/Notifications';
import Profile from './Components/Profile/Profile';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import InstaLanding from './Components/InstaLanding/InstaLanding';
import ContactForm from './Components/ContactForm/ContactForm';
import Story from './Components/StoryTEST/Story';

function App() {
  return (
    
    <Router> 
      <div>
        <Route exact path ="/" component = {InstaLanding} />
        <Route exact path ="/Home" component = {Home} />
        <Route exact path ="/Explore" component = {Explore} />
        <Route exact path ="/Notifications" component = {Notifications} />
        <Route exact path ="/Profile" component = {Profile} />
        <Route exact path ="/Contact" component = {ContactForm} />
        <Route exact path ="/Story" component = {Story} />
      </div>
    </Router>
  );
}


export default App;
