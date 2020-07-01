import React from 'react';
import '../Profile/Profile.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Upload from '../Profile/Uploads.json';
import Grid from '../ProfileGrid/ProfileGrid';
// import { NavLink } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "grid",
        }


    }

    render() {
        const { type } = this.state;

        return (
            <div>
                <Header />
                <br />
                <div className="profileTop">
                    <div className="pfp">
                        <img src="img/Profile/Team7.jpg" alt="team7" />
                    </div>
                    <div className="username">
                        <h1>team-seven</h1>
                        <br />
                        <p><b>9</b> posts     <b>129k</b> followers     <b>7</b> following</p>
                        <br />
                        <p><b>Team Seven</b></p>
                        <br />
                        <p>Bringing you our Redesigned Instagram, Believe it!</p>
                    </div>
                </div>
                <br />
                <br />
                <div className='profilePost'>
                    {Upload.map( (Post, index) => {
                        if ( type === "grid" ) {
                            return <Grid grid = {Post} />
                        } else {
                            return "false"
                        }
                    })}
                </div>

                <Navigation />
            </div>
        )
    };
};
        
export default Profile;