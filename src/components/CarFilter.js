import React, { Component } from 'react';
import mockCarsApi from "../api/mockCarsApi";
import './CarFilter.css';

class CarFilter extends Component {
	constructor(props){
		super(props);
	
		this.state = {
			 initialItems : this.getCars(),
			 listedItems: []
		};

		this.synonyms = this.getSynonyms.bind(this);
		this.getCars = this.getCars.bind(this);
		this.dynamicFilter = this.dynamicFilter.bind(this);
	}

	getSynonyms(){
		return mockCarsApi.getSynonyms();
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

	dynamicFilter(event) {
		let searchedWord = event.target.value;
		let synonymsList = this.getSynonyms();
		let keys = Object.keys(synonymsList)

		keys.forEach((key)=>{
			let synonymsPerMakes = synonymsList[key];

			synonymsPerMakes.forEach((val)=> {
				if (searchedWord.length > 1 && val.indexOf(searchedWord) !== -1) {
					searchedWord = key;
				}
			})
		})
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