import React, { Component } from 'react';
import items from '../../Assets/MockData/dummyData.json';
import { ItemCard, Search } from '../';
import './itemList.css'
class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = { allItems: [], filter: '' }
  }
  componentDidMount(){
    const sortedItems = items.shoppingItems.sort((a, b) =>{
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
    this.setState({
      allItems: sortedItems
    })
  }
  search = (dataFromChild) => {
    let filteredItems = [];
    filteredItems = items.shoppingItems.filter(U => U.name.toLowerCase().includes(dataFromChild.toLowerCase()) || U.category.toLowerCase().includes(dataFromChild.toLowerCase()));
    this.setState({ filter: dataFromChild,  allItems: filteredItems });
  }

  render() {
    return (
      <div className="container">
        <Search searchText={this.search}></Search>
        <div className="row">
          {
            this.state.allItems.map((shoppingItem, i) => {
              return <div key={i} className="col-3">
                <ItemCard itemDetails={shoppingItem} />
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default ItemList;
