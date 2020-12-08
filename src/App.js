import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";

function App() {
	return (
		<div className='app'>
			<div className='header'>
				<h1> Your Todos </h1>
			</div>
			<div className='list-container'>
				<TodoInput />
			</div>
		</div>
	);
}

export default App;
