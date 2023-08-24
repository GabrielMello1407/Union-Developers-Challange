import React from 'react';

const Filter = ({ onFilterChange }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    onFilterChange(value);
  };

  return (
    <div className='filter'>
      <input
        type='text'
        placeholder='Busque pelo primeiro Nome'
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Filter;
