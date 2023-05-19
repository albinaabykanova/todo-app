import React from "react";
import { useTodo } from "../../../context/TodoContext";

function Item({ todo }) {
  const { todos, setTodos } = useTodo();

  const onChange = (id) => {
	 const cloned_todos = [...todos];

	 const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
	 const item = todos[itemIndex];
	 item.completed = !item.completed;

	 setTodos(cloned_todos);
  };

   return(
      <li key={todo.id} className={todo.completed ? "completed" : ""}>
		  <div className="view">
			 <input 
			   className="toggle" 
			   type="checkbox"
			   checked={todo.completed}
			   onChange={() => onChange(todo.id)}
			/>
			  <label>{todo.text}</label>
			  <button className="destroy"></button>
		</div>
	</li>
    )
}

export default Item;