import ListOfCountries from '../../../../components/ListOfCountries'
import SearchFilter from '../../../../components/SearchFilter'
import { queryCountries } from '../../../../api/countryData'

export default async function QueryResult ({ params }) {
  const { query } = params
  const countries = await queryCountries(query)
  return (
    <section className='container mx-auto px-4'>
      <SearchFilter searchValue={query} />
      <ListOfCountries countries={countries} />
    </section>
  )
}
