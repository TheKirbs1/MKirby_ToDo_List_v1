import React, { useState, useEffect } from "react";

//styles
import '../../styles/TodoBody.css'

const TodoBody = ({todos, setTodos}) => {
	
	//useEffect -> allows us to synchronize a component with an external system
	//We can use useEffect to make a fetch call and retrieve our todo list

	//useEffect has 2 paramaters (callback function, dependency array)
	// the callback function will be where we use our fetch call and process the response.
	// the dependency array is used to determine how the browser will rerender information
	useEffect(() => {
		fetch('https://playground.4geeks.com/todo/users/MKirby')
		.then(response => response.json())
		.then(data => {
			setTodos(data.todos)
		})
		.catch(error => console.log("Error", error))
	}, [todos])

	// //create a useEffect to delete a task
	// useEffect(() => {
	// 	fetch('https://playground.4geeks.com/todo/todos/2')
	// 	.then()
	// }, [])

	const deleteTask = (selectedTodoId) => {
		let updatedTodos = todos.filter(todo => todo.id !== selectedTodoId);
		setTodos(updatedTodos);
	}
	

	let renderTasks = todos.map(todo => {
		return (

			<li key={todo.id}className="task-item">
				<span className="task">{todo.label}</span>
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
