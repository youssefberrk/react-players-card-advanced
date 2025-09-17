import React from "react";
import PlayersList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div
			style={{
				marginTop: "-2px",
			}}>
			<h1 className="stylish-title">Football Players ⚽ : </h1>
			<PlayersList />
		</div>
	);
}

export default App;
