import  {useRef} from "react";
import { useTodo} from "../../context/TodoContext"

function List () {
  const {todos} = useTodo();
  

  console.log(todos);

    return (
        <div>
           <ul className="todo-list">
			  {todos.map((todo) => (
				<li key={todo.id} className="completed">
					<div className="view">
						<input className="toggle" type="checkbox" />
						<label>{todo.text}</label>
						<button className="destroy"></button>
					</div>
				</li>
				))}
		    </ul>
        </div>
    )
}

export default List;