// Fetch Way
/*
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


/////////////////////////////////////////////////////////////////////
/*
  useEffect(async () => {
    const countriesData =  await getCountriesData(API.COUNTRIES);
    console.log('CountriesData', countriesData);
 });
 */


/////////////////////////////////////////////////////////////////////
// axios
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
/////////////////////////////////////////////////////////////////////

