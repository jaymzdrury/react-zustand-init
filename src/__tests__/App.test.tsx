import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('nameSet resets the name', () => {
  render(<App />)
  fireEvent.click(screen.getByText(/CHANGE NAME/i))
  expect(screen.getByText(/Leroy/i)).toBeInTheDocument()
})

test('toggle switches from true to false', () => {
  render(<App />)
  fireEvent.click(screen.getByText(/CHANGE NAME/i))
  expect(screen.getByText(/Leroy/i)).toBeInTheDocument()
  fireEvent.click(screen.getByText(/HIDE/i))
  expect(() => screen.getByText(/Leroy/i)).toThrow()
})

test('number renders and updates', () => {
  render(<App />)
  fireEvent.click(screen.getByText(/40/i))
  expect(screen.getByText(/50/i)).toBeInTheDocument()
})
