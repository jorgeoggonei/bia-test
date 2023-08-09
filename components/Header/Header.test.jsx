import '@testing-library/jest-dom'
import { test, expect } from '@jest/globals'
import { render } from '@testing-library/react'

import Header from './Header'

test('Renders the header', () => {
  const { getByTestId } = render(<Header />)
  const header = getByTestId('header')
  expect(header).toBeInTheDocument()
})
