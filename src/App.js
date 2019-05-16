import React, { Component } from 'react';




import Header from './components/UI/Header/Header'
import MainMenu from './components/UI/MainMenu/MainMenu';
import SimpleSlider from './components/SimpleSlider/SimpleSlider';
import SliderItems from './components/SliderItems/SliderItems'
import ContentReasons from './components/ContentReasons/ContentReasons'
import ContactForm from './components/UI/ContactForm/ContactForm'
import Reviews from './components/UI/Reviews/Reviews'

import About from './components/UI/About/About'
import Footer from './components/UI/Footer/Footer'

import './index.scss'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainMenu/>
        <SimpleSlider />
        <SliderItems/>
        <ContentReasons/>
        <Reviews/>
        <ContactForm/>
        <About/>
        <Footer/>
      </div>
    );
  }
}

export default App;
