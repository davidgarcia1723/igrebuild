import React from 'react';
import './Home.css';
import Post from '../Post/Post';
import Timeline from './Timeline.json';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';

// import { NavLink } from 'react-router-dom';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "upload",
        }


    }

    render() {
        const { type } = this.state;

        return (
            <div>
                <Header />
                <br />
                <div className="storyContainer">
                    <div className="storyAvatar">
                        <NavLink exact={true} to="/Story"><img src="img/Timeline/Avatar/David.PNG" alt="david"></img></NavLink>
                        <p>ssgarcia</p>
                    </div>
                    <div className="storyAvatar">
                        <img src="img/Timeline/Avatar/Kyle.png" alt="kyle"></img>
                        <p>kantonio</p>
                    </div>
                    <div className="storyAvatar">
                        <img src="img/Timeline/Avatar/Quinton.png" alt="quinton"></img>
                        <p>quintonthegoat</p>
                    </div>  
                    <div className="storyAvatar">
                        <img src="img/Timeline/Avatar/Sam.png" alt="sam"></img>
                        <p>hokagesam</p>
                    </div>  
                    <div className="storyAvatar">
                        <img src="https://ca.slack-edge.com/T5VCY49B3-UTG5L64H0-9170e531f49a-512" alt="vlad"></img>
                        <p>vleezy</p>
                    </div>  
                    <div className="storyAvatar">
                        <img src="img/Timeline/Avatar/Jaron.png" alt="jaron"></img>
                        <p>jarontoogreene</p>
                    </div> 
                    <div className="storyAvatar">
                        <img src="img/Explore/Avatar/KellyLam.png" alt="kelly"></img>
                        <p>lamfitness2020</p>
                    </div>       
                    <div className="storyAvatar">
                        <img src="img/Explore/Avatar/IssacTalley.png" alt="issac"></img>
                        <p>issac_talley20</p>
                    </div>    
                    <div className="storyAvatar">
                        <img src="img/Explore/Avatar/Road2Hire.png" alt="r2h"></img>
                        <p>roadtohire</p>
                    </div>    
                </div>
                <br />
                <div>
                    {Timeline.map( (Upload, index) => {
                        if ( type === "upload" ) {
                            return <Post post = {Upload} />
                        }
                    })}
                </div>
                <Navigation />
            </div>
        )
    }
}

export default Home;