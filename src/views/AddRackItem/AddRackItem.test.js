import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddRackItem from './AddRackItem';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    rackId: 1,
  }),
}));

describe('AddRackItem component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<AddRackItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
