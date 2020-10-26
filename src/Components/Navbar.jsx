import React from "react";

export default class Navbar extends React.Component {
	render() {
		return (
			<div>
				<div class="navbrand">
					<img src="./LeAn.png" alt="Learning Analytics logo" />
					<span>Learning Analytics | Hogeschool Utrecht</span>
				</div>

				<div class="nav-items">
					<ul>
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li>
							<a href="#">HBO-i</a>
						</li>
						<li>
							<a href="#">Reviewer Suggestions</a>
						</li>
						<li>
							<a href="#">Open-ICT</a>
						</li>
						<a href="#">
							<li class="btn">Setup</li>
						</a>
					</ul>
				</div>
			</div>
		);
	}
}
