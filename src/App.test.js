import { render, screen } from '@testing-library/react';
import App from './App';
import Card from './Components/Card/Card';

test('renders learn react link', () => {
  render(<App />);
  render (<Card />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
