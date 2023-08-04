import Image from 'next/image'
import Link from 'next/link'

export default function ListOfCountries ({ countries }) {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12 lg:gap-14 xl:gap-16'>
        {
          countries.map((country, index) => (
            <div key={index} className='bg-white dark:bg-dark-blue rounded-lg shadow-md'>
              <Link href='/country/[name]' as={`/country/${country.name.common}`}>
                <div className='block relative w-full h-[200px]'>
                  <Image
                    src={country.flags.svg}
                    fill
                    alt={country.flags.alt}
                    className='object-cover'
                  />
                </div>
                <div className='px-10 py-12'>
                  <h1 className='mb-4 font-bold text-lg md:text-2xl'>{country.name.common}</h1>
                  <div className='flex flex-col gap-2'>
                    <p><span className='font-semibold'>Population: </span>{country.population.toLocaleString('en-US')}</p>
                    <p><span className='font-semibold'>Region: </span>{country.region}</p>
                    <p><span className='font-semibold'>Capital: </span>{country.capital}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}
