import React, {useState} from 'react';
import Button from "../Button/Button";
import {calcTotalPrice} from "../utils";
import "./CartMenu.css"
import CartItem from "../CartItem/CartItem";


const CartMenu = ({items,onclick}) => {

    return (
                <div className="cart-menu">
                   <div className="cart-menu__games-list">
                       {
                           items.length > 0 ?  items.map((game)=><CartItem key={game.title}
                           price={game.price} title={game.title}  id={game.id}
                           />) : "Ваша корзина пустая"

                       }
                   </div>
                    {
                        items.length > 0 ?
                            <div className="cart-menu__arrange">
                                <div className="cart-menu__total-price">
                                    <span> Ітого </span>
                                    <span> {calcTotalPrice(items)} uah </span>
                                </div>
                                <Button type="primary" size="m" onClick={onclick}> Офрормить заказ </Button>
                            </div>
                            : null
                    }
                </div>
    );
};

export default CartMenu;