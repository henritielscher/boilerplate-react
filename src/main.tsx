import React from "react";
import ReactDOM from "react-dom";
import "./../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./scss/style.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
