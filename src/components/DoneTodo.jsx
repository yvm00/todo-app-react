function DoneTodo({ todos_completed, total_todos }) {
    return(
        <div className="container ">
            <p className="main__text mt-4 pt-3 ">Task done</p>
            <div className="done d-flex mt-3 ">
                <div className="row ms-3">
                    <div className="col-5 align-self-center">
                            <img className="done__img" src="./done.png"/>                       
                    </div>
                    <div className="col-7 mt-2 pt-4">
                    <div className="done__main__text">
                        {todos_completed}/{total_todos}
                    </div>
                    <p className="done__reg__text">Keep it up!</p>
                    </div>
                </div>            
            </div>
        </div>
    )

}

export {DoneTodo}