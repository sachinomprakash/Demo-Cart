import React, { Component } from 'react';
import './total.css';
import { connect } from 'react-redux';

class Total extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="heading"> Total </h3>
                <div className="card">
                    <ul>
                        {this.props.cartItems.map((items) => {
                            const totalPrice = items.price * items.value
                            return <>
                                <div className="total-items">
                                    <li className="flex">
                                        <p>{items.name} - {items.currency}{items.price} X {items.value} quantity</p>
                                        <p> total : {totalPrice} </p>
                                    </li>
                                </div>
                            </>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    };
}
export default connect(mapStateToProps, null)(Total);
