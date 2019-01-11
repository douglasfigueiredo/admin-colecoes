import React from 'react';
import moment from 'moment';

const CollectionSummary = ({collection}) => {
  return (
    <div className="card z-depth-0 collection-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{collection.title}</span>
        <p>Cadastrado por {collection.authorFirstName} {collection.authorLastName}</p>
        <p className="grey-text">{moment(collection.createdAt.toDate().toString()).format('D/MM/YYYY - H:mm')}</p>
      </div>
    </div>
  );
}

export default CollectionSummary;
