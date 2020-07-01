import React from 'react';
import '../Explore/Explore.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Browse from './Browse.json';
import Grid from '../ExploreGrid/ExploreGrid'
// import { NavLink } from 'react-router-dom';

class Explore extends React.Component {
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
                <h1 className="explore">Explore</h1>
                <div className='container'>
                    {Browse.map( (Post, index) => {
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
        
export default Explore;