import React, { Component } from 'react';
import './itemCard.css'
import { connect } from 'react-redux';
import * as actionTypes from '../../Redux/Actions';

class ItemCard extends Component {
    addItem = () => {
        this.props.storeCartItem(this.props.itemDetails);
    }
    render() {
        return (
            <>
                <div className="card">
                    <img src={require(`../../Assets/${this.props.itemDetails.image}`)} alt="items" />
                    <div className="container">
                        <h4><b>{this.props.itemDetails.name} - {this.props.itemDetails.currency} {this.props.itemDetails.price}</b></h4>
                        <p className="detailsContainer">
                            <button className="primary-btn" onClick={this.addItem}>Add to cart</button>
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (action) => {
    return {
        storeCartItem: (item) => action(actionTypes.storeCartItem(item))
    };
}
export default connect(null, mapDispatchToProps)(ItemCard);
