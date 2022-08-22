import React from 'react';
import PropTypes from "prop-types";
import CartItem from './CartItem'

export default function CartList({value}) {
    const {cart} = value;
    return (
        <div className="container-fluid">
            {cart.map(item => {
                return (
                    <CartItem key={item.id} item={item} value={value} />
                );
            })}
        </div>
    )
}

CartList.propTypes = {
    value: PropTypes.any, 
}