import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../Rockets';
import store from '../../Redux/ConfigureStore';

describe('Rocket Element Tests', () => {
  test('Check if Rockets Component Renders orperly', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(screen.queryByText(/Status/)).toBeNull();
    expect(screen.queryByText(/Description/)).toBeNull();
  });
  test('renders porperly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
