import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function CartTotals({value}) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value; 
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-uppercase text-right">
                        <CartButtonStyle>
                            <Link to='/'>
                                <button 
                                    className="btn btn-outline-light text-uppercase mb-3 px-5 cart-button" 
                                    type="button"
                                    onClick={() => clearCart()}
                                >
                                    send order
                                </button>
                            </Link>
                            <Link to='/'>
                                <button 
                                    className="btn btn-outline-danger text-uppercase mb-3 px-5 cart-button" 
                                    type="button"
                                    onClick={() => clearCart()}
                                >
                                    clear cart
                                </button>
                            </Link>
                        </CartButtonStyle>
                        <h5>
                            <span className="text-title">
                                subtotal : 
                            </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax : 
                            </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total : 
                            </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

CartTotals.propTypes = {
    value: PropTypes.any, 
}

const CartButtonStyle = styled.div`
    .cart-button {
        display: block;
        margin-left: auto;
        margin-right: 0;
        width: 200px;
    }
    @media only screen and (max-width: 300px) {
        .cart-button {
            width: 100%;
        }
    }
`