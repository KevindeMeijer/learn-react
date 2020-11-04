import React from "react";
import "../index.css";

function Headpage() {
	return (
		<div className="head-page">
			<div className="text">
				<h4>Welcome to</h4>
				<h1>Learning Analytics</h1>
				<p>
					We're a small group of students that really like data. Our project is
					meant to give insight in how you progress yourself during your study.
					Currently it is focused on our own study, but we're eager to expand in
					the near future.
				</p>
				<br />
				<p>
					If you encounter any bugs please report them to us by clicking the
					button below
				</p>
				<a href="#">
					<button>I have found a bug!</button>
				</a>
			</div>

			<div className="head-img">
				<img src="/LeanBackdrop.png" alt="Main image" />
			</div>
		</div>
	);
}

export default Headpage;
