import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditRack from './EditRack';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    rackId: 1,
  }),
}));

describe('EditRack component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<EditRack />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
