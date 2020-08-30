import React, { Component } from 'react';
import { Header, CartList } from '../../Components';
class CartPage extends Component {
  render() {
    return (
      <div className="CartPage">
        <Header {...this.props} />
        <CartList />
      </div>

    );
  }
}

export default CartPage;
