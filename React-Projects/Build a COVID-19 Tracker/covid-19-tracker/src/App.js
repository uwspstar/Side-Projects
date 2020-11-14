import React, { useState, useEffect } from 'react';
import { FormControl, MenuItem, Select, Card, CardContent } from '@material-ui/core'
import axios from 'axios';
import InfoBox from './InfoBox'
import Map from './Map'
import './App.css';

function App() {
  const CONSTANCE = { WORLDWIDE: "worldwide" }
  const API = {
    BASE: 'https://disease.sh/v3/covid-19/',
    COUNTRIES: 'https://disease.sh/v3/covid-19/countries',
    COUNTRIES_CODE_ALL: 'https://disease.sh/v3/covid-19/all',
  };
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  // page init load worldwide
  useEffect(async () => {
    const response = await axios.get(API.COUNTRIES_CODE_ALL);
    const data = await response.data;
    setCountryInfo(data);

  }, []);
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
  /*
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
 */
  // axios async
  const getCountriesData = async () => {
    const response = await axios.get(API.COUNTRIES);
    const data = await response.data;
    const countries = data.map(x => ({
      name: x.country,// United Statue United Kingdom..
      value: x.countryInfo.iso2 //USA, UK ...
    }));
    setCountries(countries);
  }
  /*
   useEffect(async () => {
     const countriesData =  await getCountriesData();
     console.log('CountriesData', countriesData);
  });
  */
  useEffect(() => {
    getCountriesData();
  });

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode);

    const url = countryCode === CONSTANCE.WORLDWIDE
      ? API.COUNTRIES_CODE_ALL
      : API.COUNTRIES + '/' + countryCode;
    const response = await axios.get(url);
    const data = await response.data;

    setCountryInfo(data);
    console.log('url = ', url);
    console.log('countryCode : ', countryCode);
    console.log('countryInfo = ', data);

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
          <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
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
