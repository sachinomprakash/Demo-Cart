import React, { Component } from 'react';
import { ItemList, Header } from '../../Components'
class ShoppingList extends Component {
    render() {
        return (
            <div className="shoppingList">
                <Header {...this.props} />
                <ItemList />
            </div>
        );
    }
}

export default ShoppingList;
