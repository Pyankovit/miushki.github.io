import React, { Component } from 'react';


import './components/MainSlider/MainSlider'
//import MainSlider from './components/MainSlider/MainSlider';


import Header from './components/UI/Header/Header'
import MainMenu from './components/UI/MainMenu/MainMenu';
import SimpleSlider from './components/SimpleSlider/SimpleSlider';
import SliderItems from './components/SliderItems/SliderItems'
import BlockTitle from './components/UI/BlockTitle/BlockTitle'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainMenu/>
        <SimpleSlider />
        <SliderItems/>
        <BlockTitle/>
      </div>
    );
  }
}

export default App;
