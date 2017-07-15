import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CarFilter from './components/CarFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders CarFilter component inside App without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<CarFilter />, div);
});

it('renders all cars when no filter is being applied', () => {

});