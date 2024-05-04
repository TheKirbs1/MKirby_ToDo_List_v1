import React, {useState} from "react";

//styles
import '../../styles/TodoHeader.css'


const TodoHeader = ({todos, setTodos}) => {
	const [newTask, setNewTask] = useState("")
	const [idCounter, setIdCounter] = useState(0);

	const addTask = () => {
		// console.log("creating new task: ", newTask)
		
		let newTodoObject = {
			id: idCounter,
			title: newTask, 
		};

		setTodos([...todos, newTodoObject]);
		setIdCounter(idCounter +1);
	}
	//text validation
	const checkTextBox = () => {
		let textBox = document.querySelector(".task-input");

		if (textBox.value === "") {
			alert("Please add a task.")
		} else{
			addTask();
			setNewTask("");
		}
	}

	return (
		<>
			<header className="header">
				<input 
					className="task-input"
					type="text"
					placeholder="What needs to be done?"
					value={newTask}
					onChange={event => setNewTask(event.target.value)}
				/>
				<button
					onClick= {checkTextBox}
				>
					Add Task
				</button>
			</header>
		</>
	);
};

export default TodoHeader;
