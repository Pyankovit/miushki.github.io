import React, { Component } from "react";
import BlockTitle from "../UI/BlockTitle/BlockTitle"
import Slider from "react-slick";

import './SliderItems.scss';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
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
      <div className="sliderItems">
        <BlockTitle
          label="Сеты"
        />
        <Slider {...settings}>
          <div className="item-box">
            <h3>1</h3>
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