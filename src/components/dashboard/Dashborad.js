import React, { Component } from 'react';
import Notifications from './Notifications';
import CollectionList from '../collections/CollectionList';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { collections, auth } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <CollectionList collections={collections}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collections: state.firestore.ordered.collections,
    auth: state.firebase.auth
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'collections' }
  ])
)(Dashboard);
