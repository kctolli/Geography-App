type CountryInfo = {
    name: string;
    official: string;
    flag: string;
    capital: string;
    population: number;
    map: string;
    region: string;
    subregion: string;
};

export async function getInfoByCountryCode(countryCode: string): Promise<CountryInfo> {
    const countryData = await getDataByCountryCode(countryCode);

    //console.log(countryData);

    return {
        name: countryData?.name?.common,
        official: countryData?.name?.official,
        flag: countryData?.flag,
        capital: countryData?.capital[0],
        population: countryData?.population,
        map: countryData?.maps?.googleMaps,
        region: countryData?.region,
        subregion: countryData?.subregion,
    }
}

async function getDataByCountryCode(countryCode: string): Promise<any> {
    const countryUrl = `https://restcountries.com/v3.1/alpha/${countryCode}`;
    
    const countryData = (await fetch(countryUrl)
        .then((res) => res.json())
        .catch(console.log))[0];

    delete countryData?.translations;   
    delete countryData?.flags;
    delete countryData?.idd;
    delete countryData?.coatOfArms;
    delete countryData?.gini;

    return countryData;
}
