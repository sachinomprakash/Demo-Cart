import React, { Component } from 'react';
import './header.css';
import { connect } from 'react-redux';

class Header extends Component {
    navigateToCart = () => {
        this.props.history.push({
            pathname: "/cart"
        })
    }
    navigateToHome = () =>{
        this.props.history.push({
            pathname: "/"
        })
    }
    render() {
        return (
            <div className="topnav">
                <p className="title" onClick={this.navigateToHome}>SHOPPING-CART</p>
                <button onClick={this.navigateToCart} className="primary-btn">Cart ({this.props.cartItemCount})</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cartItemCount: state.count
    };
}
export default connect(mapStateToProps, null)(Header);
