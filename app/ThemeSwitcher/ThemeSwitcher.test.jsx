import '@testing-library/jest-dom'
import { describe, test, expect } from '@jest/globals'
import { screen, render } from '@testing-library/react'

import ThemeSwitcher from './ThemeSwitcher'

describe('Test Dark theme', () => {
  test('Renders the Theme Button', () => {
    render(<ThemeSwitcher />)
    const themeButton = screen.getByTestId('theme-button')
    expect(themeButton).toBeInTheDocument()
  })
})
