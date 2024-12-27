import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../Counter';

describe('App component', () => {

  test('renders label content', async() => {
		const incrementHandler=jest.fn();
		const count=0;
    render(<Counter count={count} incrementHandler={incrementHandler} />);
    // const buttonElement = screen.getByRole('button');
    // expect(buttonElement).toBeInTheDocument();
		//expect(buttonElement).toBeInTheDocument();
		const buttonText=screen.getByText("Increment");
		expect(buttonText).toBeInTheDocument();
		await fireEvent.click(buttonText);
		expect(incrementHandler).toHaveBeenCalledTimes(1);
  });


});
