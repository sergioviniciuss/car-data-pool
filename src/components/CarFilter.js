import React, { Component } from 'react';

class CarSearch extends Component {
	render() {
		return(
			<div>
				<table>
					<thead>
						<tr>
							<th>Make</th>
							<th>Model</th>
							<th>Year</th>
						</tr>
					</thead>
					<tbody className="teste">
						<tr>
							<td>Volkswagen</td>
							<td>Fusca</td>
							<td>1991</td>
						</tr>
						<tr>
							<td>Volkswagen</td>
							<td>New Beatle</td>
							<td>2002</td>
						</tr>
						<tr>
							<td>Volkswagen</td>
							<td>Voyage</td>
							<td>1995</td>
						</tr>
						<tr>
							<td>Audi</td>
							<td>A3</td>
							<td>2000</td>
						</tr>
						<tr>
							<td>Audi</td>
							<td>A4</td>
							<td>2004</td>
						</tr>
						<tr>
							<td>Audi</td>
							<td>TT</td>
							<td>2014</td>
						</tr>
						<tr>
							<td>Mercedes</td>
							<td>SLK</td>
							<td>2001</td>
						</tr>
						<tr>
							<td>Mercedes</td>
							<td>CLA</td>
							<td>2002</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default CarSearch;