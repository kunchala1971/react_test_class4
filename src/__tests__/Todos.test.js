import { fireEvent, render, screen } from '@testing-library/react';
import Todos from '../Components/Todos';

describe('Todos component', () => {
  test('renders label content', () => {
    render(<Todos />);
    const todosList = screen.getAllByRole('list');
    expect(todosList).toHaveLength(1);
		
  });


});