export const allCountries = () => {
  return fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
}

export const queryCountries = (query) => {
  return fetch(`https://restcountries.com/v3.1/name/${query}`)
    .then(res => res.json())
}

export const countryBorders = (borders) => {
  return fetch(`https://restcountries.com/v3.1/alpha?codes=${borders}`)
    .then(res => res.json())
}
