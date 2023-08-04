import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import { queryCountries, countryBorders } from '../../../api/countryData'

export default async function Country ({ params }) {
  const { name } = params
  const response = await queryCountries(name)
  const country = response[0]
  const borders = country.borders && await countryBorders(country.borders.join(','))
  return (
    <section className='container mx-auto px-4 py-8'>
      <Link href='/' className='inline-flex items-center gap-2 bg-white dark:bg-dark-blue rounded-sm shadow-lg h-7 mb-10 py-2 px-6'><BsArrowLeft /> Back</Link>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-28 items-center'>
        <div className='col-span-1 lg:col-span-6 lg:col-start-1'>
          <div className='w-full h-[200px] sm:h-[350px] 2xl:h-[400px] relative'>
            <Image
              src={country.flags.svg}
              alt={country.flags.alt}
              loading='lazy'
              sizes='100%'
              fill
            />
          </div>
        </div>
        <div className='col-span-1 lg:col-span-6 lg:col-start-7'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
            <div className='col-span-1 lg:col-span-6'>
              <h1 className='font-bold text-lg lg:text-2xl mb-4'>{country.name.common}</h1>
              <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
                <div className='col-span-1 lg:col-span-6'>
                  <div className='flex flex-col gap-2'>
                    <p><span className='font-semibold'>Native Name: </span>{Object.values(country.name.nativeName).pop().common}</p>
                    <p><span className='font-semibold'>Population: </span>{country.population.toLocaleString('en-US')}</p>
                    <p><span className='font-semibold'>Region: </span>{country.region}</p>
                    <p><span className='font-semibold'>Sub Region: </span>{country.subregion}</p>
                    <p><span className='font-semibold'>Capital: </span>{country.capital}</p>
                  </div>
                </div>
                <div className='col-span-1 lg:col-span-6 lg:col-start-7'>
                  <div className='flex flex-col gap-2'>
                    <p><span className='font-semibold'>Top Level Domain: </span>{country.tld[0]}</p>
                    <p><span className='font-semibold'>Currencies: </span>{Object.values(country.currencies).pop().name}</p>
                    <p><span className='font-semibold'>Languages: </span>{Object.values(country.languages).join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-1 lg:col-span-12'>
              <p><span className='font-semibold'>Border Countries: </span></p>
              <div className='flex items-center flex-wrap gap-2 mt-3'>
                {
                  borders && borders.map((border, index) => {
                    return <Link key={index} href='/country/[name]' as={`/country/${border.name.common}`} className='inline-flex items-center gap-2 bg-white dark:bg-dark-blue rounded-sm shadow-lg h-7 py-2 px-6'>{border.name.common}</Link>
                  })
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
