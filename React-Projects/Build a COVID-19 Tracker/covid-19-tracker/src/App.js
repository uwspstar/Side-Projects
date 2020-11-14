import React, { useState, useEffect } from 'react';
import { FormControl, MenuItem, Select, Card, CardContent } from '@material-ui/core'
import axios from 'axios';
import InfoBox from './InfoBox'
import Map from './Map'
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
      <div className="app_left">
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
        <div className="app_stats">
          <InfoBox title="Coronavirus Cases" cases={123} total={2000} />
          <InfoBox title="Recovered" cases={1234} total={3000} />
          <InfoBox title="Deaths" cases={12345} total={4000} />
        </div>
        <Map />
      </div >
      <Card className="app_right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
      {/* Table */}
      {/* Graph */}
      {/* Map */}
    </div >
  );
}

export default App;
