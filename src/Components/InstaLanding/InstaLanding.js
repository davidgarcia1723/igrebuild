import React from 'react';
import './InstaLanding.css'
import InstaLandingFooter from '../InstaLandingFooter/InstaLandingFooter';
import { NavLink } from 'react-router-dom';
// import mysql from 'mysql';
// import express from 'express';
// var session = require('express-session');
// var bodyParser = require('body-parser');
// var path = require('path');

class InstaLanding extends React.Component {
    
    // async handleButton(e,username,password){
    //     e.preventDefault();
    //     console.log('test')
    //     try {
    //         const response = await fetch('http://localhost:3000/', {
    //             // mode:'no-cors',
    //              method: 'post',
    //             credentials: 'include',
    //             headers: {
    //               'Accept': 'application/json',
    //               'Content-Type': 'application/json'
    //             },
    //             body: {}
    //           });
    //           return response;
    //     } catch (e) {
    //         console.log("Test", e);
    //     }
    //     console.log("okayy");
    // }

    render() {
        return (
            <div id="wrapper">
                <div className="container">
        <div className="phone-app-demo"><img src="img/phone.png" alt="" /></div>
        <div className="form-data">
            <form action="auth" method="POST">
                <div className="logo-image">
                    <img className="ig-image" src="img/Instagram.png" alt="" />
                </div>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <br />
                {/* <form action="" onSubmit={ (e) => {
                    this.handleButton(e)
                }}></form> */}
                <NavLink className="form-btn" exact={true} to="/Home">
                    <button className="form-btn" type="submit">Log in</button>
                </NavLink>
                <br />
                <span className="separator">Or</span>
                <a className="facebook-login" href="/">
                    <i className="fa fa-facebook-square"></i> Log in with Facebook
                </a>
                <a className="password-reset" href="/">Forgot password?</a>
            </form>
            <div className="sign-up">
                Don't have an account? <a href="/">Sign up</a>
            </div>
            <div className="get-the-app">
                <span>Get the app.</span>
                <div className="badges">
                    <img src="img/iosbadge.png" alt="" />
                    <img src="img/androidbadge.png" alt="" />
                </div>
            </div>
        </div>
    </div>
            
            <InstaLandingFooter />
            </div>
        
        )
    }
}
export default InstaLanding



//Change information to your own workbench
// var connection = mysql.createConnection({
// 	host     : 'localhost',
// 	user     : 'root',
// 	password : 'Manutd_1995',
// 	database : 'nodelogin'
// });

// var app = express();

// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());

// app.get('/', function(request, response) {
// 	response.sendFile(path.join(__dirname + './InstaLanding/InstaLanding.js'));
// });

// app.post('/auth', function(request, response) {
// 	var username = request.body.username;
// 	var password = request.body.password;
// 	if (username && password) {
// 		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			if (results.length > 0) {
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				response.redirect('/Home');
// 			} else {
// 				response.send('Incorrect Username and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });

// //change instaLanding 
// app.get('/home', function(request, response) {
// 	if (request.session.loggedin) {
// 		response.send('Welcome back, ' + request.session.username + '!');
// 	} else {
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });

// //PORT
// app.listen(3000);