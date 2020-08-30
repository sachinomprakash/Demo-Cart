import React from 'react';
import { Component } from 'react';
import './Search.css'
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { filter: '' }
    }
    sendSearchText = (e) => {
        this.setState({ filter: e.target.value }, () => {
            this.props.searchText(this.state.filter)
        });
    }
    render() {
        return (
            <div>
                <input className="searchbar" type="text" placeholder="Search..." onChange={e => this.sendSearchText(e)} />
            </div>
        )
    }
}

export default Search;