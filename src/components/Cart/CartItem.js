import React from 'react';
import PropTypes from "prop-types";

export default function CartItem({item, value}) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="row my-5 text-uppercase text-center">
            <div className="col-10 mx-auto col-lg-2 my-2">
                <img 
                    src={img} 
                    style={{width: '5rem', height: '5rem'}} 
                    className="img-fluid" 
                    alt='product' 
                />
            </div>
            <div className="col-10 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <span className="d-lg-none">product : &nbsp;</span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <span className="d-lg-none">price : $</span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center">
                    <span 
                        className="btn btn-black mx-1 clickable" 
                        onClick={() => decrement(id)}>
                            –
                    </span>
                    <span 
                        className="btn btn-black mx-1" >
                            {count}
                    </span>
                    <span 
                        className="btn btn-black mx-1 clickable" 
                        onClick={() => increment(id)}>
                            +
                    </span>
                </div>
            </div>
            {/*  */}
            <div className="col-10 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <strong> item total : ${total}</strong>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    value: PropTypes.any, 
    item: PropTypes.any, 
}