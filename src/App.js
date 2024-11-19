import React, { useState } from 'react';
import SearchForm from './components/forms/SearchForm';
import SearchResults from './components/tables/SearchResults';

const App = () => {
  const [results, setResults] = useState([]); // Holds the search results

  // Function to handle the search and update results
  const handleSearch = (formData) => {
    console.log('Search form submitted with:', formData);
     // Simulated results for testing (replace with API call)
    const mockResults = [
      {
        id: 1,
        date: formData.date || '2024-11-13',
        invoice: formData.invoice || 'INV123',
        customerName: formData.customerName || 'John Doe',
        contactNumber: formData.contactNumber || '1234567890',
        plateNumber: formData.plateNumber || 'ABC123',
        technician: formData.technician || 'Jane Smith',
      },
    ];
   
    setResults(mockResults);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Vehicle Service Management</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
};

export default App;
