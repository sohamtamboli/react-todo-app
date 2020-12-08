import React from "react";
import Todo from "./Todo";

function TodoList({ todoList }) {
	return (
		<div className='list-container'>
			<ul>
				{todoList.map((singleTodo, index) => (
					<Todo text={singleTodo.text} key={index} />
				))}
			</ul>
		</div>
	);
}

export default TodoList;
