import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashborad';
import CollectionDetails from './components/collections/CollectionDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateCollection from './components/collections/CreateCollection';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/collection/:id' component={CollectionDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateCollection} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
