import React from "react";
import { useTodo} from "../../../context/TodoContext";
import Item from "./Item";

let filtred = null;

function List() {
  const {todos} = useTodo();

  filtred = todos;

  if(activeFilter !== 'all')

    return (
      <ul className="todo-list">
		    {todos.map((todo) => (
			    <Item key={todo.id} todo={todo}/>
		  ))}
	  </ul>
    )
}

export default List;