import React from 'react';

const ListItem = ({ onChange, value }) => {
    return (
      <div>
        <input
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };
  
  export default ListItem;