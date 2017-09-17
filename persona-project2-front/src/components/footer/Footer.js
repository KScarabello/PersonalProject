import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

export default class Footer extends Component{

render(){

    
    return(
      <div className="big-container">  
        <div className="footer-container">
            <div className="logo">
                <Link to='/'><h4>Lend A Hand</h4></Link>
            </div>
            <div className="category-links">    
                <ul>How would you like to make a difference?
                    <li>Event Staffing</li>
                    <li>Environmental</li>
                    <li>Parks and Recreation</li>
                    <li>Arts and Crafts</li>
                    <li>Infrastructure</li>
                    <li>Household Tasks</li>
                    <li>Education</li>
                    <li>Animals</li>
                    <li>Disaster Relief</li>
                    <li>Poverty Alleviation</li>
                </ul>
            </div>
            <div className="post-event-link">
                <h4>Need some help?</h4>
                <Link to='/newevent'><button>Create Event</button></Link>
            </div>    
        </div>
    </div>




    )
}

}