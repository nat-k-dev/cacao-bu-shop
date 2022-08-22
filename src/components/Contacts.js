import React, { Component } from 'react';
import { ButtonContainer } from './Button';
import styled from 'styled-components';

export default class Contacts extends Component {
    render() {
        return (
            <React.Fragment>
                <p className="mt-3 mb-3 text-center">
                    If you are interested in my production, please, write me via this form 👇
                </p>
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Your email:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Your message:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <ButtonStyle>
                        <ButtonContainer className="send-button" onClick={() => {}}>
                            Send
                        </ButtonContainer>
                    </ButtonStyle>
                </form>

            </React.Fragment>
                //<Product />
        )
    }
}

const ButtonStyle = styled.div`
    .send-button {
        display:block;
        width: 150px;
        margin: auto;
    }
    @media only screen and (max-width: 300px) {
        .send-button {
            width: 100%;
        }
    }
`