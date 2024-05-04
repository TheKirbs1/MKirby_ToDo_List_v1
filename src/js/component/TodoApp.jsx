import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";

//styles
import '../../styles/TodoApp.css'


const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    
	return (
		<>
        <div className="container-fluid"><h1>todos</h1></div>
        <div className="todos-wrapper">
            <div>
                <TodoHeader 
                    todos={todos}
                    setTodos={setTodos} 
                />
            </div>
            <div>
                <TodoBody
                    todos={todos} 
                    setTodos={setTodos}
                 />
            </div>
            <div>
                <TodoFooter todos={todos}/>
            </div>
        </div>
        </>
	);
};

export default TodoApp;
