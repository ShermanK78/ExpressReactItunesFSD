import React from 'react';

function SavedResultsList({ savedResults, onDelete }) {
  return (
    <div className="result">
      <h2>Saved Results</h2>
      <ul>
        {savedResults.map((result) => (
          <li key={result.trackId}>
            <strong>{result.trackName}</strong> by {result.artistName}
            <button onClick={() => onDelete(result)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedResultsList;
