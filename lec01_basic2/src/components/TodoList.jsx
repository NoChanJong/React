import React from 'react';

const TodoList = (props) => {
	
	const {todos} = props; // data(title, todos)
	
	console.log(`${todos}`);
	
	
	var todolist = todos.map((item, index) => {
		let status = '';
		if(item.done === true) status = '완료';
		else status = '진행중';
		return (
			<li key={item.id}>
				{item.todo} : {status}
			</li>
		);
	});

	return <ul>{todolist}</ul>;
};

export default TodoList;