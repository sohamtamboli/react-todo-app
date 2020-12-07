import React from "react";

function TodoInput() {
	return (
		<div>
			<div className='input-container'>
				<input
					type='text'
					placeholder='Add your Todo...'
					className='input-field'
				/>
				<button className='input-button'>Add</button>
			</div>
		</div>
	);
}

export default TodoInput;
