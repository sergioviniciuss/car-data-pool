import React, { Component } from 'react';
import mockCarsApi from "../api/mockCarsApi";

class CarFilter extends Component {
	constructor(props){
		super(props);
	
		this.state = {
			 initialItems : this.getCars(),
			 listedItems: []
		};

		this.getCars = this.getCars.bind(this);
		this.dynamicFilter = this.dynamicFilter.bind(this);
	}

	componentWillMount() {
		this.setState({
			listedItems: this.state.initialItems
		});
	}
	getCars() {
		let cars = mockCarsApi.getAllCars();
		return cars;
	}

	dynamicFilter() {
		console.log("car filter...");
		let searchedWord = document.querySelector('#search').value;

		let filteredRows = this.state.initialItems;

		filteredRows = filteredRows.filter((car)=>{
			return car.make.toLowerCase().search(searchedWord.toLowerCase()) !== -1;
		});
		this.setState({
			listedItems: filteredRows
		})
	}


	render() {
		return(
			<div>
				<div className="">
					<input id="search" type="search" placeholder="type to search" onChange={this.dynamicFilter}/>
				</div>
				<table id="cars-list">
					<thead>
						<tr>
							<th>Make</th>
							<th>Model</th>
							<th>Year</th>
						</tr>
					</thead>
					<tbody className="">
						{ 
							this.state.listedItems.map((car, index) =>
								<tr key={index.toString()}>
									<td>{car.make}</td>
									<td>{car.model}</td>
									<td>{car.year}</td>
								</tr>
							)
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default CarFilter;