import React from "react";
import "../index.css";

function Navigation() {
	return (
		<div className="nav">
			<a href="https://hu-open-ict.nl/">
				<div className="navbrand">
					<img src="/LeAn.png" alt="Learning Analytics logo" />
					<span>Learning Analytics | Hogeschool Utrecht</span>
				</div>
			</a>
			<div className="nav-items">
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
						<li className="btn">Setup</li>
					</a>
				</ul>
			</div>
		</div>
	);
}

export default Navigation;
