import React, { useState, useEffect } from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core'
import axios from 'axios';
import './App.css';

function App() {
  const API = {
    COUNTRIES: 'https://disease.sh/v3/covid-19/countries'
  };
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  /*
  // Fetch Way
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch(API.COUNTRIES)
        .then(res => res.json())
        .then(data => {
          const countries = data.map(x => ({
            name: x.country,// United Statue United Kingdom..
            value: x.countryInfo.iso2 //USA, UK ...
          }));
          setCountries(countries);
        });
    };

    //getCountriesData();
  }, []);
  */

  useEffect(() => {
    axios.get(API.COUNTRIES)
      .then(res => {
        const countries = res.data.map(x => ({
          name: x.country,// United Statue United Kingdom..
          value: x.countryInfo.iso2 //USA, UK ...
        }));
        setCountries(countries);
      })
  });

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    console.log('countryCode : ', countryCode);
    setCountry(countryCode)
  }
  return (
    <div className="app">
      <div className="app_header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app_dropdown">
          <Select
            variant="outlined"
            value={country}
            onChange={onCountryChange}
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country, index) =>
              <MenuItem value={country.value}>{country.name}</MenuItem>
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
