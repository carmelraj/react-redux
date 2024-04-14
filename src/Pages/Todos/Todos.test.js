import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todos from './Todos';

describe('<Todos />', () => {
  test('it should mount', () => {
    render(<Todos />);
    
    const todos = screen.getByTestId('Todos');

    expect(todos).toBeInTheDocument();
  });
});