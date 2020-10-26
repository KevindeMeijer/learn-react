import React from "react";

export default class Homepage extends React.Component {
	render() {
		return (
			<div class="head-page">
				<div class="text">
					<h4>Welcome to</h4>
					<h1>Learning Analytics</h1>
					<p>
						We're a small group of students that really like data. Our project
						is meant to give insight in how you progress yourself during your
						study. Currently it is focused on our own study, but we're eager to
						expand in the near future.
					</p>
					<br />
					<p>
						If you encounter any bugs please report them to us by clicking the
						button below
					</p>
					<a href="#">
						<button>I have found a bug</button>
					</a>
				</div>
				<div class="head-img">
					{/* <img src="./Illustration 01.svg" alt="Main" /> */}
				</div>
			</div>
		);
	}
}
