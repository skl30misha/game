import React from 'react';
import {BiCart} from 'react-icons/bi'
import './CarBlock.css'

const CartBlock = () => {
    return (
        <div className="cart-block">
<BiCart size={25} className="cart-block__icon" />
            <span className="cart-block__total-price" > 1000 uah </span>
        </div>
    );
};

export default CartBlock;