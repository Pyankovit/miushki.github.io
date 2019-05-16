import React, { Component } from 'react'
import BlockTitle from '../UI/BlockTitle/BlockTitle'

import './ContentReasons.scss'

import dish from './img/dish.png';
import fish from './img/fish.png';
import kitchen from './img/kitchen.png';
import knife from './img/knife.png';
import rice from './img/rice.png';

import like from './img/like.png';
import money from './img/money.png';
import octopus from './img/octopus.png';
import pizza from './img/pizza.png';
import feather from './img/feather-hand-drawn-outline.png';


export default class ContentReasons extends Component {
    render() {
        return(
                <div className="headerwrapper">
                <BlockTitle label="10 причин купить у нас" />
                <ul class="container flex">
                    <li class="item flex-item">
                        <img src={kitchen} alt=""/>
                        <div className="itemtext">
                        <h1>100% ручная работа</h1>
                        </div>
                    </li>
                    <li class="item flex-item">
                        <img src={dish} alt=""/>
                        <div className="itemtext">
                        <h1>100% свежие ингредиенты</h1>
                        </div>
                    </li>
                    <li class="item flex-item">
                        <img src={money} alt=""/>
                        <div className="itemtext">
                        <h1>Самые низкие цены на рынке! (Нет ресторанной наценки)</h1>
                        </div>
                    </li>
                    <li class="item flex-item">
                        <img src={like} alt=""/>
                        <div className="itemtext">
                        <h1>Самые низкие цены на рынке! (Нет ресторанной наценки)</h1>
                        </div>
                    </li>
                    <li class="item flex-item">
                        <img src={fish} alt=""/>
                        <div className="itemtext">
                        <h1>Только охлажденная рыба (никакой заморозки)</h1>
                        </div>
                    </li>
                    <li class="item flex-item">
                        <img src={rice} alt=""/>
                        <div className="itemtext">
                        <h1>Мы используем только дорогой рис из Японии</h1>
                        </div>
                    </li>
                    <li class="item flex-item">
                        <img src={octopus} alt=""/>
                        <div className="itemtext">
                        <h1>Больше начинки, меньше риса!</h1>
                        </div>
                    </li>
                    <li class="item flex-item">
                        <img src={knife} alt=""/>
                        <div className="itemtext">
                        <h1>Мы не заменяем авокадо огурцом!</h1>
                        </div>
                    </li>
                    <li class="item flex-item">
                        <img src={pizza} alt=""/>
                        <div className="itemtext">
                        <h1>Вся пицца готовится из итальянской муки и Итальянского соуса</h1>
                        </div>
                    </li>
                    <li class="item flex-item">
                        <img src={feather} alt=""/>
                        <div className="itemtext">
                        <h1>Мы не используем майонез!</h1>
                        </div>
                    </li>
                </ul>
                </div>
        )
    }
}
