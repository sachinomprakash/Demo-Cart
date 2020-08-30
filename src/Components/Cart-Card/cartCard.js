import React, { Component } from 'react';
import './cartCard.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../Redux/Actions';

class CartCard extends Component {
    state = { itemCount: 0 }

    componentDidMount() {
        this.setState({
            itemCount: this.props.cartItem.value
        })
    }
    removeItem = () => {
        this.props.removeCartItem(this.props.cartItem);
    }
    editCartItem = (e) => {
        this.setState({
            itemCount: e.target.value
        })
        this.props.updateCartItem(this.props.cartItem, e.target.value)
    }
    render() {
        return (
            <div className="cards">
                <div className="cart-card">
                    <img src={require(`../../Assets/${this.props.cartItem.image}`)} alt="items" className="cart-img" />
                    <p className="eq">{this.props.cartItem.name}</p>
                    <p className="eq">{this.props.cartItem.currency} {this.props.cartItem.price}</p>
                    <input type="number" className="itemCount" value={this.state.itemCount} onChange={(e) => this.editCartItem(e)} />
                    <button className="delete-btn" onClick={this.removeItem}>Remove Item</button>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (action) => {
    return {
        removeCartItem: (item) => action(actionTypes.removeCartItem(item)),
        updateCartItem: (item, val) => action(actionTypes.updateCartItem(item, val))
    };
}
export default connect(null, mapDispatchToProps)(CartCard);
