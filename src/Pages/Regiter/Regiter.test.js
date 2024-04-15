import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Regiter from './Regiter';

describe('<Regiter />', () => {
  test('it should mount', () => {
    render(<Regiter />);
    
    const regiter = screen.getByTestId('Regiter');

    expect(regiter).toBeInTheDocument();
  });
});