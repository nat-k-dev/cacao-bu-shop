import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { MessierObjects } from '../data';

export default class ProductList extends Component {
    state = {
        messiers: MessierObjects
    }
    render() {
        console.log(this.state.messiers);

        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="messier" title="objects" className="row" />

                        <div className="row"></div>
                    </div>
                </div>
            </React.Fragment>
                //<Product />
        )
    }
}
