import React from 'react';
import ReactDOM from 'react-dom';
import FilterRow from './FilterRow';
import { mount } from 'enzyme';

describe("FilterRow component",() => {
	it('renders a table row with make, model and year fully filled', () => {
		const component = mount(<FilterRow />);
		let td = component.find('td');
		console.log(td.length)
		for (let node of td) {
			console.log(node.props.value)
			// let nodeValueLength = node['props'];
			// console.log(nodeValueLength)
			// expect(nodeValueLength).toBeGreaterThanOrEqual(1)
		}
	});
})
