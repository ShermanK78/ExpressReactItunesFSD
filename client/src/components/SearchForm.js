import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [term, setTerm] = useState('jazz');
  const [entity, setEntity] = useState('song'); 

  const handleSearch = () => {
    // Trigger the search when the user clicks the search button
    onSearch(term, entity);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleEntityChange = (e) => {
    setEntity(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Enter Artist Name'
        value={term}
        onChange={handleTermChange}
      />
      <select className='button'
        value={entity}
        onChange={handleEntityChange}
      >
        <option value='movie'>Movie</option>
        <option value='song'>Music</option> 
        <option value='ebook'>Ebook</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchForm;
