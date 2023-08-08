import ListOfCountries from '../../../../components/ListOfCountries'
import SearchFilter from '../../../../components/SearchFilter'
import { queryRegions } from '../../../../api/countryData'

export default async function QueryResult ({ params }) {
  const { query } = params
  const countries = await queryRegions(query)
  return (
    <section className='container mx-auto px-4'>
      <SearchFilter regionValue={query} />
      <ListOfCountries countries={countries} />
    </section>
  )
}
