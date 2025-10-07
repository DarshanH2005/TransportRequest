import { render, screen } from '@testing-library/react'
import App from './App'

test('renders heading', () => {
  render(<App />)
  const h = screen.getByText(/transport request/i)
  expect(h).toBeInTheDocument()
})
