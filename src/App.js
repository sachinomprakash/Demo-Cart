import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ShoppingList from './Pages/Shopping-List/shoppingList';
import CartPage from './Pages/CartPage/cartPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/items" />
            </Route>
            <Route exact path="/items" component={ShoppingList} />
            <Route exact path="/cart" component={CartPage} />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
