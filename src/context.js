import React, { Component } from 'react';
import { messierObjects, detailProduct } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }
    componentDidMount() {
        this.setProducts();
    }
    /* this method helps to pass the messierObject
       into this.state.products by value (not by reference) */
    setProducts = () => {
        let tempProducts = [];
        let tempCart = [];
        messierObjects.forEach(item => {
            const singleItem = { ...item };
            const itemCount = localStorage.getItem(singleItem.title);
            if (itemCount){
                singleItem.count = Number(itemCount);
                singleItem.inCart = true;
                singleItem.total = singleItem.count * singleItem.price;
                tempCart = [...tempCart, singleItem];
            }
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return { 
                products: tempProducts,
                cart: tempCart
            };
        }, () => {
            this.addTotals();
        });
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const details = this.getItem(id);
        this.setState(() => {
            return {
                detailProduct: details
            };
        });
    }
    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        localStorage.setItem(product.title, product.count);
        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            };
        }, () => {
            this.addTotals();
        });
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                modalProduct: product,
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

    changeCount = (id, diff) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item =>
            item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + diff;
        localStorage.setItem(product.title, product.count);
        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return {
                    cart: [...tempCart]
                };
            }, () => {
                this.addTotals();
            });
        }
    }

    increment = (id) => {
        this.changeCount(id, 1);
    }

    decrement = (id) => {
        this.changeCount(id, -1);
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item =>
            item.id !== id
        );
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        localStorage.removeItem(removedProduct.title);
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        }, () => {
            this.addTotals();
        });
    }

    clearCart = () => {
        let keys = Object.keys(localStorage);
        for(let key of keys) {
            // remove all products from localStorage
            if (key.startsWith('cart')) continue;
            localStorage.removeItem(key);
        }
        this.setState(() => {
            return {
                cart: []
            };
        }, () => {
            this.setProducts();
            this.addTotals();
        });
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => 
            subTotal += item.total
        );
        const TAX_RATE = 0.1;
        const tempTax = subTotal * TAX_RATE;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        localStorage.setItem('cartSubTotal', subTotal);
        localStorage.setItem('cartTax', tax);
        localStorage.setItem('cartTotal', total);
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
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
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };