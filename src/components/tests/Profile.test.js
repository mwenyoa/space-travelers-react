import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Profile from '../Profile';
import store from '../../Redux/ConfigureStore';

describe('Testing the Profile component', () => {
  test('Check rendering of the Profile component', () => {
    const { getByText } = render(

      <Router>
        <Provider store={store}>
          <Profile />
        </Provider>
      </Router>,

    );
    expect(getByText('My Rockets')).toBeInTheDocument();
  });
});
