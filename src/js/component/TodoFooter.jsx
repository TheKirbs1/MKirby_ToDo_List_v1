import React from "react";


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
