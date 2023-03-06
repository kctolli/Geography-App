import "/build/_shared/chunk-5KL4PAQL.js";

// browser-route-module:routes/geoapi.ts?browser
async function getInfoByCountryCode(countryCode) {
  const countryData = await getDataByCountryCode(countryCode);
  return {
    name: countryData?.name?.common,
    official: countryData?.name?.official,
    flag: countryData?.flag,
    capital: countryData?.capital[0],
    population: countryData?.population,
    map: countryData?.maps?.googleMaps,
    region: countryData?.region,
    subregion: countryData?.subregion
  };
}
async function getDataByCountryCode(countryCode) {
  const countryUrl = `https://restcountries.com/v3.1/alpha/${countryCode}`;
  const countryData = (await fetch(countryUrl).then((res) => res.json()).catch(console.log))[0];
  delete countryData?.translations;
  delete countryData?.flags;
  delete countryData?.idd;
  delete countryData?.coatOfArms;
  delete countryData?.gini;
  return countryData;
}
export {
  getInfoByCountryCode
};
//# sourceMappingURL=/build/routes/geoapi-PNOJ47VI.js.map
