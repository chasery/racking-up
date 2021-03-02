import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditRackItem from './EditRackItem';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    rackId: 1,
    rackItemId: 1,
  }),
}));

describe('EditRackItem component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<EditRackItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
