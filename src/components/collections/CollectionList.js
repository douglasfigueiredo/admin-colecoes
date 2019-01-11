import React from 'react';
import CollectionSummary from './CollectionSummary';
import { Link } from 'react-router-dom';

const CollectionList = ({collections}) => {
  return (
    <div className="collection-list section">
      { collections && collections.map(collection => {
        return (
          <Link to={`/collection/${collection.id}`} key={collection.id} >
            <CollectionSummary collection={collection}/>
          </Link>
        )
      })}
    </div>
  )
}

export default CollectionList;
