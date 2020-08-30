import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CartCard, Total } from '../'
import './cartList.css'
class CartList extends Component {
  render() {
    return (
      <>
        <h3 className="heading">
          CART ITEMS
      </h3>
        <div className="row">
          {
            this.props.cartItems.length > 0 ?
              this.props.cartItems.map((cartItem, i) => {
                return <>
                  <div key={i} className="col-6">
                    <CartCard cartItem={cartItem} />
                  </div>
                </>
              })
              : <div className="empty-items col-12">
                <b>No Items present in the cart</b>
              </div>
          }

        </div>
        {
          this.props.cartItems.length > 0 ? <Total /> : null
        }
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems
  };
}
export default connect(mapStateToProps, null)(CartList);
