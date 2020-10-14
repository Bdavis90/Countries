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
      <input placeholder='Search for a country...'/>
      {allCountries.map((m, idx) => {
        return (<div key={idx}><img src={m.flag}/><h1>{m.name}</h1><h4>Population: {m.population}</h4> <h4>Region: {m.region}</h4> <h4>Capital: {m.capital}</h4></div>)
      })}
      </div>
  )
}

export default SearchCountry