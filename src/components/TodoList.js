import React, { useState } from "react";
import Todo from "./Todo";

function TodoList() {
	const [todo, setTodo] = useState();
	return (
		<div>
			<ul>
				<Todo />
			</ul>
		</div>
	);
}

export default TodoList;
