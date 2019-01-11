const initState = {};

const collectionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_COLLECTION':
      console.log('created collection', action.collection);
      return state;
    case 'CREATE_COLLECTION_ERROR':
      console.log('create collection error', action.err);
      return state;

      default:
      return state;
  }
};

export default collectionReducer;
