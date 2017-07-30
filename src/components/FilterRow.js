import React, { Component } from 'react';


class FilterRow extends Component {
	render() {
		return(
			<tr className='table-row'>
				<td>{this.props.make}</td>
				<td>{this.props.model}</td>
				<td>{this.props.year}</td>
			</tr>
		)
	}
}

export default FilterRow;