import React, { useState, useEffect } from 'react';
import { FormControl, MenuItem, Select, Card, CardContent } from '@material-ui/core'
import axios from 'axios';
import { sortData } from './util'
import { CONSTANCE } from './constance'
import { API } from './api'
import InfoBox from './InfoBox'
import MapView from "./MapView";
import Table from './Table'
import LineGraph from './LineGraph'
import './App.css';
import 'leaflet/dist/leaflet.css'

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCenter, setMapCenter] = useState({
    lat: 34.80746,
    lng: -40.4796
  });

  // page init load worldwide
  useEffect(async () => {
    const response = await axios.get(API.COUNTRIES_CODE_ALL);
    const data = await response.data;
    setCountryInfo(data);

  }, []);

  // axios async
  const getCountriesData = async (url) => {
    const response = await axios.get(url);
    const data = await response.data;
    const countries = data.map(x => ({
      name: x.country,// United Statue United Kingdom..
      value: x.countryInfo.iso2 //USA, UK ...
    }));

    setTableData(sortData(data)); //sortData util function
    setCountries(countries);

  }

  useEffect(() => {
    getCountriesData(API.COUNTRIES);
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
        <MapView
          center={mapCenter}
          zoom={mapZoom}
        />
      </div >
      <Card className="app_right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new cases</h3>
          <LineGraph />
        </CardContent>
      </Card>
    </div >
  );
}

export default App;
