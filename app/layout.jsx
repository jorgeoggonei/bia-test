import '../styles/globals.css'

import Providers from './Providers'
import ThemeSwitcher from './ThemeSwitcher'
import Header from '../components/Header'
import { font } from './font'

export const metadata = {
  title: 'Bia test',
  description: 'By Jorge Santos'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' className={`${font.variable}`}>
      <body>
        <Providers>
          <Header>
            <ThemeSwitcher />
          </Header>
          {children}
        </Providers>
      </body>
    </html>
  )
}
