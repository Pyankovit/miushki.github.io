import React, { Component } from "react";
import BlockTitle from "../UI/BlockTitle/BlockTitle"

import Slider from "react-slick";

import './SliderItems.scss';
import SliderButton from "./SliderButton/SliderButton";

import Set8 from '../../images/sets/Set8.jpg';
import Set10 from '../../images/sets/Set10.jpg';
import Set5 from '../../images/sets/Set5.jpg';
import Set6 from '../../images/sets/Set6.jpg';



function Arrow(props) {
  let containerClass = "arrowsmall" + props.direction;
  let iconClass = props.direction;
  return (
    <div 
      className={containerClass}>
        <i className={iconClass} />
    </div>
  )
};
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <Arrow direction="right"/>,
      prevArrow: <Arrow direction="left"/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="sliderItems headerwrapper">
        <BlockTitle
          label="Сеты"
        />
        <Slider {...settings}>
          <div className="item-box">
            <div className="imagewrapper">
              <img src={Set10} alt=""/>
              <div className="roundwrap red">
              <h1>ХИТ</h1>
              </div>
            </div>
            <h1>Сет № 10</h1>
            <h2>72 шт. | 1560 г. | 1700 Kkal</h2>
              <div className='pricewrap'>
                  <h1>2 050</h1>
                  <h2>руб</h2>
                  <i class="fal fa-plus-circle"></i>
                    <h1>1</h1>
                  <i class="fal fa-minus-circle"></i>
              </div>
              <SliderButton/>
          </div>
          <div className="item-box">
            <div className="imagewrapper">
            <img src={Set8} alt=""/>
            </div>
            <h1>Сет № 5</h1>
            <h2>24 шт. | 960 г. | 800 Kkal</h2>
              <div className='pricewrap'>
                  <h1>1 590</h1>
                  <h2>руб</h2>
                  <i class="fal fa-plus-circle"></i>
                    <h1>1</h1>
                  <i class="fal fa-minus-circle"></i>
              </div>
              <SliderButton/>
          </div>
          <div className="item-box">
            <div className="imagewrapper">
            <img src={Set5} alt=""/>
            </div>
            <h1>Минисет № 5</h1>
            <h2>14 шт. | 450 г. | 400 Kkal</h2>
              <div className='pricewrap'>
                  <h1>510</h1>
                  <h2>руб</h2>
                  <i class="fal fa-plus-circle"></i>
                    <h1>1</h1>
                  <i class="fal fa-minus-circle"></i>
              </div>
              <SliderButton/>
          </div>
          <div className="item-box">
            <div className="imagewrapper">
            <img src={Set6} alt=""/>
            <div className="roundwrap green">
            <h1>VEG</h1>
            </div>
            </div>
            <h1>Сет № 6</h1>
            <h2>16 шт. | 460 г. | 490 Kkal</h2>
              <div className='pricewrap'>
                  <h1>400</h1>
                  <h2>руб</h2>
                  <i class="fal fa-plus-circle"></i>
                    <h1>1</h1>
                  <i class="fal fa-minus-circle"></i>
              </div>
              <SliderButton/>
          </div>
          <div className="item-box">
            <h3>2</h3>
          </div>
          <div className="item-box">
            <h3>3</h3>
          </div>
          <div className="item-box">
            <h3>4</h3>
          </div>
          <div className="item-box">
            <h3>5</h3>
          </div>
          <div className="item-box">
            <h3>6</h3>
          </div>
          <div className="item-box">
            <h3>7</h3>
          </div>
          <div className="item-box">
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    );
  }
}