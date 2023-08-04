export default function Header ({ children }) {
  return (
    <header className='shadow-xl bg-white dark:bg-dark-blue'>
      <div className='container mx-auto px-4 flex items-center justify-between h-14 md:h-20'>
        <span className='font-bold text.lg md:text-2xl'>Where in the world?</span>
        {children}
      </div>
    </header>
  )
}
