import React from 'react';
import Button from "../Button/Button";
import "./Game.css"
import {useDispatch, useSelector} from "react-redux";
import {setItemInCart} from "../../redux/card/reducer";
import {deleteItemFromCart} from "../../redux/card/reducer";


const GameBuy = ({game}) => {

    const items =useSelector((state)=>state.cart.itemsInCart)
    const dispatch=useDispatch()

    const handleClick=(e)=>{
        e.stopPropagation()
        if(isItemInCart) {
            dispatch(deleteItemFromCart(game.id))
        } else {
            dispatch(setItemInCart(game))
        }
    }
    const isItemInCart = items.some(item=>item.id === game.id)
    return (
        <div className="game-buy">
            <span className="game-buy__price"> {game.price} uah </span>
            <Button onClick={handleClick} type={isItemInCart ? "secondary" : "primary"}>

                {isItemInCart ? "Убрать мз корзини" : "Добавить в корзину "}
            </Button>
        </div>

    );
};

export default GameBuy;