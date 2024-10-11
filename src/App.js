import { TodoList } from "./components/TodoList"
import { Form } from "./components/Form";
import { Timer } from "./components/Timer";
import { DoneTodo } from "./components/DoneTodo";
import { useState, useEffect } from "react"



function App(){  
  const [todos, setTodos] = useState([])
  
  useEffect(() =>{
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos){
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const todos_completed = todos.filter(
    (todo) => todo.is_completed == true
  ).length;
  const total_todos = todos.length;


  return(
    <main>
      <div className="wrapper">
        <div className="app">
          <div className="row row-cols-1 row-cols-md-2 ">    
            <div className ="col-md-8 mt-3">
            <p className="logo">Taski</p> 
            <div className="form">
              <Form  todos={todos} setTodos={setTodos}/>
              <TodoList todos={todos} setTodos={setTodos}/>
            </div>              
            </div>
            <div className="col-md-4 ">
              <div className="row row-2 row-md-1 ">
                <div className="col col-md-12 ">
                  <Timer/> 
                </div>                
                </div>
                <div className="col col-md-12">
                  <DoneTodo todos_completed={todos_completed} total_todos={total_todos}/>
                </div>
            </div>         
        </div>
       
        </div>
        
      </div>      
    </main>
  )
}

export default App;