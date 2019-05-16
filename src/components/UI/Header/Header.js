import React from 'react';
import logo from './logo.png';

import './Header.scss'

const Header = ()=>{
   
    return (
            <div className="header-inner headerwrapper">
                <div className="header-inner-left">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="header-inner-center">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="header-inner-text"> г. Курск, ул. Ленина, д. 3
                    </div>
                    </div>
                <div className="header-inner-center">
                    <i className="fas fa-envelope"></i>
                    <div className="header-inner-text"> 78003332222@yandex.ru
                    </div>
                </div>
                <div className="header-inner-right">
                    <div className="header-inner-right-first">+7 (800) 333 2 222 </div>
                    <div className="header-inner-right-second">Работаем с 11.00 до 23.00</div>
                </div>
                <div className="header-inner-right-btn">
                    <button className="backcall">ОБРАТНЫЙ ЗВОНОК</button>
                </div>
            </div>
    )}




export default Header;