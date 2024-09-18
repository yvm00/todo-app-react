import { TodoItem } from "./TodoItem"

function TodoList({todos, setTodos}){

    return(
        <div className="container p-0 form__scroll">
            <ul>
                {todos && todos.length > 0? (
                    todos?.map((item, index) => 
                    <TodoItem
                        key={index} 
                        item={item}
                        todos={todos}
                        setTodos={setTodos}
                    />)
                ) : (
                    <p className="ps-2 ">Nothing here</p>
                    )}
        </ul>
        </div>
       
    )
}

export {TodoList}