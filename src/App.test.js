import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BPSC test portal', () => {
  render(<App />);
  const headingElement = screen.getByText(/Online MCQ Test Portal for BPSC & STET/i);
  expect(headingElement).toBeInTheDocument();
});
