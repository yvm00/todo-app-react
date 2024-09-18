import { TodoList } from "./components/TodoList"
import { Form } from "./components/Form";
import { Timer } from "./components/Timer";
import { Header } from "./components/Header";
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
          <Header/>
          <div className="row row-cols-1 row-cols-sm-2 ">    
            <div className ="col-sm-8 mt-3">
            <p className="main__text">Building better habits</p> 
            <div className="form">
              <Form  todos={todos} setTodos={setTodos}/>
              <TodoList todos={todos} setTodos={setTodos}/>
            </div>              
            </div>
            <div className="col-sm-4 ">
              <div className="row row-2 row-sm-1 ">
                <div className="col col-sm-12 ">
                  <Timer/> 
                </div>                
                </div>
                <div className="col col-sm-12">
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