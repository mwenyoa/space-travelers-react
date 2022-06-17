import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../Redux/ConfigureStore';
import Missions from '../Missions/Missions';
import Mission from '../Missions/Mission';

it('Mission render correctly', () => {
  const mission = {
    id: '9D1B7E0',
    name: 'Thaicom',
    description:
      'ThaThaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    reserved: false,
  };

  const tree = renderer.create(
    <Provider store={store}>
      <Mission
        id={mission.id}
        name={mission.name}
        description={mission.description}
        reserved={mission.reserved}
      />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('Missions renders correctly', () => {
  const list = renderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
  expect(list).toMatchSnapshot();
});
