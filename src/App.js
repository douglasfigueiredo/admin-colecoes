import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/layout/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateCollection from './components/collections/CreateCollection';
import CreateProduct from './components/products/CreateProduct';
import CollectionDetails from './components/collections/CollectionDetails';
import ProductDetails from './components/products/ProductDetails';
import Products from './components/products/Products';
import Collections from './components/collections/Collections';
import EditCollection from './components/collections/EditCollection';
import EditProduct from './components/products/EditProduct';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Collections} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/collections' component={Collections} />
            <Route exact path='/collection/:id' component={CollectionDetails} />
            <Route exact path='/editCollection/:id' component={EditCollection} />
            <Route exact path='/createCollection' component={CreateCollection} />
            {/* <Route exact path='/products' component={Products} /> */}
            <Route exact path='/product/:id' component={ProductDetails} />
            <Route exact path='/editProduct/:id' component={EditProduct} />
            <Route exact path='/createProduct' component={CreateProduct} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
