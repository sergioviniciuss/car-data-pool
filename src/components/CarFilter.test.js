import React from 'react';
import ReactDOM from 'react-dom';
import CarFilter from './CarFilter';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CarFilter />, div);
});

it('renders a table listing all the available cars', () => {
	const wrapper = shallow(<CarFilter />);
	expect(wrapper.find('tbody tr')).toHaveLength(8);
});