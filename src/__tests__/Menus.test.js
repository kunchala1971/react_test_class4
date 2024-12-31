import { fireEvent, render, screen } from '@testing-library/react';
import Menus from '../Components/Menus';

describe('Menu component', () => {
  test('renders label content', () => {
    render(<Menus />);
    const buttonElement = screen.getAllByRole('button');
    expect(buttonElement).toHaveLength(3);
		expect(buttonElement[0]).toHaveTextContent("Action1");
		expect(buttonElement[1]).toHaveTextContent("Action2");

  });


});