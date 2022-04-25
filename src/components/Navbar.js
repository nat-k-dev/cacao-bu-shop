import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk  */}
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-1">
                        <Link to="/" className="nav-link font-weight-bold">Catalog</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-shopping-basket" />
                        </span>
                        cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--logoBlue);
    .nav-link {
        color: var(--mainDark) !important;
        font-size: 1.4rem;
        text-transform: uppercase;
        font-weight: semi-bold;
    }
    .nav-link:hover {
        color: var(--hoverDark) !important;
    }
`