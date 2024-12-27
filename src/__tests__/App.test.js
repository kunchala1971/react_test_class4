import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('renders label content', () => {
    render(<App />);
    const contentElement = screen.getByText('Increment');
    expect(contentElement).toBeInTheDocument();
		fireEvent.click(contentElement);
  });


});
