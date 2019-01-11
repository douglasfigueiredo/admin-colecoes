import authReducer from './authReducer';
import collectionReducer from './collectionReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  collection: collectionReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
