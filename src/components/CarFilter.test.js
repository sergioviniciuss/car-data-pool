import React from 'react';
import ReactDOM from 'react-dom';
import CarSearch from './CarSearch';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CarSearch />, div);
});