import React from "react";

//styles
import '../../styles/TodoFooter.css'

const TodoFooter = ({todos}) => {
	return (
		<>
        <footer className="footer">
			{todos.length !== 1 ? `${todos.length} items left`
			:
			`${todos.length} item left`
			}
		
		</footer>
		</>
	);
};

export default TodoFooter;
