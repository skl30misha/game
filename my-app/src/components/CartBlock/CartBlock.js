import React, {useState} from 'react';
import {BiCart} from 'react-icons/bi'
import './CarBlock.css'
import {useSelector} from "react-redux";
import CartMenu from "../CartMenu/CartMenu";
import {calcTotalPrice} from "../utils";






const CartBlock = () => {
    const [isCartMenuVisible,setIsCartMenuVisible] = useState(false)
    const items = useSelector((state)=>state.cart.itemsInCart)
        const totalPrice = calcTotalPrice(items)
    return (
        <div className="cart-block" >
<BiCart size={25} className="cart-block__icon" onClick={()=>setIsCartMenuVisible(!isCartMenuVisible)} />
            {
                totalPrice >0  ?
                <span className="cart-block__total-price" > {totalPrice} uah </span>
                : null
            }

            { isCartMenuVisible &&
                <CartMenu items={items} onclick={() => null}/>
            }

        </div>
    );
};

export default CartBlock;