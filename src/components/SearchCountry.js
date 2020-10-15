import React, {useState, useEffect} from 'react';

const SearchCountry = () => {

  const [allCountries, setAllCountries] = useState([])

  const fetchCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all').then(res => res.json()).then(data => {
      setAllCountries([...data])
    console.log(data)
    })
  }
  useEffect(() => {
    {fetchCountry()}
    
  },[])
  console.log(allCountries)
  
  return (
    <div>
    <input className='input' placeholder='Search for a country...'/>
      <div className='country-container'>
      {allCountries.map((country, idx) => {
        return (<div className='card-container' key={idx}><div className='card-container-flag'><img  src={country.flag}/></div><div className='country-stats'><h1 className='card-container-country'>{country.name}</h1><h4 className='card-container-population'>Population: {country.population}</h4> <h4 className='card-container-region'>Region: {country.region}</h4> <h4 className='card-container-capital'>Capital: {country.capital}</h4></div></div>)
      })}
      </div>
      </div>
  )
}

export default SearchCountry