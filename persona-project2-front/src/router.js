import React from 'react';
import {Switch, Route} from 'react-router-dom';

import TopNav from './components/TopNav';
import Slider from './components/Slider';
import Footer from './components/footer/Footer';
import Categories from './components/categories/Categories';
import DisplayEvent from './components/events/single/DisplayEvent';
import EventDetails from './components/events/single/EventDetails';
import EventInput2 from './components/events/create/EventInput2';
import DisplayMultEvents from './components/events/multiple/DisplayMultEvents';
import About from './components/About';

export default (

        <Switch>
            <Route exact path='/' render={ () => (
                <div>
                    <TopNav />
                    <Slider />
                    <Categories />
                    <Footer />
                </div>
            ) } />
            <Route path='/viewevent' render={ () => (
                <div>
                    <TopNav />
                    <DisplayEvent />
                    <Footer />


                </div>
            ) } />
            <Route path='/viewevents' render={ () => (
                <div>
                    <TopNav />
                    <DisplayMultEvents />
                    <Footer />


                </div>
            ) } />
            <Route path='/newevent' render={ () => (
                <div>
                    <TopNav />
                    <EventInput2 />
                    
                </div>
            ) } />
            <Route path='/about' render={ () => (
                <div>     
                    <TopNav />
                    <About />
                    <Footer />

                </div>
            ) } />

        </Switch>
)