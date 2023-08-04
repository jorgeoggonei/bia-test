import ListOfCountries from '../components/ListOfCountries'
import SearchFilter from '../components/SearchFilter'
import { allCountries } from '../api/countryData'

export default async function HomePage () {
  const countries = await allCountries()
  return (
    <section className='container mx-auto px-4'>
      <SearchFilter />
      <ListOfCountries countries={countries} />
    </section>
  )
}
