import React from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from "../modules/todos";

const TodosContainer = ({
	input,
	todos,
	changeInput,
	insert,
	toggle,
	remove
}) => {
	return (
		<Todos 
			input={input}
			todos={todos}
			onChangeInput={changeInput}
			onInsert={insert}
			onToggle={toggle}
			onRemove={remove}
		/>
	);
};

export default connect(
	// 비구조화할당을 통해서 todos를 분리
	({ todos }) => ({
		input: todos.input,
		todos: todos.todos
	}),
	{
		changeInput,
		insert,
		toggle,
		remove
	}
)(TodosContainer);