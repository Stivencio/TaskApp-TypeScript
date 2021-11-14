import React from "react";
import ReactDOM from "react-dom";
import "bootswatch/dist/vapor/bootstrap.min.css";
import "./index.css";
import { App } from "./App";

ReactDOM.render(
	<React.StrictMode>
		<App title={"TypeScript in React"} />
	</React.StrictMode>,
	document.getElementById("root")
);
