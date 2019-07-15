import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Contact from '../compnent/contact.js'
import Addcontact from '../compnent/addContact'
import Modifycontact from '../compnent/modify.js'
class Routes extends Component {
    render() { 
        return ( 
            <div className='navbar-container'>
                <Route exact path='/Contact' component={Contact}/>  
                <Route exact path='/add_contact' component={Addcontact}/>      
                <Route exact path='/modify/:id' render={(props)=><Modifycontact id={props.match.params.id}/>}/>          
            </div>
         );
    }
}

export default Routes; 