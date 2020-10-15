import React from "react";
import ReactDOM from "react-dom";

import Flex from "./flex.js";

import "./flex.css";

class Homepage extends React.Component {
	render() {
		return <h1></h1>;
	}
}

ReactDOM.render(<Homepage />, document.querySelector("#root"));
