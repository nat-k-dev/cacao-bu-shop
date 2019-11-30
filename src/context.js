import React, { Component } from 'react';
import { messierObjects, detailObject } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
    state = {
        messiers: [],
        detailObject: detailObject 
    }
    componentDidMount() {
        this.setMessiers();
    }
    /* this method helps to pass the messierObject
       into this.state.messiers by value (not by reference) */
    setMessiers = () => {
        let tempMessiers = [];
        messierObjects.forEach( item => {
            const singleItem = {...item};
            tempMessiers = [...tempMessiers, singleItem];
        });
        this.setState( () => {
            return {messiers: tempMessiers};
        });
    }
    handleDetail = () => {
        console.log('hello from detail');
    }
    addToCart = () => {
        console.log('hello from add to cart');
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };