import React, { useState } from "react";

function Todo({ text }) {
	const [flag, setFlag] = useState(false);
	const addDone = () => {
		setFlag(!flag);
	};

	return (
		<div className='list-items'>
			<li className={flag ? "done" : "list-item"}>{text}</li>
			<div onClick={addDone}>
				{flag ? (
					<div className='incomplete-icon'>
						<box-icon size='md' color='#fff' name='x'></box-icon>
					</div>
				) : (
					<div className='complete-icon'>
						<box-icon size='md' color='#fff' name='check'></box-icon>
					</div>
				)}
			</div>
		</div>
	);
}

export default Todo;
