import React, { useState, useEffect } from "react";

//styles
import '../../styles/TodoBody.css'

const TodoBody = ({todos, setTodos}) => {
	
	useEffect(() => {
		fetch('https://playground.4geeks.com/todo/users/MKirby')
		.then(response => response.json())
		.then(data => {
			setTodos(data.todos)
		})
		.catch(error => console.log("Error", error))
	}, [todos])

	const deleteTask = async (selectedTodoId) => {
        let updatedTodos = todos.filter(todo => todo.id !== selectedTodoId);
        setTodos(updatedTodos);
        
        const response = await fetch(`https://playground.4geeks.com/todo/todos/${selectedTodoId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log('Error: ', response.status, response.statusText);
            return {
                error: {
                    status: response.status, 
                    statusText: response.statusText
                }
            }
        }
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
