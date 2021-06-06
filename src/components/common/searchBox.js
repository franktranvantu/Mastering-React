import React from 'react';

const SearchBox = ({value, onChange}) => {
  return (
    <input
      type='text'
      name='query'
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
      className="form-control"
      placeholder='Search...'
    />
  );
}

export default SearchBox;