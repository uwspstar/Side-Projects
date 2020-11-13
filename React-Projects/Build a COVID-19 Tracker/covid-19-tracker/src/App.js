import React, { useState } from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core'
import './App.css';

function App() {
  const [countries, setCountries] = useState([
    'USA', 'UK', 'CHINA', 'INDIA', 'JAPAN'
  ]);
  return (
    <div className="app">
      <div className="app_header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app_dropdown">
          <Select
            variant="outlined"
            value="abc"
          >
            {countries.map(country =>
              <MenuItem value={country}>{country}</MenuItem>
            )}

          </Select>
        </FormControl >
      </div>
      {/* HEADER */}
      {/* Title */}
      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}
      {/* Table */}
      {/* Graph */}
      {/* Map */}
    </div >
  );
}

export default App;
