import {useState, useEffect, useRef} from 'react';

function TodoItem({item, todos, setTodos}){
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);

    const completedTodo = () => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === item.id
              ? { ...todo, is_completed: !todo.is_completed }
              : todo
          )
        );
        const updatedTodos = JSON.stringify(todos);
        localStorage.setItem("todos", updatedTodos);
    }; 

    const handleEdit = () => {
        setEditing(true);
    }

    const handleEditSubmit = (e) => {
        e.preventDeafult();
        const updatedTodos = JSON.stringify(todos);
        localStorage.setItem("todos", updatedTodos);
        setEditing(false);
    }

    const handleEditBlur = () =>{
        const updatedTodos = JSON.stringify(todos);
        localStorage.setItem("todos", updatedTodos);
        setEditing(false);
    }

    useEffect (() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();            
            inputRef.current.setSelectionRange(
              inputRef.current.value.length,
              inputRef.current.value.length
            );
          }
    }, [editing])

    const handleEditChange = (e) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === item.id ? { ...todo, title: e.target.value } : todo
          )
        );
      };

    
    const handleDelete = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id))
        const updatedTodos = JSON.stringify(
            todos.filter((todo) => todo.id !== item.id)
          );
        localStorage.setItem("todos", updatedTodos);
        
    };
    

    return(
      <div className='list'>
        <li id={item?.id}>
            {editing ? (             
                <form onSubmit={handleEditSubmit}>
                  <input
                  className='list__edit'
                  ref={inputRef}
                  type='text'
                  name="edit-todo"
                  id="edit-todo"
                  defaultValue={item?.title}
                  onBlur={handleEditBlur}
                  onChange={handleEditChange}
                  />
              </form>           
             
            ) : (
                <div className='d-flex container justify-content-between'>
                  <div onClick={completedTodo}>
       
                      <p 
                      style={item.is_completed ? { color: "#B897D2", textDecoration:"line-through", textDecorationColor:"#B897D2"} : {}}>
                      {item.is_completed? (
                        <i className="bi bi-circle-fill pe-3"></i>
                      ): <i className="bi bi-circle pe-3"></i>}
                      {item?.title}
                      </p>
                  </div>
                  <div>
                      <button className='list__button' onClick={handleEdit}><i className="bi bi-pen"></i></button>
                      <button className='list__button' onClick={handleDelete}><i className="bi bi-trash3"></i></button>
                  </div>                
                </div>            
            )}
            
        </li>
      </div>
        
    )
}

export {TodoItem}