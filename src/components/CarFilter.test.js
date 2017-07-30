import React from 'react';
import ReactDOM from 'react-dom';
import CarFilter from './CarFilter';
import FilterRow from './FilterRow';
import { mount, shallow } from 'enzyme';
import mockCarsApi from '../api/mockCarsApi';

const numberOfCars = mockCarsApi.getAllCars().length;

describe('filter creation', () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<CarFilter />, div);
	});
});

describe('component filtering', () => {
	it('renders a table listing all the available cars', () => {
		const wrapper = mount(<CarFilter />);
		expect(wrapper.find('tbody tr')).toHaveLength(numberOfCars);
	});

	it('searches for a car based on a specific make', () => {
		const wrapper = mount(<CarFilter />);
		let makeToBeSearched = "mercedes";
		const searchInput = wrapper.find('#search');
		searchInput.simulate('change', { target: { value: makeToBeSearched } });
		expect(wrapper.find('tbody tr')).toHaveLength(2);
	});

	it('searches for a car based on a synonym', () => {
		const wrapper = mount(<CarFilter />);
		let synonym = "vw";
		const searchInput = wrapper.find('#search');
		searchInput.simulate('change', { target: { value: synonym } });
		expect(wrapper.find('tbody tr')).toHaveLength(3);
	});

	it('searches for a specific make and reset the search input', () => {
		const wrapper = mount(<CarFilter />);
		let synonym = "volks";
		const searchInput = wrapper.find('#search');
		searchInput.simulate('change', { target: { value: synonym } });
		expect(wrapper.find('tbody tr')).toHaveLength(3);
		searchInput.simulate('change', { target: { value: '' } });
		expect(wrapper.find('tbody tr')).toHaveLength(numberOfCars);
	});

});
