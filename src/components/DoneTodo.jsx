import men from "../image/men.png"

function DoneTodo({ todos_completed, total_todos }) {
    return(
        <div className="mt-5 pt-3 ">
            <div className="done mt-3 ">
                <div className=" ms-5">
                    <div className=" mt-4 pt-4">
                        <div className="done__main-text">
                            {todos_completed}/{total_todos}
                        </div>
                        <p className="done__reg-text">Keep it up!</p>
                    </div>                   
                </div> 
                <img  className=" done__img" src= {men}/>                   
            </div>
        </div>
    )

}

export {DoneTodo}