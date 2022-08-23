import React, { Component } from 'react';
import Title from './Title';
import Carousel from './Carousel';
import AboutText from './AboutText';
import Contacts from './Contacts';

export default class ProducerInfo extends Component {
    render() {
        return (
                <div className="py-5">
                    <Title name="About the" title="producer" className="row" />
                    <Carousel />
                    <AboutText />
                    <Contacts />
                </div>
        )
    }
}
