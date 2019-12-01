import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.messierObject;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3 align-self-end">
                <div className="card">
                        
                    <ProductConsumer>
                        { (value) => (
                            <div 
                            className="img-container p-3" 
                            onClick={() => 
                                value.handleDetail(id)
                            }
                            >
                                <Link to="/details">
                                    <img src={img} alt="messier object image" className="card-img-top mb-3" />
                                </Link>

                                <button 
                                    className="cart-btn" 
                                    disabled={inCart ? true : false} 
                                    onClick={() => {
                                        value.addToCart(id);
                                    }}
                                >
                                    {inCart ? (
                                        <p className="text-uppercase mb-0" disabled>
                                            {" "}
                                            in cart
                                        </p>
                                    ) : (
                                        <span className="add-to-cart-btn">
                                            <i className="fas fa-shopping-basket mr-2" />
                                            add
                                        </span>
                                    )}
                                </button>
                            </div>

                        )}
                        
                    </ProductConsumer>


                    {/* card footer */}

                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>

                </div>
                
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    messierObject: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};  

const ProductWrapper = styled.div`
    .card {
        border: 0.04rem solid rgba(0, 0, 0, 0.2);
        transition: all 1s linear;
        background: rgb(50, 50, 50);
        color: var(--mainWhite);
    }
    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover {
        .card {
            box-shadow: 2px 2px 7px 3px rgba(0, 0, 0, 0.5);
        }
        .card-footer {
            background: rgba(75, 75, 75);
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all 1s linear;
        border-radius: 10%;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.05);
    }
    .cart-btn {
        position: absolute;
        top: 0;
        right: 0;
        background: var(--mainDark);
        border: none;
        color: var(--logoBlue);
        font-size: 1.2rem;
        border-radius: 0 0 0 0.5rem;
        transform: translate(100%, 0);
        transition: transform 1s linear;
    }
    .img-container:hover .cart-btn {
        transform: translate(0, 0);
    }
    .cart-btn:hover .add-to-cart-btn {
        color: var(--lightBlue);
        cursor: pointer;
    }
`