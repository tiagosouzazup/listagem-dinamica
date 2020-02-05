import React from 'react';
import Delete from '../Delete';

const ListItem = ({ value, onDelete }) => {
  return (
    <div>
      <p> {value}
        <Delete onClick={onDelete} />
      </p>
    </div>

  );
};

export default ListItem;