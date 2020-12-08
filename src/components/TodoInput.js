import React from "react";

function TodoInput({ input, setInput, todoList, setTodoList }) {
	const getInputText = (e) => {
		setInput(e.target.value);
	};
	const submit = (e) => {
		setTodoList([
			...todoList,
			{
				text: input,
				completed: false,
			},
		]);
		setInput("");
	};
	return (
		<div>
			<div className='input-container'>
				<input
					type='text'
					placeholder='Add your Todo...'
					className='input-field'
					value={input}
					onChange={getInputText}
				/>
				<button onClick={submit} className='input-button'>
					Add
				</button>
				{/* <h1> {input} </h1> */}
			</div>
		</div>
	);
}

export default TodoInput;
