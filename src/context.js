import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  }
  handleDetail = () => {
    console.log('hello from detail')
  }
  addToCard = () => {
    console.log('hello from add to cart')
  }

tester = () =>  {
  console.log("State products:  ", this.state.products[0].inCart);
  console.log("Date products:  ", storeProducts[0].inCart);

  const tempProducts = [...this.state.products];
  tempProducts[0].inCart = true;
  this.setState(() => {
    return {products: tempProducts}
  },() => {
    console.log("State products:  ", this.state.products[0].inCart);
    console.log("Date products:  ", storeProducts[0].inCart);
  })
}

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCard
      }}><button onClick={this.tester}>test me</button>
        {this.props.children}      
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};

