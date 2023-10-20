import React from 'react';

function SearchResults({ results, onSave, onDelete, savedResults }) {
  return (
    <div className='results-container'>
      {results.map((result, index) => (
        <div key={`${result.trackId}_${index}`} className='result-item'>
          <h6>{result.artistName}</h6>
          <p>{result.trackName}</p>
          <img
            src={result.artworkUrl100} 
            alt={`Artwork for ${result.trackName}`}
            style={{ maxWidth: '100px', maxHeight: '100px' }} 
          />        
          <button
            onClick={() => {
              const isSaved = savedResults.some((savedResult) => savedResult.trackId === result.trackId);

              if (isSaved) {
                onDelete(result);
              } else {
                onSave(result);
              }
            }}
          >
            {savedResults.some((savedResult) => savedResult.trackId === result.trackId) ? 'Saved' : 'Save'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
