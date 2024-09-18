
function Form({todos, setTodos}){

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            title: e.target.todo.value,
            id: crypto.randomUUID(),
            id_completed: false,
        };

        setTodos((prevTodos) => [...prevTodos,newTodo]);

        const updatedTodoList = JSON.stringify([...todos, newTodo]);
        localStorage.setItem("todos", updatedTodoList);
    
        e.target.reset();
    }


    return(
        <div className="container p-0 ">         
            <form onSubmit={handleSubmit}>
            <div className="mb-4 d-flex justify-content-between">
                <input className="form__input" type="text" name="todo" id="todo" placeholder="Add something" 
            />
            <button className="form__button " onSubmit={handleSubmit} > 
                <i className="bi bi-plus-circle-fill"></i>
            </button>
            </div> 
        </form>
       
      
        </div>
       
    )
}

export {Form}