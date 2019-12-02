import React, { Component } from 'react';
import { messierObjects, detailObject } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
    state = {
        messiers: [],
        detailObject: detailObject,
        cart: [],
        modalOpen: false,
        modalMessier: detailObject,
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

    getItem = id => {
        const messier = this.state.messiers.find(item => item.id === id);
        return messier;
    }

    handleDetail = (id) => {
        const details = this.getItem(id);
        this.setState( () => {
            return {
                detailObject: details
            };
        });
    }
    addToCart = id => {
        let tempMessiers = [...this.state.messiers];
        const index = tempMessiers.indexOf(this.getItem(id));
        const messier = tempMessiers[index];
        messier.inCart = true;
        messier.count = 1;
        const price = messier.price;
        messier.total = price;
        this.setState(() => {
            return {
                messiers: tempMessiers,
                cart: [...this.state.cart, messier]
            };
        }, () => {
             console.log(this.state);
        });
    }

    openModal = id => {
        const messier = this.getItem(id);
        this.setState(() => {
            return {
                modalMessier: messier,
                modalOpen: true
            };
        });
    }

    closeModal = () => {
        this.setState(() => {
            return {
                modalOpen: false
            };
        });
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };