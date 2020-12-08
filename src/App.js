import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
	return (
		<div className='app'>
			<div className='header'>
				<h1> Your Todos </h1>
			</div>
			<div className='list-container'>
				<TodoInput />
				<TodoList />
			</div>
		</div>
	);
}

export default App;
