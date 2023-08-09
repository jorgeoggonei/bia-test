import { ImSpinner2 } from 'react-icons/im'

export default function Loading () {
  return (
    <div className='p-10 flex justify-center' role='status'>
      <ImSpinner2 className='w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600' />
      <span class='sr-only'>Loading...</span>
    </div>
  )
}
