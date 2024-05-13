import React, {useState} from "react";

//styles
import '../../styles/TodoHeader.css'


const TodoHeader = ({todos, setTodos}) => {
	const [newTask, setNewTask] = useState("")


	const postNewTask = async (todoObject) => {
        const options = {
            method: 'POST',
            body: JSON.stringify(todoObject),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch('https://playground.4geeks.com/todo/todos/MKirby', options)
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
    
    const addTask = () => {

        let newTodoObject = {
            label: newTask,
            is_done: false
        };
        
        const newTodos = [...todos, newTodoObject];
        setTodos(newTodos);

        postNewTask(newTodoObject);
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
