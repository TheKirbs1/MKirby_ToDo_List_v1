import React from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";

//styles
import '../../styles/TodoApp.css'

const TASKS = [
    {id: 0, task: "Wash car"},
    {id: 1, task: "Do homework"},
    {id: 2, task: "Mow the lawn"}
]



const TodoApp = () => {
	return (
		<>
        <div className="todos-wrapper">
            <div>
                <TodoHeader />
            </div>
            <div>
                <TodoBody todos={TASKS}/>
            </div>
            <div>
                <TodoFooter todos={TASKS}/>
            </div>
        </div>
        </>
	);
};

export default TodoApp;
