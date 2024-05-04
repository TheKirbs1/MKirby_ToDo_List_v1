import React, { useState } from "react";

//styles
import '../../styles/TodoBody.css'

//the delete button will appear only on hover

//be able to delete a task by clicking the trash icon
//we will us arrays.filter() to help with removing the task object
//creating a function to delete the task, require the id

const TodoBody = ({todos, setTodos}) => {
	
	const deleteTask = (selectedTodoId) => {
		//filter the todos and keep any todo that does NOT match the id
		//assign it to a new array variable
		// then we can call setTodos to set the filtered array
		let updatedTodos = todos.filter(todo => todo.id !== selectedTodoId);
		setTodos(updatedTodos);
	}

	let renderTasks = todos.map(todo => {
		return (

			<li key={todo.id}className="task-item">
				<span className="task">{todo.title}</span>
				<span className="trash">
					<svg xmlns="http://www.w3.org/2000/svg" 
					width="18" 
					height="18"
					fill="currentColor"
					className="bi bi-x-lg"
					viewBox="0 0 16 16"
					onClick={() => deleteTask(todo.id)}
					>
					<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
					</svg>
				</span>
				<div className="h_line"></div>
			</li>
		)	
	})
	
	return (
		<>
		<div className="taskListStyle">
			<section className="main">
			<div className="h_line"></div>
				<ul className="task-list">
					{todos.length !== 0 ? renderTasks : "No tasks. Add a task"}
				</ul>

			</section>
			</div>
		</>
	);
};

export default TodoBody;
