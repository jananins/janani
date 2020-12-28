import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';


import Login from './login.js';
import Signup from './signup.js';
import './index.css';
export default function APP(){

    
        return (
            
                        <Router >
                            <Switch>
                            <Route exact path="/" component={  Login} />
                                <Route path="/login" component={Login} />
                                <Route path="/signup" component={Signup} />
                               
                            </Switch>
                        </Router>
                
        );
    }


