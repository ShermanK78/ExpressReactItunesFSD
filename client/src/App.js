import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import SavedResultsList from './components/SavedResultsList';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [savedResults, setSavedResults] = useState([]);
  const serverUrl = 'http://render-domain';

  useEffect(() => {
    // Load saved results from sessionStorage when the component mounts
    const savedResultsData = sessionStorage.getItem('savedResults');
    if (savedResultsData) {
      setSavedResults(JSON.parse(savedResultsData));
    }

    // Add an event listener to clear sessionStorage on beforeunload
    window.addEventListener('beforeunload', clearSessionStorage);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('beforeunload', clearSessionStorage);
    };
  }, []);

  // Function to clear sessionStorage
  const clearSessionStorage = () => {
    sessionStorage.clear();
  };

  // Function to handle the search
  const handleSearch = async (term, entity) => {
    try {
      const apiUrl = `https:/expressreactitunes.onrender.com/api/search?term=${term}&entity=${entity}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSearchResults(data);

      await fetch('https://expressreactitunes.onrender.com/api/search', {
        method: 'POST', // Use POST method to send data to the server
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send the iTunes API response data to the server
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to save a result
  const handleSave = (result) => {
    // Check if the result is already saved
    const isSaved = savedResults.some((savedResult) => savedResult.trackId === result.trackId);

    if (!isSaved) {
      // Create a custom structure for the saved result
      const savedResultItem = {
        trackId: result.trackId,
        trackName: result.trackName,
        artistName: result.artistName,
        // Add other properties you want to store
      };

      // If not saved, add it to the savedResults state and update sessionStorage
      const updatedSavedResults = [...savedResults, savedResultItem];
      setSavedResults(updatedSavedResults);
      sessionStorage.setItem('savedResults', JSON.stringify(updatedSavedResults));
    }
  };

  const handleDelete = (result) => {
    // Filter out the deleted result from savedResults
    const updatedSavedResults = savedResults.filter((savedResult) => savedResult.trackId !== result.trackId);
    setSavedResults(updatedSavedResults);

    // Map the updatedSavedResults to a structure you want to store in sessionStorage
    const updatedSavedResultsForStorage = updatedSavedResults.map((savedResult) => ({
      trackId: savedResult.trackId,
      trackName: savedResult.trackName,
      artistName: savedResult.artistName,
      // Add other properties you want to store
    }));

    sessionStorage.setItem('savedResults', JSON.stringify(updatedSavedResultsForStorage));
  };

  return (
    <div className='card-container'>
      <h1>Media Search</h1>
      <div className='result'>
        <SearchForm onSearch={handleSearch} />
      </div>
      <div className='result'>
        <SearchResults results={searchResults} onSave={handleSave} onDelete={handleDelete} savedResults={savedResults} />
      </div>
      <div className='saved-result'>
        {/* Render the SavedResultsList component */}
        <SavedResultsList savedResults={savedResults} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
