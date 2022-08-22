import React, { Component } from 'react';
import { ButtonContainer } from './Button';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = { message: '', email: 'name@example.com', name: '' };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <p className="mt-3 mb-3 text-center">
                    If you are interested in my production, please, write me via this form <span role="img" aria-label="Finger down">👇</span>
                </p>
                <RequiredLabelStyle>
                    <form action="submit">
                        <div className="form-group required">
                            <label htmlFor="exampleFormControlInput1" className="control-label">Your name:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                value={this.state.name} 
                                placeholder="name" 
                                onChange={this.handleNameChange}
                                required />
                        </div>

                        <div className="form-group required">
                            <label htmlFor="exampleFormControlInput2" className=" control-label">Your email:</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="exampleFormControlInput2" 
                                value={this.state.email} 
                                placeholder="name@example.com" 
                                onChange={this.handleEmailChange}
                                required />
                        </div>
                        
                        <div className="form-group required">
                            <label htmlFor="exampleFormControlTextarea1" className=" control-label">Your message:</label>
                            <textarea 
                                className="form-control" 
                                id="exampleFormControlTextarea1" 
                                value={this.state.message} 
                                onChange={this.handleMessageChange}
                                rows="3"
                                required>
                            </textarea>
                        </div>
                        <ButtonStyle>
                            <ButtonContainer type='button' className="send-button" onClick={this.handleSubmit}>
                                Send
                            </ButtonContainer>
                        </ButtonStyle>
                    </form>
                </RequiredLabelStyle>

            </React.Fragment>
                //<Product />
        )
    }


    handleNameChange(event) {
        this.setState({name: event.target.value})
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value})
    }
    handleMessageChange(event) {
        this.setState({message: event.target.value})
    }    

    handleSubmit() {
        if (this.isEmptyField(this.state.name)
            || this.isEmptyField(this.state.email)
            || this.isEmptyField(this.state.message)) {
                // show message
                return;
        }

        const serviceId = "service_d5l1y48";
        const templateId = 'template_nsrxxqg';
        const publicKey = "ZAt6G-u-rgpxh0FUj";
        this.sendFeedback(serviceId, templateId, {message: this.state.message, from_name: this.state.name, reply_to: this.state.email}, publicKey);
    }

    isEmptyField(value) {
        if (value.length > 0) return false;
        return true;
    }

    sendFeedback (serviceId, templateId, templateParams, publicKey) {
        emailjs.send(
            serviceId, 
            templateId,
            templateParams,
            publicKey
        ).then(response => { alert(response.text, ". Message was sucessfully sent!")})
        .catch(err => alert('Error while sending email. ', err.toString()))
      }
}

const RequiredLabelStyle = styled.div`
    .form-group.required .control-label:after { 
        color: #d00;
        content: "*";
        position: absolute;
    }
`

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