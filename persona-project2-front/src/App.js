import React, { Component } from 'react';

import 'normalize.css';
import './App.css';
import router from './router';
// import TopNav from './components/TopNav';
// import Slider from './components/Slider';
// import Categories from './components/categories/Categories';
// import EventInput from './components/events/create/EventInput';
// import DisplayEvent from './components/events/DisplayEvent';


class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default App;
