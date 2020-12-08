import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
	const [input, setInput] = useState("");
	const [todoList, setTodoList] = useState([]);

	return (
		<div className='app'>
			<div className='header'>
				<h1> Your Todos </h1>
			</div>
			<div className='list-container'>
				<TodoInput
					input={input}
					setInput={setInput}
					todoList={todoList}
					setTodoList={setTodoList}
				/>
				<TodoList todoList={todoList} setTodoList={setTodoList} />
			</div>
		</div>
	);
}

export default App;
