import React, {Component} from 'react';
import './MainMenu.scss'

export default class MainMenu extends Component {
   
    buttons=[
        { name: 'menu', label: 'меню ', ricon:'fas fa-angle-down'},
        { name: 'sale', label: 'акции и скидки'},
        { name: 'payment', label: 'доставка и оплата'},
        { name: 'news', label: 'новости'},
        { name: 'cabinet', label: ' кабинет', licon: 'far fa-users'},
        { name: 'cart', label: ' корзина', licon:'fal fa-shopping-cart'}
    ];
    

    render(){
    const buttons = this.buttons.map(({name, label, licon, ricon})=>{
        return (
        <a href="#" key={name} id={name}>{licon=<i className={licon}></i>}{label}{ricon=<i className={ricon}></i>}</a>
        )
    })
    return (
        <React.Fragment>
        <div className="main-line">
        </div>
        <div className="main-menu">
            {buttons}
        </div>        
        </React.Fragment>
    )
}}

